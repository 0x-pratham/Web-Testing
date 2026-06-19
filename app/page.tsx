import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import Capabilities from "@/components/home/Capabilities";
import ServicesGrid from "@/components/home/ServicesGrid";
import CaseStudy from "@/components/home/CaseStudy";
import StatsSection from "@/components/home/StatsSection";
import Industries from "@/components/home/Industries";
import ProcessSection from "@/components/home/ProcessSection";
import WhyCosmolix from "@/components/home/WhyCosmolix";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />

      <Capabilities />

      <ServicesGrid />

      <CaseStudy />

      <StatsSection />

      <Industries />

      <ProcessSection />

      <WhyCosmolix />

      <CTABanner />
    </>
  );
}