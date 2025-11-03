import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      company,
      project_title,
      description,
      budget,
      timeline,
    } = body;

    if (!name || !email || !project_title || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Ubunifu Labs Project Form" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.RECIPIENT_EMAIL || process.env.CONTACT_EMAIL,
      subject: `New Project Request: ${project_title}`,
      html: `
  <div style="font-family: 'Segoe UI', sans-serif; background-color: #f5f7f8; padding: 30px;">
    <table style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); overflow: hidden;">
      <tr>
        <td style="background-color: #0d9488; padding: 20px 30px;">
          <h1 style="margin: 0; color: #ffffff; font-size: 22px;">New Project Request</h1>
          <p style="margin: 5px 0 0; color: #c6f1ed; font-size: 14px;">From Ubunifu Labs Website</p>
        </td>
      </tr>
      <tr>
        <td style="padding: 30px;">
          <p style="font-size: 15px; color: #374151; margin-bottom: 20px;">Hello team,</p>
          <p style="font-size: 15px; color: #374151;">A new project request has been submitted through the Ubunifu Labs website. Here are the details:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #0d9488; font-weight: 600; width: 150px;">Name:</td>
              <td style="padding: 8px 0; color: #374151;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #0d9488; font-weight: 600;">Email:</td>
              <td style="padding: 8px 0; color: #374151;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #0d9488; font-weight: 600;">Company:</td>
              <td style="padding: 8px 0; color: #374151;">${
                company || "Not provided"
              }</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #0d9488; font-weight: 600;">Project Title:</td>
              <td style="padding: 8px 0; color: #374151;">${project_title}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #0d9488; font-weight: 600; vertical-align: top;">Description:</td>
              <td style="padding: 8px 0; color: #374151;">${description}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #0d9488; font-weight: 600;">Budget:</td>
              <td style="padding: 8px 0; color: #374151;">${
                budget || "Not specified"
              }</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #0d9488; font-weight: 600;">Timeline:</td>
              <td style="padding: 8px 0; color: #374151;">${
                timeline || "Not specified"
              }</td>
            </tr>
          </table>

          <div style="margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 15px;">
            <p style="font-size: 13px; color: #6b7280;">You received this message because someone submitted a project request via <strong>Ubunifu Labs</strong>.</p>
          </div>
        </td>
      </tr>
      <tr>
        <td style="background-color: #f0fdfa; padding: 20px; text-align: center;">
          <p style="margin: 0; color: #0d9488; font-size: 14px; font-weight: 600;">Ubunifu Labs</p>
          <p style="margin: 5px 0 0; font-size: 13px; color: #6b7280;">Innovative Software & Consulting Solutions</p>
        </td>
      </tr>
    </table>
  </div>
`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Project request sent successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error("Email send error:", errMsg);
    return NextResponse.json(
      { error: "Failed to send project request" },
      { status: 500 }
    );
  }
}
