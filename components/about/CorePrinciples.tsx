import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

const principles = [
  {
    title: "Engineering First",
    description:
      "Every solution begins with strong technical foundations.",
  },
  {
    title: "Business Alignment",
    description:
      "Technology decisions should support measurable outcomes.",
  },
  {
    title: "Long-Term Thinking",
    description:
      "Solutions should remain maintainable and scalable.",
  },
  {
    title: "Continuous Improvement",
    description:
      "Optimization does not stop after deployment.",
  },
];

export default function CorePrinciples() {
  return (
    <Section className="bg-neutral-50">

      <Container>

        <h2 className="text-5xl font-bold mb-16">
          Core Principles
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {principles.map((item) => (
            <div
              key={item.title}
              className="bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-neutral-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </Container>

    </Section>
  );
}