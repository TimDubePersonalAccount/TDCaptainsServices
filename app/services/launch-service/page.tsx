import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Launch Service",
};

export default function LaunchServicePage() {
  return (
    <ServiceDetail
      title="Launch Service"
      description="Launch-day help built around preparation, dockside coordination, and a smoother departure from the start."
      highlights={[
        "Pre-departure checks",
        "Dock handling support",
        "Launch-day coordination",
        "Owner confidence and walkthroughs",
      ]}
    />
  );
}
