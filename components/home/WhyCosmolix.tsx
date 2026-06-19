import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

export default function WhyCosmolix() {
  return (
    <Section className="bg-[#1A1714] text-white">

      <Container>

        <h2 className="text-5xl font-bold">
          Why Organizations Choose Cosmolix
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div>
            <h3 className="font-bold text-xl">
              Technology First
            </h3>

            <p className="mt-4 text-neutral-300">
              Built around engineering,
              architecture and delivery.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl">
              Outcome Driven
            </h3>

            <p className="mt-4 text-neutral-300">
              Focused on business outcomes,
              not just implementation.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl">
              Long-Term Support
            </h3>

            <p className="mt-4 text-neutral-300">
              Delivery does not end at launch.
            </p>
          </div>

        </div>

      </Container>

    </Section>
  );
}