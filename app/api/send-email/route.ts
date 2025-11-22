// app/api/send-email/route.ts
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, subsidiary, message } = await request.json();

    await resend.emails.send({
      from: "hellojacobsdavid@gmail.com",
      to: "jacobsdavid.dr@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission - ${subsidiary}`,
      html: `
        <h2>New Message from ASHR Group Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subsidiary:</strong> ${subsidiary}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
        <br/>
        <p>Sent from ashrgroup.com.ng</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
