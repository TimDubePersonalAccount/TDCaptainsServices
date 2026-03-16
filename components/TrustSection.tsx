import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { trustHighlights } from "@/components/site-data";

export default function TrustSection() {
  return (
    <section className="bg-mist-200 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Why TD Captains Services"
              title="Trust-building content blocks with room to grow into proof, reviews, and local credibility."
              description="This section is structured for confidence signals, concise positioning, and future integrations like testimonials, certifications, and case studies."
            />

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full bg-ocean-950 px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {trustHighlights.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-[1.75rem] border p-7 shadow-[0_24px_60px_-45px_rgba(15,23,42,0.55)] ${
                  index === 2
                    ? "border-ocean-950 bg-ocean-950 text-white sm:col-span-2"
                    : "border-slate-200 bg-white text-slate-900"
                }`}
              >
                <div
                  className={`h-12 w-12 rounded-2xl border ${
                    index === 2
                      ? "border-white/15 bg-white/10"
                      : "border-ocean-700/20 bg-mist-100"
                  }`}
                />
                <h3
                  className={`mt-5 text-2xl font-semibold ${
                    index === 2 ? "text-white" : "text-ocean-950"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-3 text-base leading-8 ${
                    index === 2 ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
