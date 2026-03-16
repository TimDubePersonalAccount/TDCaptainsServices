import type { ReactNode } from "react";

type InquiryFormProps = {
  title: string;
  description: string;
  submitLabel: string;
  aside?: ReactNode;
};

const fieldClassName =
  "mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none transition-colors duration-300 placeholder:text-slate-400 focus:border-ocean-700";

export default function InquiryForm({
  title,
  description,
  submitLabel,
  aside,
}: InquiryFormProps) {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-mist-100 p-8 shadow-[0_28px_80px_-45px_rgba(15,23,42,0.55)] sm:p-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-ocean-700">
              Inquiry Form
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ocean-950 sm:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              {description}
            </p>
          </div>

          <form className="mt-8" method="post">
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
                  className={fieldClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="boat-location"
                  className="text-sm font-semibold text-ocean-950"
                >
                  Boat Location
                </label>
                <input
                  id="boat-location"
                  name="boatLocation"
                  type="text"
                  placeholder="Marina, dock, or river mile"
                  className={fieldClassName}
                />
              </div>

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
                  defaultValue=""
                  className={fieldClassName}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="captain-for-hire">Captain for Hire</option>
                  <option value="launch-assistance">Launch Assistance</option>
                  <option value="cleaning-maintenance">
                    Boat Cleaning &amp; Maintenance
                  </option>
                  <option value="boat-repair">Boat Repair</option>
                  <option value="marine-electronics">Marine Electronics</option>
                  <option value="drone-photography">
                    Drone Aerial Photography
                  </option>
                  <option value="towing-services">Towing Services</option>
                </select>
              </div>

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
                  placeholder="Tell us what kind of marine support you need."
                  className={fieldClassName}
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-7 text-slate-500">
                Submission handling is intentionally not connected yet.
              </p>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-ocean-950 px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                {submitLabel}
              </button>
            </div>
          </form>
        </div>

        <div>{aside}</div>
      </div>
    </section>
  );
}
