import nodemailer from "nodemailer";

function readRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function getMailTransporter() {
  const port = Number(readRequiredEnv("SMTP_PORT"));

  if (Number.isNaN(port)) {
    throw new Error("SMTP_PORT must be a number");
  }

  const secure =
    process.env.SMTP_SECURE === undefined
      ? port === 465
      : process.env.SMTP_SECURE === "true";

  return nodemailer.createTransport({
    host: readRequiredEnv("SMTP_HOST"),
    port,
    secure,
    auth: {
      user: readRequiredEnv("SMTP_USER"),
      pass: readRequiredEnv("SMTP_PASS"),
    },
  });
}

export function getMailSender() {
  return readRequiredEnv("SERVICE_REQUEST_FROM_EMAIL");
}

export function getMailRecipient() {
  return readRequiredEnv("SERVICE_REQUEST_TO_EMAIL");
}
