import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";
import PageHero from "@/components/PageHero";
import { phoneNumber } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Get in touch for dependable marine support on the Hudson River."
        description="Use this page for general inquiries, dockside assistance requests, captain services, and maintenance coordination."
      />

      <InquiryForm
        title="Contact TD Captains Services"
        description="Share the basics about your boat, your location, and what kind of help you need."
        submitLabel="Send Inquiry"
        aside={
          <div className="space-y-4 rounded-[1.35rem] border border-mist-300 bg-mist-100 p-8 shadow-[0_14px_30px_-24px_rgba(15,42,68,0.14)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-800">
              Quick Contact
            </p>
            <h2 className="text-3xl font-semibold text-ocean-950">
              Reach the local service team.
            </h2>
            <p className="text-base leading-8 text-slate-600">
              This area is ready for live contact details, dispatch notes, and
              marina coverage information once the final business information is
              in place.
            </p>
            <div className="rounded-xl border border-mist-300 bg-white p-5">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Phone
              </p>
              <p className="mt-2 text-xl font-semibold text-ocean-950">
                {phoneNumber}
              </p>
            </div>
            <div className="rounded-xl border border-mist-300 bg-white p-5">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Service Area
              </p>
              <p className="mt-2 text-xl font-semibold text-ocean-950">
                Hudson River Mobile Coverage
              </p>
            </div>
          </div>
        }
      />
    </main>
  );
}
