import Link from "next/link";
import { processSteps, trustHighlights } from "@/components/site-data";

export default function HowItWorksStrip() {
  return (
    <section className="relative z-10 bg-transparent pt-8 pb-14 sm:pt-10 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="rounded-[1.6rem] border border-mist-300 bg-white p-6 shadow-[0_16px_42px_-32px_rgba(15,42,68,0.14)] sm:p-7">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-mist-300/80 pb-5">
              <div className="max-w-2xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-800">
                  How It Works
                </p>
                <h2 className="mt-2 font-serif text-3xl text-ocean-950 sm:text-[2rem]">
                  Fast help without the back-and-forth.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-600 sm:text-base">
                Share the basics, we confirm the plan, and then we show up
                ready to help.
              </p>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-[1.25rem] border border-mist-300 bg-white p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-400/30 bg-white text-sm font-semibold text-ocean-950">
                      0{index + 1}
                    </div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Step {index + 1}
                    </p>
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-ocean-950">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-mist-300 bg-mist-100 p-6 shadow-[0_16px_42px_-32px_rgba(15,42,68,0.14)] sm:p-7">
            <div className="border-b border-mist-300/80 pb-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-800">
                Why TD Captains Services
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-ocean-950">
                Clear updates, quick response, and steady local support.
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Boat owners want quick answers and confidence that the job will
                be handled right.
              </p>
            </div>

            <div className="mt-5 grid gap-3">
              {trustHighlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.2rem] border border-mist-300 bg-white px-4 py-3.5"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-sand-400" />
                    <div>
                      <h3 className="text-base font-semibold text-ocean-950">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-ocean-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-sand-400 hover:text-ocean-950"
            >
              About TD Captains
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
