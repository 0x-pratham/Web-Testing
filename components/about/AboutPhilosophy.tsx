import Container from "@/components/shared/Container";

const values = [
  {
    title: "Clarity",
    description:
      "Every solution begins with understanding the business challenge before proposing technology.",
  },
  {
    title: "Execution",
    description:
      "Ideas create value only when they are delivered reliably and effectively.",
  },
  {
    title: "Reliability",
    description:
      "Performance, security and scalability are built into every engagement.",
  },
  {
    title: "Partnership",
    description:
      "We work alongside our clients as long-term partners, not temporary vendors.",
  },
];

export default function AboutPhilosophy() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E87830]">
            Engineering with clarity, execution and trust.
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-[-0.05em]">
            Engineering with clarity,
            <br />
            execution and trust.
          </h2>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {values.map((item) => (
            <div
              key={item.title}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-neutral-200/40
                bg-white
                p-10
                transition-all
                duration-300
                hover:-translate-y-[2px]
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)]
              "
            >
              {/* Handcrafted top border expansion on hover */}
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-[2px]
                  w-0
                  bg-[#E87830]
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />

              {/* Design System Signature Accent */}
              <div className="mb-8 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#E87830]" />
                <div className="h-px w-12 bg-[#E87830]/20" />
              </div>

              {/* Title Typography */}
              <h3
                className="
                  text-[1.8rem]
                  font-semibold
                  tracking-[-0.04em]
                  leading-none
                "
              >
                {item.title}
              </h3>

              {/* Description Matrix */}
              <p
                className="
                  mt-5
                  text-neutral-600
                  leading-7
                  text-[15px]
                "
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}