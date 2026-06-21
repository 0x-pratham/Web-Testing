"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";

export default function CTABanner() {
  return (
    <>
      {/* Expert-Level Change: Subtle visual transition separator line */}
      <div className="h-px bg-gradient-to-r from-transparent via-neutral-200/40 to-transparent" />

      {/* Change #3: Reduced Section Padding for a tighter, high-end presentation */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1A1714] via-[#251E19] to-[#7A3206] py-16 md:py-20">
        
        {/* Change #4: Shrunk dimensions and lowered opacity to make the glow almost invisible */}
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="w-[240px] h-[240px] rounded-full bg-[#E87830]/5 blur-[100px]" />
        </div>

        {/* FIX: Removed className from Container */}
        <Container>
          {/* FIX: Merged 'relative z-10' here so it safely sits above the absolute glow backdrop */}
          <motion.div 
            className="relative z-10 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {/* Change #1 & #2: Removed third headline line and reduced typography sizing */}
            <h2 className="max-w-3xl mx-auto text-3xl md:text-5xl font-bold tracking-[-0.05em] leading-[0.92] font-[var(--font-sora)] text-white">
              Build Faster.
              <br />
              Scale Smarter.
            </h2>

            {/* Change #6: Tightened description container block width */}
            <p className="mt-6 max-w-lg mx-auto text-base text-neutral-300/90 leading-relaxed tracking-tight">
              From ambitious startups to growing enterprises, we help teams design, build and scale digital products that create measurable business impact.
            </p>

            {/* Change #5: Re-balanced button hierarchy with a subtle transparent-to-tinted secondary CTA */}
            {/* FIX: Wrapped buttons to isolate layout classes from the Button component's strict types */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <div className="w-full sm:w-auto">
                <Button href="/contact">
                  Start Your Project
                </Button>
              </div>
              
              <div className="w-full sm:w-auto">
                <Button href="/services" variant="secondary">
                  Explore Services
                </Button>
              </div>
            </div>

            {/* Change #7: Subdued text color to text-neutral-500 for softer emphasis */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs text-neutral-500 font-medium tracking-tight">
              <span className="flex items-center gap-2">
                <span className="text-[#E87830]">✓</span> Free Consultation
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#E87830]">✓</span> Tailored Strategy
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#E87830]">✓</span> No Obligation
              </span>
            </div>

          </motion.div>
        </Container>
      </section>
    </>
  );
}