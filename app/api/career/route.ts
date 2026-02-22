import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const position = formData.get("position") as string;
    const message = formData.get("message") as string;
    const cvFile = formData.get("cv") as File | null;

    if (!fullName || !email || !phone || !position) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Convert file to base64 if exists
    let cvBase64: string | null = null;
    let cvFileName: string | null = null;

    if (cvFile && cvFile.size > 0) {
      const arrayBuffer = await cvFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      cvBase64 = buffer.toString("base64");
      cvFileName = cvFile.name;
    }

    // Prepare email content
    const emailContent = `
      <h2>New Job Application</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Position:</strong> ${position}</p>
      ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
    `;

    // Prepare attachments
    const attachments: any[] = [];
    if (cvBase64 && cvFileName) {
      attachments.push({
        filename: cvFileName,
        content: cvBase64,
      });
    }

    // Send email using Resend
    if (!resend) {
      console.error("Resend API key not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.TO_EMAIL || "delivered@resend.dev",
      subject: `Job Application: ${position} - ${fullName}`,
      html: emailContent,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

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
