"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
    <section ref={containerRef} className="overflow-hidden bg-[#FCFAF8] py-24 text-neutral-900 selection:bg-[#E87830]/20 md:py-32">
      <Container>
        {/* Why Cosmolix Section */}
        <div className="mb-32 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <motion.div>
              <span className="label uppercase text-[#E87830]">
                Why Cosmolix
              </span>
              <h2 className="section-title mt-6 tracking-tight text-neutral-950">
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
                  <div className="absolute -left-[35px] md:-left-[45px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[#E87830] bg-[#FCFAF8]" aria-hidden="true" />
                  <p className="body-lg max-w-2xl text-neutral-700 font-light">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Engineering Excellence Section */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:flex lg:min-h-[720px] lg:items-center">
            <motion.div className="flex h-full w-full flex-col justify-center">
              <span className="label uppercase text-[#E87830]">
                ENGINEERING EXCELLENCE
              </span>
              <h2 className="section-title mt-6 tracking-tight text-neutral-950">
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
                    className="group relative flex cursor-pointer items-center justify-between border-b border-neutral-200/60 py-8 md:py-12"
                  >
                    <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#E87830] transition-all duration-700 group-hover:w-full" />
                    
                    <div className="flex items-start gap-6 md:gap-12">
                      <span className="pt-1 font-mono text-[16px] font-semibold text-neutral-400 transition-colors group-hover:text-[#E87830]">
                        0{i + 1}
                      </span>
                      <div className="flex flex-col gap-2">
                        <h4 className="card-title text-neutral-950">
                          {cap.title}
                        </h4>
                        <p className="body text-neutral-500 max-w-sm">
                          {cap.desc}
                        </p>
                      </div>
                    </div>

                    <div className="hidden text-[#E87830] opacity-0 transition-all duration-300 group-hover:opacity-100 md:flex">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E87830]">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Full Width Final Section */}
          <div className="lg:col-span-12">
            <div className="mt-32 flex flex-col items-center justify-center border-t border-neutral-200 pt-20 text-center">
              <p className="section-title mx-auto max-w-5xl text-neutral-950 leading-tight">
                Building secure, scalable and future-ready technology for organizations that value long-term growth.
              </p>
              <div className="mx-auto mt-10 flex w-full items-center justify-center gap-6">
                <div className="h-px w-20 bg-neutral-900" />
                <span className="label uppercase text-[#E87830]">
                  Technology with intent.
                </span>
                <div className="h-px w-20 bg-neutral-900" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}