import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about TD Captains Services and the dependable Hudson River captain support, launch help, maintenance coordination, and marine service approach behind the company.",
};

const pillars = [
  {
    title: "Local Hudson River Familiarity",
    description:
      "Practical knowledge of marinas, launch points, river conditions, and day-to-day boating logistics helps jobs move faster and more smoothly.",
  },
  {
    title: "Responsive Mobile Support",
    description:
      "The focus is on showing up prepared, communicating clearly, and adapting to the real condition of the boat and the day.",
  },
  {
    title: "Professional Follow-Through",
    description:
      "Boat owners get straightforward updates, realistic next steps, and respectful service around the dock, marina, and onboard systems.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="A marine services company built around dependable work and clear communication."
        description="TD Captains Services is built to give boat owners steady support, clear updates, and practical help on the Hudson River."
      />

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-800">
              Company Story
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ocean-950 sm:text-5xl">
              Dependable support for the jobs that keep boat ownership moving.
            </h2>
            <div className="mt-6 space-y-6 text-base leading-8 text-slate-600">
              <p>
                TD Captains Services is built around reliable marine support for
                owners who want clear communication and steady follow-through.
                From captain services and launch-day help to maintenance
                coordination and troubleshooting, the goal is to make every job
                feel more manageable from the start.
              </p>
              <p>
                Some requests are planned well in advance and others come up
                fast. Either way, the approach stays the same: show up
                prepared, explain the next step clearly, and treat the boat,
                crew, and marina with care.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-[1.35rem] border border-mist-300 bg-mist-100 p-8 shadow-[0_14px_30px_-24px_rgba(15,42,68,0.14)]"
              >
                <h3 className="text-2xl font-semibold text-ocean-950">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
