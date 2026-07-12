import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { serviceDetails } from "@/data/service-details";
import ServiceHero from "@/components/service-detail/ServiceHero";
import ServiceOverview from "@/components/service-detail/ServiceOverview";
import ServiceCapabilities from "@/components/service-detail/ServiceCapabilities";
import ServiceProcess from "@/components/service-detail/ServiceProcess";
import ServiceBenefits from "@/components/service-detail/ServiceBenefits";
import ServiceCTA from "@/components/service-detail/ServiceCTA";
import RelatedServices from "@/components/service-detail/RelatedServices";

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const basicInfo = services.find((item) => item.slug === slug);
  const detail = serviceDetails[slug];

  if (!basicInfo || !detail) notFound();

  return (
    <main>
      <ServiceHero 
        data={detail} 
        category={basicInfo.title} 
        slug={slug} 
      />
      <ServiceOverview data={detail} />
      <ServiceCapabilities capabilities={detail.capabilities} />
      <ServiceProcess process={detail.process} />
      <ServiceBenefits benefits={detail.benefits} />
      <ServiceCTA />
      <RelatedServices currentSlug={slug} />
    </main>
  );
}