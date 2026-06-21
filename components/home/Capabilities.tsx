"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Cloud, Shield, Settings2, CheckCircle2, ArrowRight } from "lucide-react";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

// Refined Capability Datastore mapped exactly to requested enhancements
const capabilitiesList = [
  {
    num: "01",
    icon: Brain,
    title: "AI & Automation",
    desc: "Build intelligent systems and automate business operations.",
  },
  {
    num: "02",
    icon: Code2,
    title: "Software Engineering",
    desc: "Develop scalable applications and enterprise platforms.",
  },
  {
    num: "03",
    icon: Cloud,
    title: "Cloud Infrastructure",
    desc: "Design resilient cloud-native environments.",
  },
  {
    num: "04",
    icon: Shield,
    title: "Cybersecurity",
    desc: "Protect systems with security-first architecture.",
  },
  {
    num: "05",
    icon: Settings2,
    title: "DevOps",
    desc: "Accelerate delivery through automation and CI/CD.",
  },
  {
    num: "06",
    icon: CheckCircle2,
    title: "Quality Assurance",
    desc: "Ensure reliability through testing and validation.",
  },
];

export default function Capabilities() {
  return (
    // Section Background separation for visual distinction
    <Section className="bg-[#FCFAF8] border-b border-neutral-200/50">
      <Container>
        
        {/* Header Layout Framework */}
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.25em] text-[#E87830] text-xs font-semibold mb-4">
            CAPABILITIES
          </p>

          {/* Value Proposition Headline Upgrade */}
          <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-sora)] text-neutral-900 tracking-tight leading-[1.1]">
            Engineering The Foundations Of Modern Business
          </h2>

          {/* Luxury Section Description Bridge */}
          <p className="mt-5 text-lg text-neutral-600 font-normal leading-relaxed">
            We combine software engineering, AI, cloud infrastructure and cybersecurity expertise to help organizations build, launch and scale digital products with confidence.
          </p>
        </div>

        {/* Items-Stretch Grid Array to guarantee uniform card height boundaries */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 items-stretch">
          {capabilitiesList.map((item, idx) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                {/* Premium Hover Micro-Interactions & Consistent Layout Borders */}
                <div className="
                  group
                  relative
                  bg-white
                  p-8
                  h-full
                  flex
                  flex-col
                  justify-between
                  rounded-2xl
                  border
                  border-neutral-200/60
                  shadow-[0_2px_8px_rgba(0,0,0,0.01)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  hover:border-[#E87830]/20
                  cursor-pointer
                ">
                  <div>
                    {/* Header Matrix containing Numbering and Luxury Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 bg-neutral-50 rounded-xl text-[#E87830] group-hover:bg-[#E87830]/5 transition-colors duration-300">
                        <IconComponent size={22} strokeWidth={2} />
                      </div>
                      
                      {/* Subtle Luxury Number Positioning Token */}
                      <span className="text-xs font-mono font-bold tracking-wider text-neutral-300 group-hover:text-[#E87830]/40 transition-colors duration-300">
                        {item.num}
                      </span>
                    </div>

                    {/* Content Block — Layered Metadata Strategy */}
                    <h3 className="text-lg font-bold text-neutral-900 tracking-tight transition-colors duration-300 group-hover:text-neutral-950">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-neutral-500 mt-2.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Ultimate Enterprise Flow Indicator Arrow Hook */}
                  <div className="mt-8 pt-4 flex items-center gap-1.5 text-xs font-semibold text-neutral-400 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#E87830]">
                    <span>Learn More</span>
                    <ArrowRight size={13} strokeWidth={2.5} />
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </Section>
  );
}