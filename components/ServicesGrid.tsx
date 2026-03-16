import Link from "next/link";
import { serviceItems } from "@/components/site-data";
import SectionHeading from "@/components/SectionHeading";

type ServicesGridProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export default function ServicesGrid({
  eyebrow = "Services",
  title = "A clean service grid ready for future detail pages and booking flows.",
  description = "Use these cards as starting points for individual services, pricing content, or richer conversion-focused landing pages.",
}: ServicesGridProps) {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceItems.map((service) => (
            <article
              key={service.title}
              className="group flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-mist-100 p-6 shadow-[0_24px_60px_-45px_rgba(15,23,42,0.55)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="h-12 w-12 rounded-2xl border border-ocean-700/20 bg-white shadow-sm" />
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-ocean-700">
                  {service.label}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-ocean-950">
                {service.title}
              </h3>
              <p className="mt-4 flex-1 text-base leading-8 text-slate-600">
                {service.description}
              </p>

              <Link
                href="/request-service"
                className="mt-6 inline-flex items-center text-sm font-semibold text-ocean-800 transition-colors duration-300 group-hover:text-ocean-950"
              >
                Request This Service
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
