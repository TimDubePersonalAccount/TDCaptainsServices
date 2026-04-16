import Link from "next/link";
import SubserviceTile from "@/components/SubserviceTile";
import { getServiceRequestHref, type Service } from "@/lib/services";

type ServiceDetailProps = {
  service: Service;
};

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const { title, description, subservices } = service;
  const hasSubservices = subservices.length > 0;

  return (
    <main>
      <section className="border-b border-sand-400/50 bg-ocean-950">
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

      {hasSubservices ? (
        <section className="bg-mist-100 py-16 sm:py-18">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-start sm:justify-end">
              <Link
                href={getServiceRequestHref(service.slug)}
                className="inline-flex items-center justify-center rounded-full bg-ocean-950 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-sand-400 hover:text-ocean-950 sm:shrink-0"
              >
                Request This Service
              </Link>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
