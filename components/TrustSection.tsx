import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { trustHighlights } from "@/components/site-data";

export default function TrustSection() {
  return (
    <section className="bg-ocean-950 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Why TD Captains Services"
              title="Local service that feels steady from the first call."
              description="Boat owners usually want the same three things: a quick response, clear communication, and confidence that the job will be handled right."
              invert
            />

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full bg-sand-400 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-ocean-950"
              >
                About TD Captains
              </Link>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {trustHighlights.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-[1.35rem] border p-7 shadow-[0_14px_30px_-24px_rgba(15,42,68,0.14)] ${
                  index === 2
                    ? "border-ocean-900 bg-ocean-900 text-white sm:col-span-2"
                    : "border-mist-300 bg-white text-slate-900"
                }`}
              >
                <div
                  className={`h-1.5 w-12 rounded-full ${
                    index === 2 ? "bg-sand-400" : "bg-sand-400/80"
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
                    index === 2 ? "text-[#f3efe7]" : "text-slate-600"
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
