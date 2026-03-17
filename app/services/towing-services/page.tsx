import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Towing Services",
};

export default function TowingServicesPage() {
  return (
    <ServiceDetail
      title="Towing Services"
      description="Responsive towing support when a vessel needs prompt attention, local coordination, and dependable assistance."
      highlights={[
        "Emergency towing response",
        "Local coordination support",
        "Dockside follow-up assistance",
        "Clear communication during service",
      ]}
    />
  );
}
