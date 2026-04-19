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

type ServiceRequestPayload = {
  name?: string;
  email?: string;
  phone?: string;
  boatLocation?: string;
  requestedService?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    console.log("[service-request] incoming request");

    const body = (await request.json()) as ServiceRequestPayload;
    const fields = {
      name: body.name?.toString().trim() ?? "",
      email: body.email?.toString().trim() ?? "",
      phone: body.phone?.toString().trim() ?? "",
      boatLocation: body.boatLocation?.toString().trim() ?? "",
      requestedService: body.requestedService?.toString().trim() ?? "",
      message: body.message?.toString().trim() ?? "",
    };

    const missingField = Object.entries(fields).find(([, value]) => !value);

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
    const subject = `New Service Request: ${fields.requestedService}`;

    console.log("[service-request] mail config", getMailDebugConfig());
    await transporter.verify();
    console.log("[service-request] smtp verify succeeded");

    const result = await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: fields.email,
      subject,
      text: [
        "New service request received.",
        "",
        `Name: ${fields.name}`,
        `Email: ${fields.email}`,
        `Phone: ${fields.phone}`,
        `Boat Location: ${fields.boatLocation}`,
        `Requested Service: ${fields.requestedService}`,
        "",
        "Message:",
        fields.message,
      ].join("\n"),
      html: `
        <h2>New service request received</h2>
        <p><strong>Name:</strong> ${escapeHtml(fields.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(fields.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(fields.phone)}</p>
        <p><strong>Boat Location:</strong> ${escapeHtml(fields.boatLocation)}</p>
        <p><strong>Requested Service:</strong> ${escapeHtml(fields.requestedService)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(fields.message).replace(/\n/g, "<br />")}</p>
      `,
    });

    console.log("[service-request] email sent", {
      messageId: result.messageId,
      accepted: result.accepted,
      rejected: result.rejected,
      response: result.response,
    });

    return NextResponse.json({ message: "Service request sent successfully." });
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

    console.error("[service-request] email failed", details);

    return NextResponse.json(
      { message: "Unable to send the service request email." },
      { status: 500 },
    );
  }
}
