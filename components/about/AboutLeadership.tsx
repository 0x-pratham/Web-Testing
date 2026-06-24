"use client";

import Container from "@/components/shared/Container";
import FounderCard from "@/components/about/FounderCard";

export default function AboutLeadership() {
  return (
    <section className="py-24 bg-[#FCFAF8] relative overflow-hidden text-neutral-900">
      {/* Premium Subtle Ambient Depth Layer */}
      <div className="absolute inset-0 opacity-[0.4] bg-[radial-gradient(circle_at_center,rgba(232,120,48,0.04),transparent_60%)] pointer-events-none" />

      <Container>
        <div className="relative z-10">
          {/* Refined Distinctive Premium Header Block */}
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E87830] font-semibold">
              Leadership
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-[-0.05em] text-neutral-950">
              Built By Engineers. Driven By Vision.
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-lg text-neutral-600 leading-relaxed font-light">
              Combining business leadership and technical expertise to build secure, scalable and future-ready digital solutions.
            </p>
          </div>

          {/* Asymmetric Visual Hierarchy Grid Matrix Layout */}
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 max-w-6xl mx-auto items-stretch">
            
            {/* CEO Executive Profile Node (Slightly Dominant Weight) */}
            <div className="flex flex-col h-full">
              <FounderCard
                name="Prathamesh Bhil"
                role="Chief Executive Officer"
                image="/founders/pratham.png"
                bio="Leading business strategy, partnerships, innovation and organizational growth while driving the long-term vision of Cosmolix."
                expertise={["Growth", "Innovation", "Execution"]}
              />
            </div>

            {/* CTO Technical Profile Node (Slightly Sleeker Weight) */}
            <div className="flex flex-col h-full">
              <FounderCard
                name="Dhanesh Shingade"
                role="Chief Technology Officer"
                image="/founders/dhanesh.jpeg"
                bio="Leading technology architecture, engineering excellence and product delivery with a focus on scalable and secure solutions."
                expertise={["Engineering", "Infrastructure", "Security"]}
              />
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}