import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";
import PageHero from "@/components/PageHero";
import { processSteps } from "@/components/site-data";
import { getServiceBySlug } from "@/lib/services";

export const metadata: Metadata = {
  title: "Request Service",
  description:
    "Request captain services, launch support, maintenance, repairs, towing, and other marine help for your boat on the Hudson River.",
};

type RequestServicePageProps = {
  searchParams: Promise<{
    service?: string | string[];
  }>;
};

function getSingleValue(value?: string | string[]) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function RequestServicePage({
  searchParams,
}: RequestServicePageProps) {
  const { service: serviceParam } = await searchParams;
  const serviceSlug = getSingleValue(serviceParam);
  const selectedService = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;

  return (
    <main>
      <PageHero
        eyebrow="Request Service"
        title="Share your service needs and boat location in one clear request."
        description={
          selectedService
            ? `Request ${selectedService.title} and check the subservices you need, along with your boat location and timing, so the team can review the job and confirm next steps.`
            : "Choose a service first, then select the subservices you need and share your boat location so the team can review the job and confirm next steps."
        }
      />

      <InquiryForm
        title="Service Request Form"
        description={
          selectedService
            ? `Your service has already been selected. Check one or more subservices below, then add the remaining request details.`
            : "Start by choosing a service below. Once selected, the matching subservices will appear here as checkboxes."
        }
        submitLabel="Request Service"
        selectedServiceSlug={selectedService?.slug}
        aside={
          <div className="rounded-[1.35rem] bg-sand-400 p-8 text-ocean-950 shadow-[0_18px_40px_-30px_rgba(15,42,68,0.18)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-950/70">
              What To Expect
            </p>
            <div className="mt-6 space-y-5">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-xl border border-ocean-950/10 bg-white/55 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ocean-950/10 bg-ocean-950 text-sm font-semibold text-white">
                    0{index + 1}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">{step.title}</h2>
                    <p className="mt-1 text-sm leading-7 text-slate-700">
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
