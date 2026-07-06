"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/shared/Container";

export default function AboutStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const xOffset = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const capabilities = [
    { title: "Software Engineering", desc: "Designing reliable software that scales with your business." },
    { title: "Cloud Infrastructure", desc: "Modern cloud environments optimized for performance." },
    { title: "Cybersecurity", desc: "Security integrated into every stage of development." },
    { title: "Artificial Intelligence", desc: "Practical AI solutions built for real-world impact." },
  ];

  return (
    <section ref={containerRef} className="bg-[#FCFAF8] py-32 text-neutral-900 selection:bg-[#E87830]/20 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Editorial Anchor - Full width utilization */}
          <div className="lg:col-span-4 sticky top-32">
            <motion.div style={{ x: useTransform(scrollYProgress, [0, 0.5], [0, -20]) }}>
              <span className="text-[12px] font-bold uppercase tracking-[0.25em] text-[#E87830] font-[var(--font-inter)]">
                Why Cosmolix
              </span>
              <h2 className="mt-6 text-5xl font-bold tracking-[-0.04em] leading-[1] text-neutral-950 font-[var(--font-sora)]">
                Engineering <br/>With Intent.
              </h2>
            </motion.div>
          </div>

          {/* Right: Narrative Engine */}
          <div className="lg:col-span-8">
            <div className="relative border-l border-neutral-200 pl-10 space-y-24">
              {[
                "Technology should help organizations move faster, operate securely and scale with confidence.",
                "Our approach combines engineering expertise, cloud infrastructure and cybersecurity to create solutions that remain reliable as businesses grow.",
                "Every engagement is guided by long-term thinking, practical execution and measurable outcomes.",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
                  whileInView={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  <div className="absolute -left-[45px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#E87830] bg-[#FCFAF8]" />
                  <p className="max-w-2xl text-2xl leading-relaxed text-neutral-700 font-light font-[var(--font-inter)]">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Engineering Excellence: Magnetic Border + Glow Effect */}
            <div className="mt-32">
              <div className="flex items-center gap-6 mb-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 font-[var(--font-inter)]">
                  Engineering Excellence
                </span>
                <div className="h-[1px] flex-1 bg-neutral-200" />
              </div>

              <div className="grid w-full">
                {capabilities.map((cap, i) => (
                  <motion.div
                    key={cap.title}
                    whileHover={{ x: 10 }}
                    className="group relative flex items-center justify-between py-12 border-b border-neutral-200/60 cursor-pointer"
                  >
                    {/* Unique Effect: Border Pulse on Hover */}
                    <div className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#E87830] group-hover:w-full transition-all duration-700" />
                    
                    <div className="flex items-start gap-12">
                      <span className="text-[14px] font-mono text-neutral-400 pt-1 group-hover:text-[#E87830] transition-colors">
                        0{i + 1}
                      </span>
                      <div className="flex flex-col gap-2">
                        <h4 className="text-2xl font-bold text-neutral-950 font-[var(--font-sora)]">
                          {cap.title}
                        </h4>
                        <p className="text-sm text-neutral-500 font-[var(--font-inter)] max-w-sm">
                          {cap.desc}
                        </p>
                      </div>
                    </div>

                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#E87830]">
                      <div className="w-8 h-8 rounded-full border border-[#E87830] flex items-center justify-center">
                        <span className="text-lg">↗</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Final Positioning */}
            <div className="mt-32 border-t border-neutral-200 pt-20">
              <p className="text-3xl font-medium text-neutral-950 font-[var(--font-sora)] leading-tight max-w-2xl">
                Building secure, scalable and future-ready technology for organizations that value long-term growth.
              </p>
              <div className="mt-10 flex items-center gap-6">
                <span className="text-[11px] text-[#E87830] tracking-[0.2em] uppercase font-[var(--font-inter)] font-bold">
                  Technology with intent.
                </span>
                <div className="h-[2px] w-12 bg-neutral-950" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}