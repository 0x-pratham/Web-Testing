import Image from "next/image";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import Button from "@/components/shared/Button";
import SectionLabel from "@/components/shared/SectionLabel";
import MissionSection from "@/components/about/MissionSection";
import CorePrinciples from "@/components/about/CorePrinciples";
import FounderCard from "@/components/about/FounderCard"; // Adjusted path to your card layout

export const metadata = {
  title: "About Cosmolix",
  description:
    "Learn about Cosmolix Private Limited, our mission and leadership.",
};

export default function AboutPage() {
  // Executive Leadership Profile Data
  const leaders = [
    {
      name: "Gaurav",
      role: "Founder & Director",
      image: "/team/gaurav.jpg", // Replace with your actual asset paths
      bio: "Leading technology strategy, platform architecture, and enterprise digital engineering initiatives at Cosmolix.",
    }
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#1A1714] text-white py-32">
        <Container>
          <div className="max-w-4xl">
            <SectionLabel>
              ABOUT COSMOLIX
            </SectionLabel>

            <h1 className="text-6xl font-bold">
              Building Technology
              <br />
              For The Future.
            </h1>

            <p className="mt-8 text-lg text-neutral-300 max-w-2xl">
              Cosmolix Private Limited is focused on
              software development, artificial intelligence,
              cloud solutions and enterprise technology services.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <MissionSection />

      {/* Leadership */}
      <Section>
        <Container>
          <h2 className="text-4xl font-bold mb-12 border-b border-neutral-100 pb-4">
            Leadership
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {leaders.map((leader) => (
              <FounderCard
                key={leader.name}
                name={leader.name}
                role={leader.role}
                image={leader.image}
                bio={leader.bio}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* How We Work */}
      <Section className="bg-neutral-50 border-t border-b border-neutral-100">
        <Container>
          <h2 className="text-4xl font-bold mb-12">
            How We Work
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-xl mb-3">
                Communication
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Slack, Email, Weekly Reviews and
                Dedicated Project Coordination.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-3">
                Delivery Process
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Discovery → Architecture →
                Development → Support
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-3">
                Availability
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Monday to Saturday
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-3">
                Typical Engagement
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                2 Weeks – 12 Months
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Principles */}
      <CorePrinciples />

      {/* CTA */}
      <Section>
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Let's Build Together
            </h2>

            <div className="mt-8">
              <Button href="/contact">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}