// app/api/send-email/route.ts
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { EmailTemplate } from "@/components/contact/sections/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, subsidiary, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "ASHR Group <onboarding@ashrgroup.com.ng>", // VERIFIED DOMAIN ONLY
      to: "info@ashrgroup.com.ng",
      replyTo: email,
      subject: `New Inquiry: ${subsidiary} – ${name}`,
      react: EmailTemplate({
        name,
        email,
        phone,
        subsidiary,
        message,
      }) as React.ReactElement,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Send error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
