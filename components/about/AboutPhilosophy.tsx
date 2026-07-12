"use client";

import { motion, useMotionTemplate, useSpring } from "framer-motion";
import Container from "@/components/shared/Container";

const values = [
  { title: "Clarity", description: "Every solution begins with understanding the business challenge before proposing technology." },
  { title: "Execution", description: "Ideas create value only when they are delivered reliably and effectively." },
  { title: "Reliability", description: "Performance, security and scalability are built into every engagement." },
  { title: "Partnership", description: "We work alongside our clients as long-term partners, not temporary vendors." },
];

export default function AboutPhilosophy() {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-[#F9F7F4] selection:bg-[#E87830]/20">
      <Container>
        <div className="max-w-3xl mb-14 md:mb-20 lg:mb-24">
          <motion.span className="text-[15px] md:text-[16px] font-semibold uppercase tracking-[0.18em] text-[#E87830] font-[var(--font-inter)]">
            Our Core Philosophy
          </motion.span>
          <motion.h2 className="mt-6 text-[42px] sm:text-[50px] md:text-[58px] lg:text-[64px] font-bold tracking-[-0.04em] leading-[1.05] text-neutral-950 font-[var(--font-sora)]">
            Engineering with <br /> clarity, execution and trust.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              onMouseMove={onMouseMove}
              whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }} // Added Magnetic Tilt
              className="group relative p-6 md:p-8 lg:p-10 bg-white border border-neutral-200/60 overflow-hidden cursor-default"
            >
              {/* Dynamic Glow Effect */}
              <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                  background: useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, #E8783015, transparent 80%)`,
                }}
              />

              <div className="mb-8 md:mb-10 flex items-center gap-4">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  className="w-1.5 h-1.5 bg-[#E87830] rounded-full" 
                />
                <div className="h-px w-8 bg-neutral-200" />
              </div>

              <div className="relative z-10">
                <h3 className="text-[30px] md:text-[34px] font-bold tracking-[-0.02em] text-neutral-950 font-[var(--font-sora)]">
                  {item.title}
                </h3>
                <p className="mt-5 md:mt-6 text-[17px] text-neutral-600 leading-8 font-light max-w-sm">
                  {item.description}
                </p>
              </div>

              {/* Advanced SVG Line Animation */}
              <svg className="absolute top-0 left-0 w-full h-1 pointer-events-none">
                <motion.path
                  d="M0 0 H 600"
                  stroke="#E87830"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileHover={{ pathLength: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}