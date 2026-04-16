"use client";

import Link from "next/link";
import type { FormEvent, ReactNode } from "react";
import { useState } from "react";
import { phoneNumber } from "@/components/site-data";
import type {
  FormSubmissionResponse,
  GeneralInquiryPayload,
  ServiceRequestPayload,
} from "@/lib/service-request";
import {
  getServiceBySlug,
  getServiceRequestHref,
  services,
} from "@/lib/services";

type InquiryFormProps = {
  title: string;
  description: string;
  submitLabel: string;
  aside?: ReactNode;
  selectedServiceSlug?: string;
  mode?: "service-request" | "contact";
};

const fieldClassName =
  "mt-2 w-full rounded-xl border border-mist-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition-colors duration-300 placeholder:text-slate-400 focus:border-sand-400";

const phoneLink = `tel:${phoneNumber.replace(/\D/g, "")}`;

export default function InquiryForm({
  title,
  description,
  submitLabel,
  aside,
  selectedServiceSlug,
  mode = "service-request",
}: InquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusTone, setStatusTone] = useState<"success" | "error">("success");
  const isContactMode = mode === "contact";
  const selectedService = selectedServiceSlug
    ? getServiceBySlug(selectedServiceSlug)
    : undefined;
  const hasSelectedService =
    selectedService !== undefined && selectedService.subservices.length > 0;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const boatLocation = formData.get("boatLocation")?.toString().trim();
    const message = formData.get("message")?.toString().trim() ?? "";
    const selectedSubservices = formData
      .getAll("requestedSubservices")
      .map((value) => value.toString())
      .filter(Boolean);

    if (isContactMode) {
      if (!name || !email || !phone || !message) {
        setStatusTone("error");
        setStatusMessage(
          "Please fill in your name, email, phone, and message before sending your inquiry.",
        );
        return;
      }
    } else {
      if (!selectedService) {
        setStatusTone("error");
        setStatusMessage(
          "Choose a service first so we can show the right subservices for your request.",
        );
        return;
      }

      if (selectedService.subservices.length === 0) {
        setStatusTone("error");
        setStatusMessage(
          "This service does not have any subservices yet. Add them in the JSON data before using this request flow.",
        );
        return;
      }

      if (selectedSubservices.length === 0) {
        setStatusTone("error");
        setStatusMessage(
          `Select at least one ${selectedService.title} subservice before sending your request.`,
        );
        return;
      }

      if (!name || !email || !phone || !boatLocation) {
        setStatusTone("error");
        setStatusMessage(
          "Please fill in your name, email, phone, and boat location before sending your request.",
        );
        return;
      }
    }

    const endpoint = isContactMode ? "/api/contact" : "/api/service-request";
    const payload: GeneralInquiryPayload | ServiceRequestPayload = isContactMode
      ? {
          name: name ?? "",
          email: email ?? "",
          phone: phone ?? "",
          boatLocation: boatLocation ?? "",
          message,
        }
      : {
          name: name ?? "",
          email: email ?? "",
          phone: phone ?? "",
          boatLocation: boatLocation ?? "",
          requestedService: selectedService!.slug,
          requestedSubservices: selectedSubservices,
          message,
        };

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result =
        ((await response.json().catch(() => null)) as FormSubmissionResponse | null) ??
        {
          ok: false,
          message: isContactMode
            ? "We could not send your inquiry right now. Please try again."
            : "We could not send your request right now. Please try again.",
        };

      setStatusTone(result.ok ? "success" : "error");
      setStatusMessage(result.message);

      if (response.ok && result.ok) {
        form.reset();
      }
    } catch {
      setStatusTone("error");
      setStatusMessage(
        isContactMode
          ? "We could not send your inquiry right now. Please try again in a moment or call directly."
          : "We could not send your request right now. Please try again in a moment or call directly.",
      );
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

          {statusMessage ? (
            <div
              aria-live="polite"
              className={`mt-8 rounded-[1.15rem] border px-5 py-4 text-sm leading-7 ${
                statusTone === "success"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                  : "border-rose-200 bg-rose-50 text-rose-900"
              }`}
            >
              {statusMessage}
            </div>
          ) : null}

          <form className="mt-8" onSubmit={handleSubmit}>
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
                  autoComplete="name"
                  required
                  className={fieldClassName}
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
                  autoComplete="email"
                  required
                  className={fieldClassName}
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
                  placeholder="(555) 555-5555"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  className={fieldClassName}
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
                  autoComplete="street-address"
                  required={!isContactMode}
                  className={fieldClassName}
                />
              </div>

              {!isContactMode ? (
                <>
                  <div className="md:col-span-2">
                    <p className="text-sm font-semibold text-ocean-950">
                      Requested Service
                    </p>
                    {selectedService ? (
                      <>
                        <input
                          type="hidden"
                          name="requestedService"
                          value={selectedService.slug}
                        />
                        <div className="mt-2 rounded-[1.15rem] border border-mist-300 bg-white px-4 py-4">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-800">
                            {selectedService.label}
                          </p>
                          <p className="mt-2 text-xl font-semibold text-ocean-950">
                            {selectedService.title}
                          </p>
                          <p className="mt-2 text-sm leading-7 text-slate-600">
                            {selectedService.summary}
                          </p>
                        </div>
                      </>
                    ) : (
                      <div className="mt-2 rounded-[1.15rem] border border-mist-300 bg-white p-4">
                        <p className="text-sm leading-7 text-slate-600">
                          Choose a service first to unlock the related
                          subservices.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {services.map((service) => (
                            <Link
                              key={service.slug}
                              href={getServiceRequestHref(service.slug)}
                              className="inline-flex items-center justify-center rounded-full border border-mist-300 bg-mist-100 px-4 py-2 text-sm font-semibold text-ocean-950 transition-colors duration-300 hover:border-sand-400/60 hover:bg-white"
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {hasSelectedService ? (
                    <fieldset className="md:col-span-2">
                      <legend className="text-sm font-semibold text-ocean-950">
                        Requested Subservices
                      </legend>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2">
                        {selectedService.subservices.map((subservice) => (
                          <label
                            key={subservice.slug}
                            className="flex gap-3 rounded-[1.15rem] border border-mist-300 bg-white p-4 transition-colors duration-300 hover:border-sand-400/60"
                          >
                            <input
                              type="checkbox"
                              name="requestedSubservices"
                              value={subservice.slug}
                              className="mt-1 h-4 w-4 rounded border-mist-300 text-ocean-950 accent-ocean-950"
                            />
                            <span className="block">
                              <span className="block text-base font-semibold text-ocean-950">
                                {subservice.title}
                              </span>
                              <span className="mt-1 block text-sm leading-7 text-slate-600">
                                {subservice.description}
                              </span>
                            </span>
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  ) : null}

                  {!hasSelectedService && selectedService ? (
                    <div className="md:col-span-2 rounded-[1.15rem] border border-mist-300 bg-white px-4 py-4 text-sm leading-7 text-slate-600">
                      This service does not have any subservices yet. Add them
                      in the JSON data before using this request flow.
                    </div>
                  ) : null}
                </>
              ) : null}

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
                  autoComplete="off"
                  required={isContactMode}
                  className={fieldClassName}
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-7 text-slate-500">
                Requests are reviewed manually. For urgent help, call us
                directly at{" "}
                <a
                  href={phoneLink}
                  className="font-semibold text-ocean-950 transition-colors duration-300 hover:text-ocean-800"
                >
                  {phoneNumber}
                </a>
                .
              </p>
              <button
                type="submit"
                disabled={(!isContactMode && !hasSelectedService) || isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-sand-400 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-ocean-950 disabled:cursor-not-allowed disabled:bg-mist-300 disabled:text-slate-500"
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
