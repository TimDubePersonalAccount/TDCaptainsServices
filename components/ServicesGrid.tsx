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
  title = "Service options built around practical on-water needs.",
  description = "From captain support to maintenance coordination, each service area is presented with a clean structure that feels established and easy to trust.",
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
              className="group flex h-full flex-col rounded-[1.35rem] border border-mist-300 bg-white p-6 shadow-[0_14px_30px_-24px_rgba(15,42,68,0.14)] transition-colors duration-300 hover:border-sand-400/70"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="h-12 w-12 rounded-xl border border-sand-400/30 bg-mist-100" />
                <span className="rounded-full bg-mist-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-800">
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
