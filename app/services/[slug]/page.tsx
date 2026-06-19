import { notFound } from "next/navigation";
import Link from "next/link";

import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import Button from "@/components/shared/Button";

import { services } from "@/data/services";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: Props) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main>

      {/* Hero */}
      <section className="bg-[#1A1714] text-white py-32">
        <Container>
          <div className="max-w-4xl">

            <div className="mb-6">
              <Icon
                size={48}
                className="text-[#E87830]"
              />
            </div>

            <h1 className="text-6xl font-bold">
              {service.title}
            </h1>

            <p className="mt-6 text-xl text-neutral-300 max-w-2xl">
              {service.subtitle}
            </p>

          </div>
        </Container>
      </section>

      {/* Overview */}
      <Section>
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">
              Overview
            </h2>

            <p className="text-lg text-neutral-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* Why This Service Matters */}
      <Section className="border-t border-neutral-100">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">
              Why This Service Matters
            </h2>

            <p className="text-lg text-neutral-600 leading-relaxed">
              Organizations increasingly rely on
              technology systems that are scalable,
              secure and aligned with business goals.
            </p>
          </div>
        </Container>
      </Section>

      {/* Capabilities */}
      <Section className="bg-neutral-50">
        <Container>
          <h2 className="text-3xl font-bold mb-12">
            Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {service.capabilities.map(
              (item) => (
                <div
                  key={item}
                  className="bg-white p-8 shadow-sm"
                >
                  <h3 className="font-semibold text-lg">
                    {item}
                  </h3>
                </div>
              )
            )}
          </div>
        </Container>
      </Section>

      {/* Typical Engagement */}
      <section className="bg-neutral-50 py-24 border-t border-neutral-200">
        <Container>
          <h2 className="text-3xl font-bold mb-12">
            How We Deliver
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="bg-white p-8 shadow-sm border-l-4 border-[#E87830]">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">Phase 01</div>
              <h3 className="font-bold text-xl text-neutral-900">Discovery</h3>
            </div>
            <div className="bg-white p-8 shadow-sm border-l-4 border-[#E87830]">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">Phase 02</div>
              <h3 className="font-bold text-xl text-neutral-900">Planning</h3>
            </div>
            <div className="bg-white p-8 shadow-sm border-l-4 border-[#E87830]">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">Phase 03</div>
              <h3 className="font-bold text-xl text-neutral-900">Implementation</h3>
            </div>
            <div className="bg-white p-8 shadow-sm border-l-4 border-[#E87830]">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">Phase 04</div>
              <h3 className="font-bold text-xl text-neutral-900">Support</h3>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <Section>
        <Container>
          <h2 className="text-3xl font-bold mb-12">
            Benefits
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {service.benefits.map(
              (item) => (
                <div
                  key={item}
                  className="border p-6"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section className="bg-[#7A3206] py-24">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-5xl font-bold">
              Let's Build Together
            </h2>

            <div className="mt-8">
              <Button href="/contact">
                Start Your Project
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 border-t">
        <Container>
          <h2 className="text-3xl font-bold mb-8">
            Explore Other Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {services
              .filter(
                (item) =>
                  item.slug !== service.slug
              )
              .slice(0, 3)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="border p-6"
                >
                  <h3 className="font-semibold text-lg text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mt-2 line-clamp-2">
                    {item.subtitle}
                  </p>
                </Link>
              ))}
          </div>
        </Container>
      </section>

    </main>
  );
}