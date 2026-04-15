import { NextResponse } from "next/server";
import {
  getMailRecipient,
  getMailSender,
  getMailTransporter,
  getMissingMailConfig,
  hasValidMailPort,
} from "@/lib/mail";
import type {
  FormSubmissionResponse,
  GeneralInquiryPayload,
} from "@/lib/service-request";

export const runtime = "nodejs";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function normalizeString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function buildEmailHtml({
  name,
  email,
  phone,
  boatLocation,
  message,
}: GeneralInquiryPayload) {
  const escapedName = escapeHtml(name);
  const escapedEmail = escapeHtml(email);
  const escapedPhone = escapeHtml(phone);
  const escapedBoatLocation = boatLocation
    ? escapeHtml(boatLocation)
    : "Not provided";
  const escapedMessage = message
    ? escapeHtml(message)
    : "No additional message provided.";

  return `
    <h1>New General Inquiry</h1>
    <p><strong>Name:</strong> ${escapedName}</p>
    <p><strong>Email:</strong> ${escapedEmail}</p>
    <p><strong>Phone:</strong> ${escapedPhone}</p>
    <p><strong>Boat Location:</strong> ${escapedBoatLocation}</p>
    <p><strong>Message:</strong></p>
    <p>${escapedMessage.replace(/\n/g, "<br />")}</p>
  `;
}

export async function POST(request: Request) {
  const missingMailConfig = getMissingMailConfig();

  if (missingMailConfig.length > 0) {
    const response: FormSubmissionResponse = {
      ok: false,
      message:
        "Email delivery is not configured yet. Add the SMTP environment variables and try again.",
    };

    return NextResponse.json(response, { status: 500 });
  }

  if (!hasValidMailPort()) {
    const response: FormSubmissionResponse = {
      ok: false,
      message:
        "Email delivery is not configured correctly yet. Check the SMTP port value and try again.",
    };

    return NextResponse.json(response, { status: 500 });
  }

  let payload: Partial<GeneralInquiryPayload>;

  try {
    payload = (await request.json()) as Partial<GeneralInquiryPayload>;
  } catch {
    const response: FormSubmissionResponse = {
      ok: false,
      message: "We could not read that inquiry. Please try again.",
    };

    return NextResponse.json(response, { status: 400 });
  }

  const name = normalizeString(payload.name);
  const email = normalizeString(payload.email);
  const phone = normalizeString(payload.phone);
  const boatLocation = normalizeString(payload.boatLocation);
  const message = normalizeString(payload.message);

  if (!name || !email || !phone || !message) {
    const response: FormSubmissionResponse = {
      ok: false,
      message: "Please include your name, email, phone, and message.",
    };

    return NextResponse.json(response, { status: 400 });
  }

  if (!isValidEmail(email)) {
    const response: FormSubmissionResponse = {
      ok: false,
      message: "Please enter a valid email address.",
    };

    return NextResponse.json(response, { status: 400 });
  }

  const recipient = getMailRecipient();
  const sender = getMailSender();

  try {
    const transporter = getMailTransporter();

    await transporter.sendMail({
      to: recipient,
      from: sender,
      replyTo: email,
      subject: `New contact inquiry from ${name}`,
      text: [
        "New General Inquiry",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Boat Location: ${boatLocation || "Not provided"}`,
        "Message:",
        message,
      ].join("\n"),
      html: buildEmailHtml({
        name,
        email,
        phone,
        boatLocation,
        message,
      }),
    });
  } catch (error) {
    console.error("Failed to send general inquiry email", error);

    const response: FormSubmissionResponse = {
      ok: false,
      message:
        "We could not send your inquiry right now. Please try again in a moment or call directly.",
    };

    return NextResponse.json(response, { status: 500 });
  }

  const response: FormSubmissionResponse = {
    ok: true,
    message:
      "Your inquiry was sent successfully. We will review it and follow up shortly.",
  };

  return NextResponse.json(response);
}
