import { NextRequest, NextResponse } from "next/server";
import { escapeHtml, isSmtpConfigured, sendSiteMail } from "@/lib/smtp-mail";
import { RECAPTCHA_ACTIONS, verifyRecaptchaToken } from "@/lib/verify-recaptcha";

export async function POST(request: NextRequest) {
  try {
    if (!isSmtpConfigured()) {
      console.error("SMTP_USER / SMTP_PASS not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const recaptchaToken =
      typeof body.recaptchaToken === "string" ? body.recaptchaToken : "";

    const verified = await verifyRecaptchaToken(
      recaptchaToken,
      RECAPTCHA_ACTIONS.contact
    );
    if (!verified.ok) {
      return NextResponse.json(
        { error: "Verification failed" },
        { status: 400 }
      );
    }

    const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!fullName || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const html = `
      <h2>Website contact form</h2>
      <p><strong>Full name:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    `;

    await sendSiteMail({
      subject: `[Contact] ${subject}`,
      html,
      replyTo: email,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
