import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

const process = [
  {
    step: "01",
    title: "Requirement Discovery",
    duration: "1–2 Weeks",
    description:
      "Stakeholder workshops, requirement gathering and project scoping.",
  },
  {
    step: "02",
    title: "Architecture Design",
    duration: "1–2 Weeks",
    description:
      "Technical planning, technology selection and solution architecture.",
  },
  {
    step: "03",
    title: "Build & Validation",
    duration: "2–12 Weeks",
    description:
      "Iterative development, testing and stakeholder reviews.",
  },
  {
    step: "04",
    title: "Launch & Support",
    duration: "Ongoing",
    description:
      "Deployment, monitoring, maintenance and continuous improvement.",
  },
];

export default function ProcessSection() {
  return (
    <Section className="bg-white">
      <Container>
        <p className="uppercase tracking-[0.2em] text-[#E87830] text-sm mb-4">
          DELIVERY
        </p>

        <h2 className="text-5xl font-bold mb-16">
          How We Engage
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {process.map((item) => (
            <div 
              key={item.step}
              className="
                bg-white
                p-8
                shadow-sm
                hover:shadow-xl
                transition
              "
            >
              <div className="text-[#E87830] text-sm mb-3">
                STEP {item.step}
              </div>

              <h3 className="font-bold text-xl">
                {item.title}
              </h3>

              <div className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">
                {item.duration}
              </div>

              <p className="text-neutral-600 mt-4 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}