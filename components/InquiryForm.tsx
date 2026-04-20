"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";

type InquiryFormProps = {
  title: string;
  description: string;
  submitLabel: string;
  aside?: ReactNode;
  initialRequestedService?: string;
  mode?: "service-request" | "contact";
};

const fieldClassName =
  "mt-2 w-full rounded-xl border border-mist-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition-colors duration-300 placeholder:text-slate-400 focus:border-sand-400";

export default function InquiryForm({
  title,
  description,
  submitLabel,
  aside,
  initialRequestedService,
  mode = "service-request",
}: InquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "error" | null>(
    null,
  );
  const isContactMode = mode === "contact";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);
    setStatusType(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        isContactMode ? "/api/contact" : "/api/service-request",
        {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          boatLocation: formData.get("boatLocation"),
          requestedService: isContactMode
            ? null
            : formData.get("requestedService"),
          message: formData.get("message"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
        },
      );

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Unable to send your request.");
      }

      form.reset();
      setStatusType("success");
      setStatusMessage(
        isContactMode
          ? "Your inquiry was sent successfully. We will follow up shortly."
          : "Your request was sent successfully. We will follow up shortly.",
      );
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to send your request right now.";

      setStatusType("error");
      setStatusMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="rounded-[1.6rem] border border-mist-300 bg-mist-100 p-8 shadow-[0_16px_42px_-32px_rgba(15,42,68,0.14)] sm:p-10">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-800">
              Inquiry Form
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ocean-950 sm:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              {description}
            </p>
          </div>

          <form className="mt-8" method="post" onSubmit={handleSubmit}>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-ocean-950"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className={fieldClassName}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-ocean-950"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className={fieldClassName}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-semibold text-ocean-950"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(845) 535-4288"
                  className={fieldClassName}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="boat-location"
                  className="text-sm font-semibold text-ocean-950"
                >
                  {isContactMode ? "Boat Location or Marina" : "Boat Location"}
                </label>
                <input
                  id="boat-location"
                  name="boatLocation"
                  type="text"
                  placeholder="Marina, dock, or river mile"
                  className={fieldClassName}
                  required={!isContactMode}
                />
              </div>

              {isContactMode ? null : (
                <div className="md:col-span-2">
                  <label
                    htmlFor="requested-service"
                    className="text-sm font-semibold text-ocean-950"
                  >
                    Requested Service
                  </label>
                  <select
                    id="requested-service"
                    name="requestedService"
                    defaultValue={initialRequestedService ?? ""}
                    className={fieldClassName}
                    required
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="captain-for-hire">Captain for Hire</option>
                    <option value="launch-service">Launch Assistance</option>
                    <option value="maintenance">
                      Boat Cleaning &amp; Maintenance
                    </option>
                    <option value="boat-repair">Boat Repair</option>
                    <option value="marine-electronics">
                      Marine Electronics
                    </option>
                    <option value="drone-photography">
                      Drone Aerial Photography
                    </option>
                    <option value="towing-services">Towing Services</option>
                  </select>
                </div>
              )}

              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-ocean-950"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder={
                    isContactMode
                      ? "Tell us what you would like help with or what question you have."
                      : "Tell us what kind of marine support you need."
                  }
                  className={fieldClassName}
                  required
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p
                className={`text-sm leading-7 ${
                  statusType === "error"
                    ? "text-red-600"
                    : statusType === "success"
                      ? "text-emerald-700"
                      : "text-slate-500"
                }`}
              >
                {statusMessage ??
                  (isContactMode
                    ? "We will email your inquiry to the service team."
                    : "We will email your request to the service team.")}
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-sand-400 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-ocean-950"
              >
                {isSubmitting ? "Sending..." : submitLabel}
              </button>
            </div>
          </form>
        </div>

        <div>{aside}</div>
      </div>
    </section>
  );
}
