import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionLabel from "@/components/shared/SectionLabel";

export default function Industries() {
  return (
    <Section>
      <Container>
        
        <div className="mb-16">
          <SectionLabel>
            INDUSTRIES
          </SectionLabel>

          <h2 className="text-5xl font-bold">
            Sector Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <p className="text-neutral-600">Custom learning management architectures and custom generative workflows.</p>
          </div>

          <div className="bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <p className="text-neutral-600">Robust systems built for operational automation and scalable deployment structures.</p>
          </div>

          <div className="bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Public Sector</h3>
            <p className="text-neutral-600">Compliant and reliable structural responses designed for public opportunities.</p>
          </div>
        </div>

      </Container>
    </Section>
  );
}