import Link from "next/link";
import { navigationItems, phoneNumber } from "@/components/site-data";
import { getServiceHref, services } from "@/lib/services";

const phoneLink = `tel:${phoneNumber.replace(/\D/g, "")}`;

export default function Footer() {
  return (
    <footer className="border-t border-sand-400/30 bg-ocean-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white text-sm font-semibold tracking-[0.18em] text-sand-400">
                TD
              </div>
              <div>
                <p className="text-base font-semibold">TD Captains Services</p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#f3efe7]">
                  Hudson River Marine Services
                </p>
              </div>
            </div>

            <p className="mt-6 text-base leading-8 text-[#f3efe7]">
              Dependable marine support for captain services, dockside help,
              maintenance coordination, and responsive Hudson River service.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/request-service"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-ocean-950 transition-colors duration-300 hover:bg-mist-100"
              >
                Request Service
              </Link>
              <a
                href={phoneLink}
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"
              >
                {phoneNumber}
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f3efe7]">
              Navigation
            </p>
            <div className="mt-5 space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-base text-[#f3efe7] transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f3efe7]">
              Featured Services
            </p>
            <div className="mt-5 space-y-3">
              {services.slice(0, 4).map((service) => (
                <Link
                  key={service.slug}
                  href={getServiceHref(service.slug)}
                  className="block text-base text-[#f3efe7] transition-colors duration-300 hover:text-white"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-[#d9d2c6]">
          <p>
            Copyright {new Date().getFullYear()} TD Captains Services. Hudson
            River marine service built on dependable support.
          </p>
        </div>
      </div>
    </footer>
  );
}
