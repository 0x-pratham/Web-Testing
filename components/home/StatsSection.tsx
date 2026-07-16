import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

export default function StatsSection() {
  return (
    <Section className="bg-[#1A1714] text-white">
      <Container>
        <div className="grid grid-cols-2 gap-12 text-center md:grid-cols-4">
          <article>
            <h3 className="font-serif text-5xl font-bold text-[#E87830]">
              12+
            </h3>
            <p className="mt-2 text-xs font-sans uppercase tracking-wider text-neutral-400">
              Technology Services
            </p>
          </article>

          <article>
            <h3 className="font-serif text-5xl font-bold text-[#E87830]">
              AI
            </h3>
            <p className="mt-2 text-xs font-sans uppercase tracking-wider text-neutral-400">
              Research & Delivery
            </p>
          </article>

          <article>
            <h3 className="font-serif text-5xl font-bold text-[#E87830]">
              Cloud
            </h3>
            <p className="mt-2 text-xs font-sans uppercase tracking-wider text-neutral-400">
              Modern Infrastructure
            </p>
          </article>

          <article>
            <h3 className="font-serif text-5xl font-bold text-[#E87830]">
              B2B
            </h3>
            <p className="mt-2 text-xs font-sans uppercase tracking-wider text-neutral-400">
              Execution Focused
            </p>
          </article>
        </div>
      </Container>
    </Section>
  );
}