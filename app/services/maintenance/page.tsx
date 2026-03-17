import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Maintenance",
};

export default function MaintenancePage() {
  return (
    <ServiceDetail
      title="Maintenance"
      description="Routine vessel care and maintenance planning to help keep your boat prepared, clean, and ready for the season."
      requestHref="/request-service?service=maintenance"
      highlights={[
        "Seasonal maintenance planning",
        "Routine vessel care",
        "Cleaning and upkeep coordination",
        "Follow-up maintenance visits",
      ]}
    />
  );
}
