"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/shared/Container";

// 🔴 Critical Issue #1: High-positioning capability items focused on business transformation
const items = [
  "AI-Driven Solutions",
  "Cloud Native Architecture",
  "Security-First Engineering",
  "Enterprise Ready Delivery",
];

export default function TrustStrip() {
  return (
    <section className="relative border-y border-neutral-200/60 bg-[#FCFAF8]">
      {/* 🟢 Enhancement #8: Luxury Thin Gradient Accent on Top Boundary */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E87830]/40 to-transparent" />

      {/* 🟡 Important Issue #4: Expanded layout breathing space for luxury design weight */}
      <Container>
        <div className="py-8">
          
          {/* 🟡 Important Issue #6: Viewport-aware subtle reveal animation orchestrator */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center gap-6"
          >
            {/* 🔴 Critical Issue #3: High-credibility Context Intro Label */}
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Built For Modern Businesses
            </span>

            {/* 🔴 Critical Issue #2: Reconstructed structural high-hierarchy grid taxonomy layout */}
            <div className="
              flex
              flex-wrap
              justify-center
              items-center
              gap-x-10
              gap-y-4
              text-sm
              font-medium
              text-neutral-800
            ">
              {items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 group transition-colors duration-300 hover:text-neutral-950"
                >
                  {/* Premium customized check status badge layout */}
                  <CheckCircle2 
                    size={15} 
                    className="text-[#E87830] shrink-0 transition-transform duration-300 group-hover:scale-110" 
                    strokeWidth={2.5} 
                  />
                  <span className="tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}