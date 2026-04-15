import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";
import PageHero from "@/components/PageHero";
import { phoneNumber } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact TD Captains Services for general boat questions, captain support, maintenance coordination, launch help, towing questions, and other Hudson River marine inquiries.",
};

export default function ContactPage() {
  const phoneLink = `tel:${phoneNumber.replace(/\D/g, "")}`;

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Get in touch for dependable marine support on the Hudson River."
        description="Reach out with general questions, captain support needs, launch help, maintenance coordination, towing questions, and other marine inquiries."
      />

      <InquiryForm
        title="General Inquiry Form"
        description="Share your contact details, any helpful boat or marina context, and your question. The team will review it and point you in the right direction."
        submitLabel="Send Inquiry"
        mode="contact"
        aside={
          <div className="space-y-4 rounded-[1.35rem] border border-mist-300 bg-mist-100 p-8 shadow-[0_14px_30px_-24px_rgba(15,42,68,0.14)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-800">
              Quick Contact
            </p>
            <h2 className="text-3xl font-semibold text-ocean-950">
              Reach the local service team.
            </h2>
            <p className="text-base leading-8 text-slate-600">
              For quick questions or planning help, send a general inquiry here.
              If the issue is time-sensitive, calling is the fastest way to get
              the conversation started.
            </p>
            <a
              href={phoneLink}
              className="block rounded-xl border border-mist-300 bg-white p-5 transition-colors duration-300 hover:border-sand-400/60"
            >
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Phone
              </p>
              <p className="mt-2 text-xl font-semibold text-ocean-950">
                {phoneNumber}
              </p>
            </a>
            <div className="rounded-xl border border-mist-300 bg-white p-5">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Service Area
              </p>
              <p className="mt-2 text-xl font-semibold text-ocean-950">
                Hudson River marinas, docks, and waterfront access points
              </p>
            </div>
          </div>
        }
      />
    </main>
  );
}
