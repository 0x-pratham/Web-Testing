import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import ServicesGrid from "@/components/home/ServicesGrid";
import ProcessSection from "@/components/home/ProcessSection";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <ProcessSection />
      <CTABanner />
    </>
  );
}