import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import Button from "@/components/shared/Button";

import {
  BrainCircuit,
  FlaskConical,
  Rocket,
  Cpu,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title:
    "AI & Machine Learning Services | Cosmolix",
  description:
    "Enterprise AI solutions, model development, training and deployment.",
};

const capabilities = [
  {
    title: "Research",
    description:
      "Applied AI research and feasibility studies.",
    icon: BrainCircuit,
  },
  {
    title: "Model Training",
    description:
      "Custom machine learning model development.",
    icon: FlaskConical,
  },
  {
    title: "Fine Tuning",
    description:
      "LLM customization and optimization.",
    icon: Cpu,
  },
  {
    title: "Deployment",
    description:
      "Scalable production-grade deployment.",
    icon: Rocket,
  },
];

export default function AIPage() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#1A1714] text-white py-32">
        <Container>
          <div className="max-w-4xl">

            <p className="uppercase tracking-[0.2em] text-[#E87830] mb-6">
              AI & MACHINE LEARNING
            </p>

            <h1 className="font-[var(--font-sora)] text-6xl font-bold leading-tight">
              Intelligent Systems
              <br />
              Built For Scale.
            </h1>

            <p className="mt-8 text-lg text-neutral-300 max-w-2xl">
              Research, model development,
              training, fine-tuning and deployment
              of enterprise-grade AI solutions.
            </p>

            <div className="mt-10">
              <Button href="/contact">
                Start Your AI Project
              </Button>
            </div>

          </div>
        </Container>
      </section>

      {/* CAPABILITIES */}
      <Section>
        <Container>

          <h2 className="text-4xl font-bold mb-12">
            Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    border
                    p-8
                    transition
                    hover:border-[#E87830]
                    hover:-translate-y-2
                  "
                >
                  <Icon
                    size={40}
                    className="text-[#E87830] mb-5"
                  />

                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-neutral-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </Container>
      </Section>

      {/* RESEARCH */}
      <Section className="bg-neutral-50">
        <Container>

          <h2 className="text-4xl font-bold mb-8">
            Research & Innovation
          </h2>

          <p className="max-w-3xl text-lg text-neutral-700">
            We conduct AI research,
            experimentation and validation
            to identify opportunities,
            optimize workflows and
            develop intelligent products.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">

            <div className="border p-6">
              Findings
            </div>

            <div className="border p-6">
              Whitepapers
            </div>

            <div className="border p-6">
              Patents
            </div>

          </div>

        </Container>
      </Section>

      {/* DEPLOYMENT */}
      <Section>
        <Container>

          <h2 className="text-4xl font-bold mb-8">
            Production Deployment
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div>
              <p className="text-lg text-neutral-700">
                Deploy AI systems across cloud,
                web and enterprise environments
                with monitoring, scaling and
                performance optimization.
              </p>
            </div>

            <div className="space-y-4">

              <div className="flex gap-3">
                <CheckCircle className="text-[#E87830]" />
                Cloud Deployment
              </div>

              <div className="flex gap-3">
                <CheckCircle className="text-[#E87830]" />
                Model Monitoring
              </div>

              <div className="flex gap-3">
                <CheckCircle className="text-[#E87830]" />
                API Integration
              </div>

              <div className="flex gap-3">
                <CheckCircle className="text-[#E87830]" />
                Security & Governance
              </div>

            </div>

          </div>

        </Container>
      </Section>

      {/* WHY COSMOLIX */}
      <Section className="bg-[#1A1714] text-white">
        <Container>

          <h2 className="text-4xl font-bold mb-10">
            Why Cosmolix
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="border border-white/10 p-6">
              Enterprise Focus
            </div>

            <div className="border border-white/10 p-6">
              Secure Architecture
            </div>

            <div className="border border-white/10 p-6">
              Scalable Solutions
            </div>

          </div>

        </Container>
      </Section>

      {/* CTA */}
      <section className="bg-[#7A3206] py-24">
        <Container>

          <div className="text-center text-white">

            <h2 className="text-5xl font-light">
              Ready To Build
            </h2>

            <h3 className="text-5xl font-bold mt-2">
              AI Solutions?
            </h3>

            <div className="mt-8">
              <Button href="/contact">
                Schedule Consultation
              </Button>
            </div>

          </div>

        </Container>
      </section>

    </main>
  );
}