import { NextResponse } from "next/server";
import {
  escapeHtml,
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

    await transporter.sendMail({
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

    return NextResponse.json({ message: "Service request sent successfully." });
  } catch (error) {
    console.error("Service request email failed", error);

    return NextResponse.json(
      { message: "Unable to send the service request email." },
      { status: 500 },
    );
  }
}
