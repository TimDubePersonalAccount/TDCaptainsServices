import Hero from "@/components/Hero";
import HowItWorksStrip from "@/components/HowItWorksStrip";
import ServicesGrid from "@/components/ServicesGrid";

export default function Home() {
  return (
    <main className="overflow-hidden bg-ocean-950">
      <Hero />
      <HowItWorksStrip />
      <ServicesGrid />
    </main>
  );
}
