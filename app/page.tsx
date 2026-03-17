import Hero from "@/components/Hero";
import HowItWorksStrip from "@/components/HowItWorksStrip";
import ServicesGrid from "@/components/ServicesGrid";
import TrustSection from "@/components/TrustSection";

export default function Home() {
  const requestDetails = [
    "Boat location",
    "Type of service",
    "Best way to reach you",
  ];

  return (
    <main className="overflow-hidden bg-ocean-950">
      <Hero />
      <HowItWorksStrip />
      <ServicesGrid />
      <TrustSection />

      <section className="bg-mist-100 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[1.6rem] border border-mist-300 bg-white px-8 py-10 shadow-[0_18px_40px_-30px_rgba(15,42,68,0.12)] sm:px-10 lg:grid lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-12 lg:px-14">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-950">
                Request Service
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-ocean-950 sm:text-5xl">
                Tell us what your boat needs.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Share your location, a few details, and the kind of help you
                are looking for. We will follow up with availability and next
                steps.
              </p>
            </div>

            <div className="mt-8 space-y-4 lg:mt-0">
              <div className="grid gap-3">
                {requestDetails.map((detail) => (
                  <div
                    key={detail}
                    className="rounded-2xl border border-mist-300 bg-mist-100 px-4 py-3"
                  >
                    <p className="text-sm font-semibold text-ocean-950">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
              <a
                href="/request-service"
                className="inline-flex w-full items-center justify-center rounded-full bg-ocean-950 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-ocean-900"
              >
                Start a Service Request
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
