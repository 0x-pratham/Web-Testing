"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";

// Phase 1, 11 & 16: Humanized confidence items with real-world credibility instead of marketing buzzwords
const items = [
  "50+ Projects",
  "AI Engineering",
  "Cloud Infrastructure",
  "Security Testing",
];

export default function TrustStrip() {
  return (
    <section className="relative border-y border-neutral-200/60 bg-[#FCFAF8] overflow-hidden">
      {/* Phase 13: Micro Noise Texture Layer injection for premium organic feel */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZHRoPSI0IiBmaWxsPSIjMTExIi8+Cjwvc3ZnPg==')]" />

      <Container>
        {/* Phase 4 & 14: Compact padding & strict container width limits for an expensive look */}
        <div className="py-5 max-w-5xl mx-auto">
          
          {/* Phase 6 & 18: Pure elegant opacity fade with absolutely NO dramatic Y-axis translation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.3, ease: "linear" }}
            className="
              flex 
              flex-wrap 
              justify-center 
              items-center 
              gap-x-[18px] 
              md:gap-x-8 
              gap-y-2.5 
              text-[13px] 
              font-medium 
              text-neutral-500
            "
          >
            {items.map((item, index) => (
              <div 
                key={item} 
                className="flex items-center gap-x-[18px] md:gap-x-8 animate-none"
              >
                {/* Phase 8, 9, 10 & 15: Clean sentence case typography with static scaling and clean color-only hovers */}
                <span className="transition-colors duration-200 hover:text-neutral-950 cursor-default select-none tracking-tight">
                  {item}
                </span>
                
                {/* Phase 2 & 12: Premium minimalist diagonal slash divider inspired by high-end tech designs */}
                {index < items.length - 1 && (
                  <span className="text-neutral-300 font-light select-none pointer-events-none">
                    /
                  </span>
                )}
              </div>
            ))}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}