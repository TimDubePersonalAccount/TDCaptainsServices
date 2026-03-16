import Hero from "@/components/Hero";
import HowItWorksStrip from "@/components/HowItWorksStrip";
import ServicesGrid from "@/components/ServicesGrid";
import TrustSection from "@/components/TrustSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <HowItWorksStrip />
      <ServicesGrid />
      <TrustSection />

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-ocean-950 px-8 py-10 text-white shadow-[0_30px_80px_-40px_rgba(8,20,35,0.95)] sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
                Ready To Launch
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                Build the next phase around real service requests and scheduling.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
                This foundation is ready for future booking flows, customer
                accounts, marina integrations, and dispatch tools.
              </p>
            </div>

            <div className="mt-8 lg:mt-0">
              <a
                href="/request-service"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ocean-950 transition-transform duration-300 hover:-translate-y-0.5"
              >
                Request Service
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
