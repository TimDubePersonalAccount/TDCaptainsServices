import { processSteps } from "@/components/site-data";

export default function HowItWorksStrip() {
  return (
    <section className="relative z-10 bg-transparent pt-8 pb-14 sm:pt-10 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[1.6rem] border border-mist-300 bg-white p-8 shadow-[0_16px_42px_-32px_rgba(15,42,68,0.14)] sm:p-10">
          <div className="grid gap-4 border-b border-mist-300/80 pb-8 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-end">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-800">
                How It Works
              </p>
              <h2 className="mt-3 font-serif text-3xl text-ocean-950 sm:text-4xl">
                Getting help on the river should be simple.
              </h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-slate-600">
              Tell us what you need, confirm the details, and we will take it
              from there.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[1.25rem] border border-mist-300 bg-mist-100 p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-sand-400/30 bg-white text-sm font-semibold text-ocean-950">
                    0{index + 1}
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Step {index + 1}
                  </p>
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
        </div>
      </div>
    </section>
  );
}
