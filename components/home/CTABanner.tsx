"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";

export default function CTABanner() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const blueprintRef = useRef<HTMLDivElement>(null);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, { stiffness: 150, damping: 15 });
  const springTiltY = useSpring(tiltY, { stiffness: 150, damping: 15 });
  
  const rotateX = useTransform(springTiltY, [-100, 100], [1, -1]);
  const rotateY = useTransform(springTiltX, [-100, 100], [-1, 1]);

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const { left, top } = sectionRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    };

    const handleBlueprintTilt = (e: MouseEvent) => {
      if (!blueprintRef.current) return;
      const rect = blueprintRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      tiltX.set(x);
      tiltY.set(y);
    };

    const resetBlueprintTilt = () => {
      tiltX.set(0);
      tiltY.set(0);
    };

    const currentSection = sectionRef.current;
    const currentBlueprint = blueprintRef.current;

    if (currentSection) {
      currentSection.addEventListener("mousemove", handleMouseMove);
    }
    if (currentBlueprint) {
      currentBlueprint.addEventListener("mousemove", handleBlueprintTilt);
      currentBlueprint.addEventListener("mouseleave", resetBlueprintTilt);
    }

    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000);

    return () => {
      if (currentSection) currentSection.removeEventListener("mousemove", handleMouseMove);
      if (currentBlueprint) {
        currentBlueprint.removeEventListener("mousemove", handleBlueprintTilt);
        currentBlueprint.removeEventListener("mouseleave", resetBlueprintTilt);
      }
      clearInterval(stepInterval);
    };
  }, [mouseX, mouseY, tiltX, tiltY]);

  const backgroundLight = useMotionTemplate`radial-gradient(450px circle at ${mouseX}px ${mouseY}px, rgba(232, 120, 48, 0.04), transparent 80%)`;

  const STEPS = [
    { id: "01", title: "Requirement Analysis", desc: "Understanding your goals and business needs." },
    { id: "02", title: "Planning & Strategy", desc: "Creating a clear roadmap and architecture." },
    { id: "03", title: "Development & Testing", desc: "Building secure, scalable software." },
    { id: "04", title: "Launch & Support", desc: "Deployment, optimization and ongoing support." },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden border-t border-neutral-800/60 bg-[#171412] py-24 text-white select-none"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff00.8_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: backgroundLight }} />

      <Container>
        <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          <div className="space-y-6 lg:col-span-6">
            <h2 className="section-title text-[42px] font-bold leading-[1.1] tracking-tight text-white uppercase sm:text-[50px] md:text-[58px]">
              Ready to build <br />
              <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                beyond limits?
              </span>
            </h2>

            <p className="body-lg text-[17px] leading-relaxed text-neutral-400 tracking-tight md:text-[19px]">
              Let's architect digital products that perform. Partner with an elite engineering group committed to clean structures, robust execution, and transparent operations.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button href="/contact" variant="primary">
                Initiate Project <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
              <Link 
                href="/about" 
                className="text-[14px] uppercase tracking-widest text-neutral-400 transition-colors duration-200 hover:text-white"
              >
                Explore Capabilities
              </Link>
            </div>
          </div>

          <div className="flex w-full justify-end lg:col-span-6">
            <motion.div 
              ref={blueprintRef}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full max-w-lg rounded-lg border border-neutral-800 bg-[#1A1714] p-6 shadow-2xl transition-shadow duration-300 hover:shadow-[#E87830]/2"
            >
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff00.4_1px,transparent_1px),linear-gradient(to_bottom,#ffffff00.4_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

              <header className="relative z-10 mb-5 flex items-center justify-between border-b border-neutral-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-sm bg-[#E87830]/80" />
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-neutral-400">PROJECT DELIVERY</span>
                </div>
              </header>

              <div className="relative z-10 flex-grow py-1">
                <div className="relative flex flex-col space-y-4">
                  <div className="absolute bottom-2 left-[7px] top-2 w-px bg-neutral-800/80" />

                  <motion.div 
                    className="absolute left-[7px] top-2 w-px bg-[#E87830]"
                    initial={{ height: "0%" }}
                    animate={{ height: `${(activeStep / (STEPS.length - 1)) * 92}%` }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />

                  {STEPS.map((step, idx) => {
                    const isCurrent = activeStep === idx;
                    return (
                      <article 
                        key={idx}
                        className="group/item flex cursor-default select-none items-start gap-4 transition-all duration-300"
                      >
                        <div className="relative mt-1 flex items-center justify-center">
                          <div className={`z-10 flex h-3.5 w-3.5 items-center justify-center rounded-full border transition-all duration-300 ${
                            isCurrent 
                              ? "border-[#E87830] bg-[#1A1714] scale-105" 
                              : "border-neutral-800 bg-[#1A1714] group-hover/item:border-neutral-700"
                          }`}>
                            <div className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                              isCurrent ? "bg-[#E87830]" : "bg-neutral-800 group-hover/item:bg-neutral-700"
                            }`} />
                          </div>
                          {isCurrent && (
                            <span className="absolute z-0 inline-flex h-full w-full animate-ping rounded-full bg-[#E87830]/20 opacity-70" />
                          )}
                        </div>

                        <div className="flex min-w-0 flex-grow flex-col justify-center">
                          <div className="flex items-center justify-between">
                            <h4 className={`text-[14px] font-bold tracking-wider transition-colors duration-300 ${
                              isCurrent ? "text-[#E87830]" : "text-neutral-400 group-hover/item:text-neutral-300"
                            }`}>
                              {step.title}
                            </h4>
                            <span className={`text-[11px] transition-colors duration-300 ${
                              isCurrent ? "text-[#E87830]/60" : "text-neutral-600"
                            }`}>
                              {step.id}
                            </span>
                          </div>
                          <p className="body mt-0.5 min-h-[16px] text-[15px] leading-normal text-neutral-500 tracking-tight">
                            {step.desc}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>

              <footer className="relative z-10 mt-5 flex w-full items-center justify-between border-t border-neutral-800/80 pt-4 font-mono text-[12px] text-neutral-500">
                <span>EST. 2026</span>
                <span className="text-neutral-700">•</span>
                <span>PUNE, MAHARASHTRA, INDIA</span>
              </footer>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}