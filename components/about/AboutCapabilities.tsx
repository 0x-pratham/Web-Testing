import Container from "@/components/shared/Container";

const items = [
  {
    title: "Build",
    subheading: "Digital products that create value.",
    description:
      "Digital products, applications and customer experiences.",
    indicator: "Product Development"
  },
  {
    title: "Run",
    subheading: "Infrastructure that scales with growth.",
    description:
      "Cloud infrastructure, automation and operational scale.",
    indicator: "Operational Scale"
  },
  {
    title: "Secure",
    subheading: "Protection built into every layer.",
    description:
      "Cybersecurity, resilience and compliance-driven delivery.",
    indicator: "Risk Reduction"
  }
];

export default function AboutCapabilities() {
  return (
    <section className="py-24 bg-[#FCFAF8]">
      <Container>
        {/* Premium Outcome-Oriented Header Segment */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.22em] text-[#E87830] font-semibold">
            What We Do
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-[-0.05em] leading-[1] text-neutral-950">
            Technology capabilities built around outcomes.
          </h2>

          <p className="mt-6 text-lg text-neutral-600 leading-relaxed font-light">
            We help organizations build digital products, operate scalable
            infrastructure and protect critical systems through engineering,
            cloud and cybersecurity expertise.
          </p>
        </div>

        {/* Subtle Horizontal Connecting Accent Line */}
        <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-[#E87830]/20 to-transparent" />

        {/* Capabilities Grid Layer */}
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[32px] bg-white p-10 transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-neutral-200/40"
            >
              {/* Premium Top Micro Accent Active Line */}
              <div
                className="absolute left-0 top-0 h-[2px] w-0 bg-[#E87830] transition-all duration-500 group-hover:w-full"
              />

              {/* Refined Technical Geometric Indicator Row */}
              <div className="mb-8 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#E87830]" />
                <div className="h-px w-12 bg-[#E87830]/25" />
              </div>

              {/* Premium Headline Element */}
              <h3 className="text-[2.4rem] font-semibold tracking-[-0.05em] leading-[0.9] text-neutral-950">
                {item.title}
              </h3>

              {/* High-Premium Characterizing Contextual Subhead Statement */}
              <p className="mt-4 text-sm font-medium text-neutral-900">
                {item.subheading}
              </p>

              {/* Functional System Copy Matrix */}
              <p className="mt-4 text-neutral-600 leading-relaxed font-light text-base">
                {item.description}
              </p>

              {/* Targeted Outcome Technical Context Bottom Label */}
              <div className="mt-10 flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#E87830]" />
                <span className="text-xs uppercase tracking-[0.15em] text-neutral-400 font-medium">
                  {item.indicator}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}