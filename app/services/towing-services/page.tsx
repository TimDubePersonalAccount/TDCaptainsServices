import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Towing Services",
  description:
    "24/7 TowBoatUS towing support for NYC, North Jersey, and the Lower Hudson Valley.",
};

const captainOnCall = "(845) 535-5100";
const towBoatDispatch = "(800) 391-4869";

const onWaterServices = [
  "On-the-water towing",
  "Fuel delivery",
  "Battery jump starts",
  "Soft ungroundings",
  "Dock-to-dock towing",
  "Salvage support",
  "24-hour dispatch",
];

const serviceRegions = [
  {
    title: "New Jersey",
    waterways: ["Hudson River", "Hackensack River", "Passaic River"],
  },
  {
    title: "New York",
    waterways: [
      "Hudson River up to Newburgh",
      "Harlem River",
      "East River",
      "Gowanus Bay",
      "Spuyten Duyvil Creek",
    ],
  },
];

function phoneHref(phoneNumber: string) {
  return `tel:${phoneNumber.replace(/\D/g, "")}`;
}

export default function TowingServicesPage() {
  return (
    <main>
      <section className="border-b border-ocean-900 bg-ocean-950">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-12 pt-28 sm:px-6 md:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="max-w-4xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sand-400">
              BoatUS Towing Services
            </p>
            <h1 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-4xl">
              24/7 towboat support for NYC, North Jersey, and the Lower Hudson
              Valley.
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-mist-200">
              Hudson TowBoat is the authorized TowBoatUS operator serving local
              boaters across the Hudson River area with towing, fuel delivery,
              jump starts, soft ungroundings, and related on-water support.
            </p>
          </div>

          <aside className="rounded-[1.1rem] border border-white/10 bg-white p-5 text-ocean-950 shadow-[0_18px_44px_-28px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-800">
                  Need Tow Help?
                </p>
                <h2 className="mt-2 text-2xl font-semibold leading-tight text-ocean-950">
                  Call or text the towing team.
                </h2>
              </div>
              <Image
                src="/Images/Boat_US_Logo_transparent.png"
                alt="BoatUS logo"
                width={300}
                height={229}
                className="h-auto w-24 shrink-0"
                priority
              />
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {[
                ["Captain On Call", captainOnCall],
                ["TowBoatUS Dispatch", towBoatDispatch],
              ].map(([label, phone]) => (
                <a
                  key={label}
                  href={phoneHref(phone)}
                  className="block border-t border-mist-300 pt-3 transition-colors duration-300 hover:text-ocean-900"
                >
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {label}
                  </span>
                  <span className="mt-1 block text-xl font-semibold text-ocean-950">
                    {phone}
                  </span>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white pb-8 pt-14 sm:pb-10 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-800">
                Available Services
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-ocean-950 sm:text-4xl">
                On-water towing support without the clutter.
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600">
                The core services from the old site are grouped here so boaters
                can quickly understand what help is available.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/request-service?service=towing-services"
                  className="inline-flex items-center justify-center rounded-full bg-ocean-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-ocean-900"
                >
                  Request Towing Service
                </Link>
                <a
                  href={phoneHref(captainOnCall)}
                  className="inline-flex items-center justify-center rounded-full border border-mist-300 px-5 py-2.5 text-sm font-semibold text-ocean-950 transition-colors duration-300 hover:bg-mist-100"
                >
                  Call {captainOnCall}
                </a>
              </div>
            </div>

            <div className="grid gap-5 rounded-[1.1rem] border border-mist-300 bg-mist-100 p-5 sm:p-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <ul className="grid gap-y-0">
                {onWaterServices.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-3 border-b border-mist-300 py-2.5 text-base font-semibold text-ocean-950 last:border-b-0"
                  >
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sand-400"
                      aria-hidden="true"
                    />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              <div className="rounded-[0.9rem] border border-mist-300 bg-white p-3 shadow-[0_14px_30px_-24px_rgba(15,42,68,0.16)]">
                <Image
                  src="/Website_Images/Reasons_To_Buy_Poster.avif"
                  alt="Top 5 reasons for a tow poster"
                  width={600}
                  height={533}
                  className="h-auto w-full rounded-[0.65rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist-100 pb-14 pt-8 sm:pb-16 sm:pt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-800">
                Locations We Cover
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-ocean-950 sm:text-4xl">
                NYC, North Jersey, and the Lower Hudson Valley.
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Hudson TowBoat covers the local operating region below. Neighbor
                regions may be handled by other TowBoatUS operators under the
                same covered network.
              </p>
            </div>

            <div className="rounded-[1.1rem] border border-mist-300 bg-white p-5 sm:p-6">
              <div className="grid gap-6 md:grid-cols-2">
                {serviceRegions.map((region) => (
                  <section key={region.title}>
                    <h3 className="text-xl font-semibold text-ocean-950">
                      {region.title}
                    </h3>
                    <ul className="mt-3 space-y-2 text-base leading-7 text-slate-600">
                      {region.waterways.map((waterway) => (
                        <li key={waterway}>{waterway}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
