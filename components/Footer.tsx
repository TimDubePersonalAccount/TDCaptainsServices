import Link from "next/link";
import {
  navigationItems,
  phoneNumber,
  serviceItems,
} from "@/components/site-data";

const phoneLink = `tel:${phoneNumber.replace(/\D/g, "")}`;

export default function Footer() {
  return (
    <footer className="bg-ocean-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-sm font-semibold tracking-[0.25em]">
                TD
              </div>
              <div>
                <p className="text-sm font-semibold">TD Captains Services</p>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-300">
                  Hudson River Marine Support
                </p>
              </div>
            </div>

            <p className="mt-6 text-base leading-8 text-slate-300">
              A modern marine services website skeleton built to support future
              service requests, scheduling, and premium customer experiences on
              the Hudson River.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/request-service"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-ocean-950 transition-transform duration-300 hover:-translate-y-0.5"
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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
              Navigation
            </p>
            <div className="mt-5 space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-base text-slate-200 transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
              Featured Services
            </p>
            <div className="mt-5 space-y-3">
              {serviceItems.slice(0, 4).map((item) => (
                <p key={item.title} className="text-base text-slate-200">
                  {item.title}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} TD Captains Services. Website skeleton ready for future integrations.</p>
        </div>
      </div>
    </footer>
  );
}
