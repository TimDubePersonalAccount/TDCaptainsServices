import { NextResponse } from "next/server";
import {
  getMailRecipient,
  getMailSender,
  getMailTransporter,
  getMissingMailConfig,
  hasValidMailPort,
} from "@/lib/mail";
import { getServiceBySlug } from "@/lib/services";
import type {
  FormSubmissionResponse,
  ServiceRequestPayload,
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

function normalizeStringArray(value: unknown) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item) => (typeof item === "string" ? item.trim() : ""))
    .filter(Boolean);
}

function buildEmailHtml({
  name,
  email,
  phone,
  boatLocation,
  requestedServiceTitle,
  requestedSubserviceTitles,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  boatLocation: string;
  requestedServiceTitle: string;
  requestedSubserviceTitles: string[];
  message: string;
}) {
  const escapedName = escapeHtml(name);
  const escapedEmail = escapeHtml(email);
  const escapedPhone = escapeHtml(phone);
  const escapedBoatLocation = escapeHtml(boatLocation);
  const escapedServiceTitle = escapeHtml(requestedServiceTitle);
  const escapedSubservices = requestedSubserviceTitles.map(escapeHtml).join(", ");
  const escapedMessage = message
    ? escapeHtml(message)
    : "No additional message provided.";

  return `
    <h1>New Service Request</h1>
    <p><strong>Name:</strong> ${escapedName}</p>
    <p><strong>Email:</strong> ${escapedEmail}</p>
    <p><strong>Phone:</strong> ${escapedPhone}</p>
    <p><strong>Boat Location:</strong> ${escapedBoatLocation}</p>
    <p><strong>Requested Service:</strong> ${escapedServiceTitle}</p>
    <p><strong>Requested Subservices:</strong> ${escapedSubservices}</p>
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

  let payload: Partial<ServiceRequestPayload>;

  try {
    payload = (await request.json()) as Partial<ServiceRequestPayload>;
  } catch {
    const response: FormSubmissionResponse = {
      ok: false,
      message: "We could not read that request. Please try again.",
    };

    return NextResponse.json(response, { status: 400 });
  }

  const name = normalizeString(payload.name);
  const email = normalizeString(payload.email);
  const phone = normalizeString(payload.phone);
  const boatLocation = normalizeString(payload.boatLocation);
  const requestedService = normalizeString(payload.requestedService);
  const requestedSubservices = normalizeStringArray(payload.requestedSubservices);
  const message = normalizeString(payload.message);

  if (!name || !email || !phone || !boatLocation || !requestedService) {
    const response: FormSubmissionResponse = {
      ok: false,
      message:
        "Please include your name, email, phone, boat location, and selected service.",
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

  const service = getServiceBySlug(requestedService);

  if (!service) {
    const response: FormSubmissionResponse = {
      ok: false,
      message: "Please choose a valid service before sending your request.",
    };

    return NextResponse.json(response, { status: 400 });
  }

  const subservicesBySlug = new Map(
    service.subservices.map((subservice) => [subservice.slug, subservice.title]),
  );
  const requestedSubserviceTitles = requestedSubservices
    .map((slug) => subservicesBySlug.get(slug))
    .filter((title): title is string => Boolean(title));

  if (requestedSubserviceTitles.length === 0) {
    const response: FormSubmissionResponse = {
      ok: false,
      message: "Please choose at least one valid subservice.",
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
      subject: `New ${service.title} request from ${name}`,
      text: [
        "New Service Request",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Boat Location: ${boatLocation}`,
        `Requested Service: ${service.title}`,
        `Requested Subservices: ${requestedSubserviceTitles.join(", ")}`,
        "Message:",
        message || "No additional message provided.",
      ].join("\n"),
      html: buildEmailHtml({
        name,
        email,
        phone,
        boatLocation,
        requestedServiceTitle: service.title,
        requestedSubserviceTitles,
        message,
      }),
    });
  } catch (error) {
    console.error("Failed to send service request email", error);

    const response: FormSubmissionResponse = {
      ok: false,
      message:
        "We could not send your request right now. Please try again in a moment or call directly.",
    };

    return NextResponse.json(response, { status: 500 });
  }

  const response: FormSubmissionResponse = {
    ok: true,
    message:
      "Your service request was sent successfully. We will review it and follow up shortly.",
  };

  return NextResponse.json(response);
}
