import nodemailer from "nodemailer";

const fallbackRecipient = "TimmyDube0@gmail.com";

export function getMissingMailConfig() {
  const required = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"];

  return required.filter((key) => !process.env[key]);
}

export function hasValidMailPort() {
  return !Number.isNaN(Number(process.env.SMTP_PORT));
}

export function getMailTransporter() {
  const port = Number(process.env.SMTP_PORT);

  if (Number.isNaN(port)) {
    throw new Error("SMTP_PORT must be a number");
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export function getMailRecipient() {
  return process.env.SERVICE_REQUEST_TO_EMAIL ?? fallbackRecipient;
}

export function getMailSender() {
  return process.env.SERVICE_REQUEST_FROM_EMAIL ?? process.env.SMTP_USER;
}
