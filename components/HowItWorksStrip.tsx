import Link from "next/link";
import { processSteps, trustHighlights } from "@/components/site-data";

export default function HowItWorksStrip() {
  return (
    <section className="relative z-10 bg-transparent pt-8 pb-14 sm:pt-10 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <article className="relative overflow-hidden rounded-[1.8rem] bg-ocean-950 p-7 text-white shadow-[0_22px_48px_-32px_rgba(15,42,68,0.42)] sm:p-8">
            <div className="relative">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sand-400">
                Why TD Captains Services
              </p>
              <h2 className="mt-3 max-w-md font-serif text-3xl leading-tight sm:text-4xl">
                Local marine support that feels clear from the first call.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-mist-200">
                We keep the process straightforward, stay in touch, and show up
                ready to help on the dock or on the water.
              </p>

              <div className="mt-7 grid gap-3">
                {trustHighlights.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[1.3rem] border border-white/10 bg-white/8 px-4 py-3.5 backdrop-blur-[2px]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-sand-400" />
                      <div>
                        <h3 className="text-base font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-mist-200">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full bg-sand-400 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-ocean-950"
                >
                  About TD Captains
                </Link>
                <span className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-mist-100">
                  Hudson River marine services
                </span>
              </div>
            </div>
          </article>

          <article className="rounded-[1.8rem] border border-mist-300 bg-white p-7 shadow-[0_18px_40px_-30px_rgba(15,42,68,0.16)] sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-mist-300/80 pb-5">
              <div className="max-w-2xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-800">
                  How It Works
                </p>
                <h2 className="mt-3 font-serif text-3xl text-ocean-950 sm:text-4xl">
                  Three simple steps from first call to dockside help.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-600 sm:text-base">
                Share the basics, get confirmation, and expect practical
                support without the runaround.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="group relative overflow-hidden rounded-[1.35rem] border border-mist-300 bg-mist-100 p-5"
                >
                  <div className="absolute inset-x-5 top-0 h-px bg-[linear-gradient(90deg,rgba(212,175,55,0.58),rgba(212,175,55,0))]" />
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-800">
                      Step {index + 1}
                    </span>
                    <span className="text-2xl font-semibold text-ocean-950/20">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-ocean-950">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-5 rounded-[1.45rem] border border-mist-300 bg-[linear-gradient(135deg,#f6f8fa_0%,#eef2f5_100%)] px-5 py-4 sm:flex sm:items-center sm:justify-between sm:gap-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-800">
                  What To Send
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                  Boat location, service type, and the best way to reach you.
                </p>
              </div>
              <Link
                href="/request-service"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-ocean-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-ocean-900 sm:mt-0"
              >
                Start a Service Request
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
