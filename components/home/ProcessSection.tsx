import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

const steps = [
  "Requirement Study",
  "Architecture Design",
  "Development & Testing",
  "Deployment & Support",
];

export default function ProcessSection() {
  return (
    <Section className="bg-neutral-50">
      <Container>
        <h2 className="text-4xl font-bold mb-12">
          How We Engage
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step}
              className="border p-6"
            >
              <p className="text-[#E87830] text-sm mb-2">
                STEP {index + 1}
              </p>

              <h3 className="font-semibold">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}