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
  title = "Practical marine services, without the runaround.",
  description = "Captain support, launch help, seasonal upkeep, repairs, electronics, towing, and more. Everything is laid out clearly so you can find the right service fast.",
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
          {serviceItems.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex h-full flex-col rounded-[1.35rem] border border-mist-300 bg-white p-6 shadow-[0_14px_30px_-24px_rgba(15,42,68,0.14)] transition-colors duration-300 hover:border-sand-400/70"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-mist-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-800">
                  {service.label}
                </span>
                <span className="text-sm font-semibold text-ocean-950/35">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-ocean-950">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-base leading-7 text-slate-600">
                {service.description}
              </p>

              <span
                className="mt-6 inline-flex items-center text-sm font-semibold text-ocean-800 transition-colors duration-300 group-hover:text-ocean-950"
              >
                {service.href.startsWith("/services/")
                  ? "View Service"
                  : "Request Service"}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
