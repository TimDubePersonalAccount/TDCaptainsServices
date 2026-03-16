import Link from "next/link";
import { trustHighlights } from "@/components/site-data";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ocean-950 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/marine-hero-placeholder.svg')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,20,35,0.92),rgba(13,34,56,0.82),rgba(21,54,85,0.72))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-36 sm:px-6 md:pt-44 lg:px-8 lg:pb-32">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-200">
            Hudson River Marine Services
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-none sm:text-6xl lg:text-7xl">
            Premium marine support with a calm, modern coastal feel.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            TD Captains Services is positioned as a polished Hudson River
            service brand for captain coverage, dockside help, vessel care, and
            mobile marine support.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/request-service"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ocean-950 transition-transform duration-300 hover:-translate-y-0.5"
            >
              Request Service
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {trustHighlights.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/10 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 h-11 w-11 rounded-2xl border border-white/15 bg-white/10" />
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
