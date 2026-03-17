import Link from "next/link";
import SubserviceTile from "@/components/SubserviceTile";

type Subservice = {
  title: string;
  description: string;
};

type ServiceDetailProps = {
  title: string;
  description: string;
  highlights?: string[];
  subservices?: Subservice[];
  subservicesTitle?: string;
  subservicesEyebrow?: string;
  showOverviewSection?: boolean;
};

export default function ServiceDetail({
  title,
  description,
  highlights,
  subservices,
  subservicesTitle = "Subservices",
  subservicesEyebrow = "Service Details",
  showOverviewSection = true,
}: ServiceDetailProps) {
  return (
    <main>
      <section className="border-b border-ocean-900 bg-ocean-950">
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-34 sm:px-6 md:pt-38 lg:px-8 lg:pb-16">
          <div className="max-w-4xl">
            <h1 className="font-serif text-3xl leading-tight text-white sm:text-4xl">
              {title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-mist-200">
              {description}
            </p>
          </div>
        </div>
      </section>

      {showOverviewSection ? (
        <section className="bg-mist-100 py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div className="rounded-[1.25rem] border border-mist-300 bg-white p-8 shadow-[0_14px_30px_-24px_rgba(15,42,68,0.12)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-800">
                Overview
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-ocean-950">
                Practical, dependable support.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {description}
              </p>
              <div className="mt-8">
                <Link
                  href="/request-service"
                  className="inline-flex items-center justify-center rounded-full bg-ocean-950 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-ocean-900"
                >
                  Request This Service
                </Link>
              </div>
            </div>

            <div className="rounded-[1.25rem] border border-mist-300 bg-mist-200 p-8 shadow-[0_14px_30px_-24px_rgba(15,42,68,0.12)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-800">
                Typical Support
              </p>
              <div className="mt-5 space-y-3">
                {(highlights ?? []).map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-xl border border-mist-300 bg-white px-4 py-3 text-sm font-medium text-ocean-950"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {subservices && subservices.length > 0 ? (
        <section className="bg-mist-100 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-800">
                {subservicesEyebrow}
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-ocean-950 sm:text-4xl">
                {subservicesTitle}
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {subservices.map((subservice) => (
                <SubserviceTile
                  key={subservice.title}
                  title={subservice.title}
                  description={subservice.description}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
