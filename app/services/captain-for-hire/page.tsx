import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Captain For Hire",
};

export default function CaptainForHirePage() {
  return (
    <ServiceDetail
      title="Captain For Hire"
      description="Professional captain support for charters, instruction, deliveries, and vessel oversight throughout the NYC Hudson River area."
      requestHref="/request-service?service=captain-for-hire"
      showOverviewSection={false}
      highlights={[
        "Owner-assisted outings",
        "Training and familiarization trips",
        "Planned vessel movements",
        "Docking and navigation support",
      ]}
      subservices={[
        {
          title: "Captain For Hire",
          description:
            "We provide a captain to skipper your vessel or a bareboat charter rental in the NYC Hudson River area.",
        },
        {
          title: "Charter For Commercial Work",
          description:
            "Hire one of our captained boats to support your project or job by the hour.",
        },
        {
          title: "Instruction",
          description:
            "Our captains can instruct you on boat operation, docking, local navigation, and electronics.",
        },
        {
          title: "Delivery",
          description:
            "We provide a captain and crew to deliver your boat safely to the requested port.",
        },
        {
          title: "Maintenance Captain",
          description:
            "Hire us to oversee the management of your boat's maintenance or an upgrade project.",
        },
      ]}
    />
  );
}
