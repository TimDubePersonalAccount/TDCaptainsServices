import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About",
};

const pillars = [
  {
    title: "Local Hudson River Experts",
    description:
      "Use this section to introduce the company story, service area familiarity, marina knowledge, and local boating experience.",
  },
  {
    title: "Fast Mobile Marine Support",
    description:
      "Position the brand around speed, reliability, and a modern field-service experience for owners who need help where the boat is.",
  },
  {
    title: "Professional Premium Care",
    description:
      "Create space for certifications, captain credentials, and a high-trust brand voice that feels polished but approachable.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="A premium marine services brand rooted in local experience."
        description="This page is a flexible home for your company story, operational philosophy, team credentials, and service-area credibility."
      />

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-ocean-700">
              Company Story
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ocean-950 sm:text-5xl">
              A clean, trustworthy foundation for the TD Captains Services brand.
            </h2>
            <div className="mt-6 space-y-6 text-base leading-8 text-slate-600">
              <p>
                Use this area to describe the company mission, the types of
                boaters you serve, and what makes your approach different on the
                Hudson River.
              </p>
              <p>
                The layout is intentionally simple and spacious so you can later
                expand it with staff bios, certifications, photo galleries, and
                customer testimonials without reworking the structure.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-[1.75rem] border border-slate-200 bg-mist-100 p-8 shadow-[0_24px_60px_-45px_rgba(15,23,42,0.55)]"
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
