import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import ServicesGrid from "@/components/home/ServicesGrid";
import Industries from "@/components/home/Industries";
import ProcessSection from "@/components/home/ProcessSection";
import WhyCosmolix from "@/components/home/WhyCosmolix";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full p-0 m-0 space-y-0 gap-0">
      <Hero />
      
      <TrustStrip />

      <ServicesGrid />

      <ProcessSection />

      <Industries />

      <WhyCosmolix />

      {/* Target Connection Flow Boundary */}
      <CTABanner />
    </div>
  );
}