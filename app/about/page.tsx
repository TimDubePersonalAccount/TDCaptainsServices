import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About",
};

const pillars = [
  {
    title: "Local Hudson River Experts",
    description:
      "Use this section to show service-area familiarity, marina knowledge, and day-to-day boating experience on the river.",
  },
  {
    title: "Fast Mobile Marine Support",
    description:
      "Position the company around responsive communication, practical dockside help, and dependable follow-through.",
  },
  {
    title: "Professional, Reliable Service",
    description:
      "Create space for certifications, captain credentials, and the kind of steady client care that earns repeat business.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="A marine services company built around dependable work and clear communication."
        description="This page is designed to tell the company story, highlight local experience, and reinforce the kind of steady professionalism boat owners want to hire."
      />

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-800">
              Company Story
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ocean-950 sm:text-5xl">
              A straightforward, trustworthy foundation for TD Captains Services.
            </h2>
            <div className="mt-6 space-y-6 text-base leading-8 text-slate-600">
              <p>
                Use this area to describe the company mission, who you serve,
                and the standards you bring to captain services, maintenance
                support, and dockside assistance.
              </p>
              <p>
                The layout gives you room to add certifications, staff bios,
                testimonials, and operating history while keeping the tone clean
                and grounded.
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
