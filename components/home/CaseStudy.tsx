import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import Button from "@/components/shared/Button";
import SectionLabel from "@/components/shared/SectionLabel";

export default function CaseStudy() {
  return (
    <Section className="bg-[#1A1714] text-white">
      <Container>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <SectionLabel>
              FEATURED WORK
            </SectionLabel>

            <h2 className="text-5xl font-bold leading-tight">
              Campus GPT
            </h2>

            <p className="mt-6 text-lg text-neutral-300">
              An AI-powered university assistant
              designed to streamline student
              support, academic guidance and
              institutional communication.</p>

            <div className="mt-8 space-y-3">

              <div>
                ✓ Next.js Frontend
              </div>

              <div>
                ✓ FastAPI Backend
              </div>

              <div>
                ✓ AI-Powered Responses
              </div>

              <div>
                ✓ Role-Based Access
              </div>

            </div>

            <div className="mt-10">
              <Button href="/contact">
                Discuss Similar Project
              </Button>
            </div>

          </div>

          <div
            className="
              bg-[#1A1714]
              text-white
              p-12
              min-h-[400px]/
              flex
              flex-col
              justify-center
            "
          >
            <h3 className="text-3xl font-bold">
              AI For Education
            </h3>

            <p className="mt-4 text-neutral-300">
              Built to provide instant access to
              university information, automate
              common queries and improve the
              student experience.
            </p>
          </div>

        </div>

      </Container>
    </Section>
  );
}