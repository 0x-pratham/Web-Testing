"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";

export default function CTABanner() {
  // Mouse tracking for premium subtle pointer light
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // 3D Perspective Tilt Transform values for the blueprint container
  const blueprintRef = useRef<HTMLDivElement>(null);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, { stiffness: 150, damping: 15 });
  const springTiltY = useSpring(tiltY, { stiffness: 150, damping: 15 });
  
  const rotateX = useTransform(springTiltY, [-100, 100], [1, -1]);
  const rotateY = useTransform(springTiltX, [-100, 100], [-1, 1]);

  // Track the active step sequence matching the traveling orange data token
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

    // Highly stable loop interval mapping the production tracking lifecycle
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
    { id: "01", title: "ARCHITECTURAL BLUEPRINT", desc: "System design & protocol analysis" },
    { id: "02", title: "CORE DEPLOYMENT PHASE", desc: "Infrastructure isolation & compile" },
    { id: "03", title: "INTEGRITY & COMPLIANCE", desc: "Automated penetration vectors" },
    { id: "04", title: "GLOBAL EDGE PROVISION", desc: "CDN routing & live telemetry" },
  ];

  return (
    <>
      <section 
        ref={sectionRef}
        className="relative bg-[#171412] text-white border-t border-neutral-800/60 overflow-hidden py-24 select-none"
      >
        {/* Subtle engineering grid layer mapped for premium aesthetic continuity */}
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(#ffffff00.8_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none" />
        <motion.div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ background: backgroundLight }} />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Content Pitch Block */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-[#E87830]/30 bg-[#E87830]/5 font-mono text-[10px] tracking-widest text-[#E87830] uppercase">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E87830] opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#E87830]"></span>
                </span>
                Scale Confidently
              </div>

              <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-sora)] tracking-tight leading-[1.1] uppercase">
                Ready to build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
                  beyond limits?
                </span>
              </h2>

              <p className="text-[15px] text-neutral-400 font-normal leading-relaxed max-w-lg tracking-tight">
                Let's architect digital products that perform. Partner with an elite engineering group committed to clean structures, robust execution, and transparent operations.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button href="/contact" variant="primary">
                  Initiate Project ↗
                </Button>
                <Link 
                  href="/about" 
                  className="text-xs font-mono text-neutral-400 hover:text-white uppercase tracking-widest transition-colors duration-200"
                >
                  Explore Capabilities
                </Link>
              </div>
            </div>

            {/* Right Side: Ultra-Clean High-Fidelity Engineering Blueprint Box */}
            <div className="lg:col-span-6 w-full flex justify-end">
              <motion.div 
                ref={blueprintRef}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="w-full max-w-lg bg-[#1A1714] border border-neutral-800 p-6 rounded-lg relative overflow-hidden flex flex-col justify-between shadow-2xl transition-shadow duration-300 hover:shadow-[#E87830]/2"
              >
                {/* 1% Accent Engineering Internal Grid Wireframe */}
                <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff00.4_1px,transparent_1px),linear-gradient(to_bottom,#ffffff00.4_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40 -z-10" />

                {/* Header Module Meta Info */}
                <div className="flex items-center justify-between border-b border-neutral-800/80 pb-4 mb-5 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-sm bg-[#E87830]/80" />
                    <span className="text-[10px] font-mono text-neutral-400 tracking-wider font-semibold uppercase">SYSTEM_CORE_MATRIX</span>
                  </div>
                  <div className="text-[9px] font-mono text-neutral-500 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                    REV // 2026.PROD
                  </div>
                </div>

                {/* Central Adaptive Pipeline Matrix (The Stepper Grid) */}
                <div className="relative z-10 flex-grow py-1">
                  <div className="relative flex flex-col space-y-4">
                    {/* Continuous trace pipeline background vector path */}
                    <div className="absolute left-[7px] top-2 bottom-2 w-px bg-neutral-800/80" />

                    {/* Active highlighted live track stream data vector line */}
                    <motion.div 
                      className="absolute left-[7px] top-2 w-px bg-[#E87830]"
                      initial={{ height: "0%" }}
                      animate={{ height: `${(activeStep / (STEPS.length - 1)) * 92}%` }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />

                    {STEPS.map((step, idx) => {
                      const isCurrent = activeStep === idx;
                      return (
                        <div 
                          key={idx}
                          className="flex items-start gap-4 group/item cursor-default select-none transition-all duration-300"
                        >
                          {/* Left node pulse beacon tracker layout */}
                          <div className="relative flex items-center justify-center mt-1">
                            <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all duration-300 z-10 ${
                              isCurrent 
                                ? "bg-[#1A1714] border-[#E87830] scale-105" 
                                : "bg-[#1A1714] border-neutral-800 group-hover/item:border-neutral-700"
                            }`}>
                              <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                isCurrent ? "bg-[#E87830]" : "bg-neutral-800 group-hover/item:bg-neutral-700"
                              }`} />
                            </div>
                            {isCurrent && (
                              <span className="absolute animate-ping inline-flex h-full w-full rounded-full bg-[#E87830]/20 opacity-70 z-0" />
                            )}
                          </div>

                          {/* Technical Information Description Output Content Block */}
                          <div className="flex-grow flex flex-col justify-center min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className={`text-[11px] font-mono tracking-wider font-bold transition-colors duration-300 ${
                                isCurrent ? "text-[#E87830]" : "text-neutral-400 group-hover/item:text-neutral-300"
                              }`}>
                                {step.title}
                              </h4>
                              <span className={`text-[9px] font-mono transition-colors duration-300 ${
                                isCurrent ? "text-[#E87830]/60" : "text-neutral-600"
                              }`}>
                                {step.id}
                              </span>
                            </div>
                            <p className="text-[12px] text-neutral-500 font-sans mt-0.5 leading-normal tracking-tight min-h-[16px]">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Frame Stamp Production Footer Specifications */}
                <div className="border-t border-neutral-800/80 pt-4 mt-5 flex items-center justify-between font-mono text-[9px] text-neutral-500 relative z-10 w-full">
                  <span>ENG SINCE 2025</span>
                  <span className="text-neutral-700">•</span>
                  <span>MAHARASHTRA • INDIA</span>
                  <span className="text-neutral-700">•</span>
                  <span>LIVE OVERFLOW PROOF</span>
                </div>
              </motion.div>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}