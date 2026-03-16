import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";
import PageHero from "@/components/PageHero";
import { processSteps } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Request Service",
};

export default function RequestServicePage() {
  return (
    <main>
      <PageHero
        eyebrow="Request Service"
        title="Collect service details with a booking-ready request page."
        description="This form skeleton is ready to evolve into a full scheduling and intake workflow with authentication, notifications, and dispatch status tracking."
      />

      <InquiryForm
        title="Service Request Form"
        description="Capture the essential contact and boat details now, then connect this structure to your backend later."
        submitLabel="Request Service"
        aside={
          <div className="rounded-[1.75rem] bg-ocean-950 p-8 text-white shadow-[0_24px_70px_-35px_rgba(8,20,35,0.95)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
              What To Expect
            </p>
            <div className="mt-6 space-y-5">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-semibold">
                    0{index + 1}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">{step.title}</h2>
                    <p className="mt-1 text-sm leading-7 text-slate-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      />
    </main>
  );
}
