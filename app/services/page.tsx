import ServicesHero from "@/components/services/ServicesHero";
import FeaturedServices from "@/components/services/FeaturedServices";
import AllServicesGrid from "@/components/services/AllServicesGrid";
import WhyChooseCosmolix from "@/components/services/WhyChooseCosmolix";
import ServicesProcess from "@/components/services/ServicesProcess";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <FeaturedServices />
      <AllServicesGrid />
      <WhyChooseCosmolix />
      <ServicesProcess />
      <ServicesCTA />
    </>
  );
}