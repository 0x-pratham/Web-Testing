import Container from "@/components/shared/Container";

const stats = [
  {
    value: "Clarity",
    description:
      "Technology decisions should simplify operations, not add complexity."
  },
  {
    value: "Scalability",
    description:
      "Solutions should grow alongside the organizations that depend on them."
  },
  {
    value: "Reliability",
    description:
      "Performance, security and stability are considered from day one."
  }
];

export default function AboutStats() {
  return (
    <section className="py-24 bg-white text-neutral-900">
      <Container>
        {/* Editorial Domain Strategic Heading Node */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.22em] text-[#E87830] font-medium block">
            How We Create Value
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-[-0.05em] leading-[1] text-neutral-950">
            Built for outcomes, not deliverables.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-neutral-600 leading-relaxed font-light">
            Every engagement is focused on solving business challenges through
            practical engineering, scalable systems and long-term thinking.
          </p>
        </div>

        {/* Premium Position Matrix Grid */}
        <div className="grid lg:grid-cols-3 gap-10">
          {stats.map((item) => (
            <div
              key={item.value}
              className="group rounded-[28px] bg-white p-10 border border-neutral-200/40 transition-all duration-300 hover:-translate-y-1 hover:border-[#E87830]/20 hover:shadow-[0_16px_50px_rgba(0,0,0,0.05)]"
            >
              {/* Refined Geometric Line Accent */}
              <div className="mb-8 flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-[#E87830]" />
                <div className="h-px w-12 bg-[#E87830]/20" />
              </div>

              {/* Stacked Typographic Representation */}
              <h3 className="text-[2.25rem] font-semibold tracking-[-0.05em] leading-[0.95] text-neutral-950">
                {item.value}
              </h3>

              {/* Core Semantic Supporting Philosophy Context */}
              <p className="mt-6 text-neutral-600 leading-relaxed font-light text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}