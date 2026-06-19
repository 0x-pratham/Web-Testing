import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

const capabilities = [
  "Artificial Intelligence",
  "Software Engineering",
  "Cloud & SaaS",
  "Cybersecurity",
  "DevOps",
  "QA & Testing",
];

export default function Capabilities() {
  return (
    <Section>

      <Container>

        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.2em] text-[#E87830] text-sm mb-4">
            CAPABILITIES
          </p>

          <h2 className="text-5xl font-bold">
            End-to-End Technology Delivery
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          {capabilities.map((item) => (
            <div
              key={item}
              className="
                bg-white
                p-8
                shadow-sm
              "
            >
              {item}
            </div>
          ))}

        </div>

      </Container>

    </Section>
  );
}