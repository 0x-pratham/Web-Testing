"use client";

import { GraduationCap, Building2, Landmark } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionLabel from "@/components/shared/SectionLabel";

const industryItems = [
  {
    num: "01",
    title: "Education & EdTech",
    icon: GraduationCap,
    outcome: "Create engaging digital learning experiences, intelligent student services and scalable education platforms.",
    useCases: ["LMS Platforms", "AI Assistants", "Student Portals"],
  },
  {
    num: "02",
    title: "Enterprise Operations",
    icon: Building2,
    outcome: "Streamline operations, modernize systems and build technology that scales with growth.",
    useCases: ["Workflow Engines", "Cloud Migrations", "Legacy Modernization"],
  },
  {
    num: "03",
    title: "Government & Public Services",
    icon: Landmark,
    outcome: "Secure, compliant and citizen-focused digital transformation initiatives.",
    useCases: ["Compliant Portals", "Data Infrastructure", "Service Automation"],
  },
];

export default function Industries() {
  return (
    <Section className="bg-[#FCFAF8] border-b border-neutral-200/50">
      <Container>
        
        {/* Change #9: Better Section Width (max-w-3xl) */}
        <div className="mb-16 max-w-3xl">
          <SectionLabel>INDUSTRIES</SectionLabel>

          <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-sora)] text-neutral-900 tracking-tight mt-4">
            Industries We Empower
          </h2>
          
          <div className="max-w-2xl mt-6">
            <p className="text-lg text-neutral-600 leading-relaxed">
              We help organizations modernize operations, accelerate innovation and build scalable digital ecosystems tailored to their industry needs.
            </p>
          </div>
        </div>

        {/* Change #1: Balanced layout distribution */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
          {industryItems.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                key={index}
                className="h-full"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <div
                  className="
                    relative
                    overflow-hidden
                    bg-white
                    rounded-2xl
                    border
                    border-neutral-200/50
                    p-8
                    flex
                    flex-col
                    cursor-pointer
                    gap-10
                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    hover:-translate-y-[4px]
                    hover:border-[#E87830]/20
                    hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                    group
                    min-h-[420px]
                  "
                >
                  {/* Change #3: Premium Top Accent Line */}
                  <div
                    className="
                      absolute
                      top-0
                      left-0
                      right-0
                      h-[2px]
                      bg-gradient-to-r
                      from-[#E87830]
                      via-[#E87830]/40
                      to-transparent
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                      pointer-events-none
                    "
                  />

                  <div
                    className="
                      absolute
                      top-0
                      right-0
                      w-32
                      h-32
                      bg-[#E87830]/5
                      rounded-full
                      blur-3xl
                      pointer-events-none
                    "
                  />

                  <div className="relative z-10 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        {/* Change #4 & #8: Luxury Icon Container & Dynamic Micro-rotation */}
                        <div className="w-14 h-14 flex items-center justify-center bg-neutral-50 rounded-2xl text-[#E87830] border border-neutral-100 shadow-sm transition-all duration-300 group-hover:bg-[#E87830]/5 group-hover:rotate-[2deg]">
                          <IconComponent size={24} strokeWidth={2} />
                        </div>
                      </div>

                      <span className="text-xs font-mono text-[#E87830] block mb-1">
                        {item.num}
                      </span>

                      {/* Change #5: Unified typography hierarchy across all cards */}
                      <h3 className="font-bold text-neutral-900 text-[1.75rem] leading-tight tracking-[-0.03em] group-hover:text-[#E87830] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-neutral-500 mt-3">
                        {item.outcome}
                      </p>
                    </div>

                    {/* Change #2: Removed unbalanced Focus + Delivery block completely */}
                  </div>

                  {/* Change #7: Modernized Use Cases Tag Cloud Interface */}
                  <div className="mt-auto pt-6 border-t border-neutral-100/80 relative z-10">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-neutral-400 block mb-3">
                      Key Solutions
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.useCases.map((useCase, idx) => (
                        <div
                          key={idx}
                          className="text-xs font-medium text-neutral-600 rounded-full px-3 py-1 bg-neutral-50 border border-neutral-100/60 transition-colors group-hover:bg-white group-hover:border-[#E87830]/10 tracking-tight"
                        >
                          {useCase}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Change #10: Replaced with more confident, premium narrative statement */}
        <div className="mt-20 text-center max-w-xl mx-auto border-t border-neutral-200/40 pt-10">
          <p className="text-sm font-medium text-neutral-500 leading-relaxed tracking-tight">
            From education and enterprise operations to public sector transformation, we build technology that adapts to the needs of every organization.
          </p>
        </div>

      </Container>
    </Section>
  );
}