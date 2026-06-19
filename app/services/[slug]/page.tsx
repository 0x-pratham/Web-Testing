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

          <Icon
            size={64}
            className="text-[#E87830] mb-8"
          />

          <h1 className="text-6xl font-bold">
            {service.title}
          </h1>

          <p className="mt-6 text-xl text-neutral-300">
            {service.subtitle}
          </p>

        </Container>
      </section>

      {/* Description */}
      <Section>
        <Container>

          <h2 className="text-4xl font-bold mb-6">
            Overview
          </h2>

          <p className="text-lg text-neutral-700 max-w-3xl">
            {service.description}
          </p>

        </Container>
      </Section>

      {/* Capabilities */}
      <Section className="bg-neutral-50">
        <Container>

          <h2 className="text-4xl font-bold mb-10">
            Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {service.capabilities.map(
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

      {/* Benefits */}
      <Section>
        <Container>

          <h2 className="text-4xl font-bold mb-10">
            Why Choose Cosmolix
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
                  {item.title}
                </Link>
              ))}
          </div>
        </Container>
      </section>

    </main>
  );
}