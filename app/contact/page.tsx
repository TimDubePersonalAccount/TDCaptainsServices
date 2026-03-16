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
        title="Start the conversation with a simple marine support inquiry."
        description="This page pairs a clean heading section with a form skeleton that can later connect to email delivery, CRM storage, or scheduling logic."
      />

      <InquiryForm
        title="Contact TD Captains Services"
        description="Use this form layout for general questions, service requests, and marina coordination."
        submitLabel="Send Inquiry"
        aside={
          <div className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-mist-100 p-8 shadow-[0_24px_60px_-45px_rgba(15,23,42,0.55)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-ocean-700">
              Quick Contact
            </p>
            <h2 className="text-3xl font-semibold text-ocean-950">
              Reach the local dispatch team.
            </h2>
            <p className="text-base leading-8 text-slate-600">
              Add final business contact details here once the live phone,
              email, and marina coverage notes are ready.
            </p>
            <div className="rounded-2xl border border-white/60 bg-white p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                Phone
              </p>
              <p className="mt-2 text-xl font-semibold text-ocean-950">
                {phoneNumber}
              </p>
            </div>
            <div className="rounded-2xl border border-white/60 bg-white p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
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
