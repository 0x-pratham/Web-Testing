"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Container from "@/components/shared/Container";

export default function AboutStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const capabilities = [
    {
      title: "Software Engineering",
      desc: "Designing reliable software that scales with your business.",
      href: "/services/software",
    },
    {
      title: "Cloud Infrastructure",
      desc: "Modern cloud environments optimized for performance.",
      href: "/services/cloud",
    },
    {
      title: "Cybersecurity",
      desc: "Security integrated into every stage of development.",
      href: "/services/cybersecurity",
    },
    {
      title: "Artificial Intelligence",
      desc: "Practical AI solutions built for real-world impact.",
      href: "/services/ai-ml",
    },
  ];

  return (
    <section ref={containerRef} className="bg-[#FCFAF8] py-24 md:py-32 text-neutral-900 selection:bg-[#E87830]/20 overflow-hidden">
      <Container>
        {/* Why Cosmolix Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-32">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <motion.div>
              <span className="text-[15px] md:text-[16px] font-semibold uppercase tracking-[0.18em] text-[#E87830] font-[var(--font-inter)]">
                Why Cosmolix
              </span>
              <h2 className="mt-6 text-[42px] sm:text-[50px] md:text-[58px] lg:text-[64px] font-bold tracking-[-0.04em] leading-[1.05] text-neutral-950 font-[var(--font-sora)]">
                Engineering <br/>With Intent.
              </h2>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative border-l border-neutral-200 pl-6 md:pl-10 space-y-14 md:space-y-24">
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
                  <div className="absolute -left-[35px] md:-left-[45px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#E87830] bg-[#FCFAF8]" />
                  <p className="max-w-2xl text-[20px] sm:text-[24px] md:text-[28px] leading-[1.8] text-neutral-700 font-light font-[var(--font-inter)]">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Engineering Excellence Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div
            className="
              lg:col-span-4
              lg:sticky
              lg:top-32
              flex
              items-center
              lg:min-h-[720px]
            "
          >
            <motion.div className="w-full flex flex-col justify-center h-full">
              <span className="text-[15px] md:text-[16px] font-semibold uppercase tracking-[0.18em] text-[#E87830] font-[var(--font-inter)]">
                ENGINEERING EXCELLENCE
              </span>
              <h2 className="mt-6 text-[42px] sm:text-[50px] md:text-[58px] lg:text-[64px] font-bold tracking-[-0.04em] leading-[1.05] text-neutral-950 font-[var(--font-sora)]">
                Technology <br/>Built With <br/>Purpose.
              </h2>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid w-full">
              {capabilities.map((cap, i) => (
                <Link key={cap.title} href={cap.href}>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="group relative flex items-center justify-between py-8 md:py-12 border-b border-neutral-200/60 cursor-pointer"
                  >
                    <div className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#E87830] group-hover:w-full transition-all duration-700" />
                    
                    <div className="flex items-start gap-6 md:gap-12">
                      <span className="text-[16px] font-semibold font-mono text-neutral-400 pt-1 group-hover:text-[#E87830] transition-colors">
                        0{i + 1}
                      </span>
                      <div className="flex flex-col gap-2">
                        <h4 className="text-[30px] font-bold text-neutral-950 font-[var(--font-sora)]">
                          {cap.title}
                        </h4>
                        <p className="text-[17px] leading-8 text-neutral-500 font-[var(--font-inter)] max-w-sm">
                          {cap.desc}
                        </p>
                      </div>
                    </div>

                    <div className="hidden md:flex opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#E87830]">
                      <div className="w-8 h-8 rounded-full border border-[#E87830] flex items-center justify-center">
                        <span className="text-lg">↗</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Full Width Final Section */}
          <div className="lg:col-span-12">
            <div className="mt-32 border-t border-neutral-200 pt-20 flex flex-col items-center justify-center text-center">
              <p className="max-w-5xl mx-auto text-[34px] md:text-[42px] font-medium text-neutral-950 font-[var(--font-sora)] leading-tight">
                Building secure, scalable and future-ready technology for organizations that value long-term growth.
              </p>
              <div className="mt-10 w-full flex items-center justify-center gap-6 mx-auto">
                <div className="w-20 h-px bg-neutral-900" />
                <span className="text-[15px] md:text-[16px] font-semibold uppercase tracking-[0.2em] text-[#E87830] font-[var(--font-inter)]">
                  Technology with intent.
                </span>
                <div className="w-20 h-px bg-neutral-900" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}