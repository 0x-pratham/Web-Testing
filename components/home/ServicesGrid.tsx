import Link from "next/link";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionLabel from "@/components/shared/SectionLabel";
import { services } from "@/data/services";

export default function ServicesGrid() {

  const featured = services.find(
    (s) => s.slug === "ai-ml"
  );

  const others = services.filter(
    (s) => s.slug !== "ai-ml"
  );

  if (!featured) return null;

  const FeaturedIcon = featured.icon;

  return (
    <Section>
      <Container>

        <div className="mb-16">

          <SectionLabel>
            SERVICES
          </SectionLabel>

          <h2 className="text-5xl font-bold">
            What We Build
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          <Link
            href={`/services/${featured.slug}`}
            className="
              lg:col-span-2
              bg-[#1A1714]
              text-white
              p-10
              min-h-[400px]
              flex
              flex-col
              justify-between
            "
          >

            <FeaturedIcon
              size={56}
              className="text-[#E87830]"
            />

            <div>
              <h3 className="text-4xl font-bold mb-4">
                {featured.title}
              </h3>

              <p className="max-w-xl text-neutral-300">
                {featured.description}
              </p>
            </div>

          </Link>

          <div className="grid gap-6">

            {others.slice(0, 2).map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="
                    bg-white
                    p-6
                    shadow-sm
                    hover:shadow-xl
                    transition
                  "
                >
                  <Icon
                    size={28}
                    className="text-[#E87830]"
                  />

                  <h3 className="mt-4 font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm text-neutral-600">
                    {service.description}
                  </p>

                </Link>
              );
            })}
          </div>

        </div>

      </Container>
    </Section>
  );
}