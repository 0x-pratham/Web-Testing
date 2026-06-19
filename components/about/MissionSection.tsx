import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

export default function MissionSection() {
  return (
    <Section>

      <Container>

        <div className="max-w-4xl">

          <p className="uppercase tracking-[0.2em] text-[#E87830] text-sm mb-4">
            MISSION
          </p>

          <h2 className="text-5xl font-bold leading-tight">
            Building technology that helps
            organizations move faster,
            operate smarter and scale confidently.
          </h2>

        </div>

      </Container>

    </Section>
  );
}