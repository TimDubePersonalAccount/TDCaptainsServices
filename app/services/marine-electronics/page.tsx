import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Marine Electronics",
};

export default function MarineElectronicsPage() {
  return (
    <ServiceDetail
      title="Marine Electronics"
      description="Onboard electronics support for installs, upgrades, troubleshooting, and practical system improvements."
      requestHref="/request-service?service=marine-electronics"
      highlights={[
        "Electronics installs and upgrades",
        "System troubleshooting",
        "Navigation equipment support",
        "Onboard diagnostics coordination",
      ]}
    />
  );
}
