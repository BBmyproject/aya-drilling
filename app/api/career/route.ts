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

    const formData = await request.formData();

    const recaptchaToken = String(formData.get("recaptchaToken") || "");
    const verified = await verifyRecaptchaToken(
      recaptchaToken,
      RECAPTCHA_ACTIONS.career
    );
    if (!verified.ok) {
      return NextResponse.json(
        { error: "Verification failed" },
        { status: 400 }
      );
    }

    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const position = String(formData.get("position") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const cvFile = formData.get("cv") as File | null;

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailContent = `
      <h2>New job application</h2>
      <p><strong>Full name:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      ${position ? `<p><strong>Position:</strong> ${escapeHtml(position)}</p>` : ""}
      ${message ? `<p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>` : ""}
    `;

    const attachments =
      cvFile && cvFile.size > 0
        ? [
            {
              filename: cvFile.name,
              content: Buffer.from(await cvFile.arrayBuffer()),
            },
          ]
        : undefined;

    const subjectLine = position
      ? `Job application: ${position} — ${fullName}`
      : `Job application — ${fullName}`;

    await sendSiteMail({
      subject: subjectLine,
      html: emailContent,
      replyTo: email,
      attachments,
    });

    return NextResponse.json(
      { success: true, message: "Application submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing application:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
