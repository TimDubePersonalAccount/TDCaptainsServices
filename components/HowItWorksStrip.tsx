import { processSteps } from "@/components/site-data";

export default function HowItWorksStrip() {
  return (
    <section className="relative z-10 -mt-14 bg-transparent pb-14 sm:-mt-16 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[1.6rem] border border-mist-300 bg-white p-8 shadow-[0_16px_42px_-32px_rgba(15,42,68,0.14)] sm:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-800">
                How It Works
              </p>
              <h2 className="mt-3 font-serif text-3xl text-ocean-950 sm:text-4xl">
                A straightforward service process from first call to finished work.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-slate-600">
              Clear communication and dependable follow-through should feel
              obvious from the first interaction.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[1.25rem] border border-mist-300 bg-mist-100 p-6 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-sand-400/30 bg-white text-sm font-semibold text-ocean-950">
                  0{index + 1}
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
