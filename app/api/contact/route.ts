import { NextResponse } from "next/server";
import {
  escapeHtml,
  getMailDebugConfig,
  getMailRecipient,
  getMailSender,
  getMailTransporter,
  isValidEmail,
} from "@/lib/mail";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  boatLocation?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    console.log("[contact] incoming request");

    const body = (await request.json()) as ContactPayload;
    const fields = {
      name: body.name?.toString().trim() ?? "",
      email: body.email?.toString().trim() ?? "",
      phone: body.phone?.toString().trim() ?? "",
      boatLocation: body.boatLocation?.toString().trim() ?? "",
      message: body.message?.toString().trim() ?? "",
    };

    const missingField = Object.entries({
      name: fields.name,
      email: fields.email,
      phone: fields.phone,
      message: fields.message,
    }).find(([, value]) => !value);

    if (missingField) {
      return NextResponse.json(
        { message: `Missing required field: ${missingField[0]}` },
        { status: 400 },
      );
    }

    if (!isValidEmail(fields.email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const transporter = getMailTransporter();
    const fromEmail = getMailSender();
    const toEmail = getMailRecipient();

    console.log("[contact] mail config", getMailDebugConfig());
    await transporter.verify();
    console.log("[contact] smtp verify succeeded");

    const result = await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: fields.email,
      subject: `New Contact Inquiry from ${fields.name}`,
      text: [
        "New contact inquiry received.",
        "",
        `Name: ${fields.name}`,
        `Email: ${fields.email}`,
        `Phone: ${fields.phone}`,
        `Boat Location: ${fields.boatLocation || "Not provided"}`,
        "",
        "Message:",
        fields.message,
      ].join("\n"),
      html: `
        <h2>New contact inquiry received</h2>
        <p><strong>Name:</strong> ${escapeHtml(fields.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(fields.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(fields.phone)}</p>
        <p><strong>Boat Location:</strong> ${
          fields.boatLocation
            ? escapeHtml(fields.boatLocation)
            : "Not provided"
        }</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(fields.message).replace(/\n/g, "<br />")}</p>
      `,
    });

    console.log("[contact] email sent", {
      messageId: result.messageId,
      accepted: result.accepted,
      rejected: result.rejected,
      response: result.response,
    });

    return NextResponse.json({ message: "Inquiry sent successfully." });
  } catch (error) {
    const details =
      error instanceof Error
        ? {
            message: error.message,
            name: error.name,
            stack: error.stack,
            code: "code" in error ? String(error.code) : undefined,
            command: "command" in error ? String(error.command) : undefined,
            response:
              "response" in error ? String(error.response) : undefined,
            responseCode:
              "responseCode" in error
                ? String(error.responseCode)
                : undefined,
          }
        : { message: String(error) };

    console.error("[contact] inquiry email failed", details);

    return NextResponse.json(
      { message: "Unable to send the inquiry email." },
      { status: 500 },
    );
  }
}
