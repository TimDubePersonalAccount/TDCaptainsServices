import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";
import PageHero from "@/components/PageHero";
import { processSteps } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Request Service",
};

type RequestServicePageProps = {
  searchParams: Promise<{
    service?: string | string[];
  }>;
};

export default async function RequestServicePage({
  searchParams,
}: RequestServicePageProps) {
  const params = await searchParams;
  const initialRequestedService = Array.isArray(params.service)
    ? params.service[0]
    : params.service;

  return (
    <main>
      <PageHero
        eyebrow="Request Service"
        title="Share your service needs and boat location in one clear request."
        description="This page is structured to collect the key details needed for captain support, dockside help, maintenance work, and responsive marine service."
      />

      <InquiryForm
        title="Service Request Form"
        description="Capture the essential contact details and service needs so the team can review the job and follow up clearly."
        submitLabel="Request Service"
        initialRequestedService={initialRequestedService}
        aside={
          <div className="rounded-[1.35rem] bg-ocean-950 p-8 text-white shadow-[0_18px_40px_-30px_rgba(15,42,68,0.18)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f3efe7]">
              What To Expect
            </p>
            <div className="mt-6 space-y-5">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-sand-400 text-sm font-semibold text-white">
                    0{index + 1}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">{step.title}</h2>
                    <p className="mt-1 text-sm leading-7 text-[#f3efe7]">
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
