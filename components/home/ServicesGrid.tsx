import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import FadeUp from "@/components/shared/FadeUp";
import { services } from "@/data/services";
import Link from "next/link";

export default function ServicesGrid() {
  return (
    <Section>
      <Container>
        <FadeUp>
          <h2 className="text-4xl font-bold mb-12">
            What We Do
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <FadeUp key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="
                    group
                    flex
                    flex-col
                    h-full
                    border
                    border-neutral-200
                    p-8
                    bg-white
                    hover:border-[#E87830]
                    hover:-translate-y-3
                    hover:shadow-2xl
                    transition-all
                    duration-300
                  "
                >
                  <div className="flex items-center justify-between mb-6">
                    <Icon
                      className="text-[#E87830] transition-transform duration-300 group-hover:scale-105"
                      size={36}
                    />
                  </div>

                  <h3 className="font-semibold text-xl text-neutral-900 group-hover:text-[#E87830] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-neutral-600 mt-4 text-sm leading-relaxed flex-grow">
                    Enterprise-grade solutions built for
                    scalability, security and long-term growth.
                  </p>
                </Link>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}