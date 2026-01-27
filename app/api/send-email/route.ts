// app/api/send-email/route.ts
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { EmailTemplate } from "@/components/contact/sections/email-template";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subsidiary, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "ASHR Group Contact Form <contact@ashrgroup.com.ng>", // ← Main domain
      to: "info@ashrgroup.com.ng",
      replyTo: email,
      subject: `New Inquiry: ${subsidiary || "General"} – ${name}`,
      react: EmailTemplate({
        name,
        email,
        phone: phone || "Not provided",
        subsidiary: subsidiary || "Not specified",
        message,
      }) as React.ReactElement,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      id: data?.id,
    });
  } catch (err) {
    console.error("Server error while sending email:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
