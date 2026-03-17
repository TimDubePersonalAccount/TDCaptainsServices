import Hero from "@/components/Hero";
import HowItWorksStrip from "@/components/HowItWorksStrip";
import ServicesGrid from "@/components/ServicesGrid";
import TrustSection from "@/components/TrustSection";

export default function Home() {
  return (
    <main className="overflow-hidden bg-mist-200">
      <Hero />
      <HowItWorksStrip />
      <ServicesGrid />
      <TrustSection />

      <section className="bg-mist-100 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[1.6rem] border border-mist-300 bg-white px-8 py-10 shadow-[0_18px_40px_-30px_rgba(15,42,68,0.12)] sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-950">
                Need Service
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-ocean-950 sm:text-5xl">
                Tell us where the boat is and what kind of support you need.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                Use this call-to-action area for maintenance requests, dockside
                assistance, captain coverage, and urgent marine support along
                the Hudson River.
              </p>
            </div>

            <div className="mt-8 lg:mt-0">
              <a
                href="/request-service"
                className="inline-flex items-center justify-center rounded-full bg-ocean-950 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-ocean-900"
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
