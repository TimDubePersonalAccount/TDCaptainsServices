import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServicesGrid from "@/components/ServicesGrid";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Marine support designed for Hudson River boat owners."
        description="Use this page as the services overview for charter support, captain coverage, maintenance coordination, and premium mobile marine care."
      />

      <ServicesGrid
        eyebrow="What We Offer"
        title="A flexible service menu for both urgent and scheduled support."
        description="Each card is a placeholder for a future detailed service page, pricing flow, or booking experience."
      />

      <section className="bg-mist-100 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Mobile Dispatch",
                description:
                  "Ideal for service calls, dockside troubleshooting, and launch-day support along the Hudson corridor.",
              },
              {
                title: "Planned Service Visits",
                description:
                  "Use for recurring cleaning, scheduled repairs, electronics upgrades, and seasonal prep work.",
              },
              {
                title: "White-Glove Client Experience",
                description:
                  "A clean premium presentation built to support trust, referrals, and future online request workflows.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.55)]"
              >
                <h2 className="text-2xl font-semibold text-ocean-950">
                  {item.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/request-service"
              className="inline-flex items-center justify-center rounded-full bg-ocean-950 px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Start A Request
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
