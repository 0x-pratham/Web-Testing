"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

const PROCESS_DATA = [
  {
    id: "understand",
    title: "Understand",
    phrase: "Understand the problem before writing code.",
    desc: "We understand your business, not just your requirements.",
    outcome: "Clear project roadmap",
    timeline: "1–2 Weeks",
    deliverables: ["Product Roadmap", "Scope Definition", "User Flows"],
    expectedOutcome: "Alignment on clear engineering goals without the guesswork.",
    svgAnimation: (
      <svg viewBox="0 0 100 30" className="h-auto w-24 stroke-[1] stroke-current fill-none text-[#E87830]">
        <path d="M10 15 H90" strokeDasharray="2 2" opacity="0.3" />
        <motion.circle 
          cx="10" cy="15" r="4" 
          animate={{ r: [4, 6, 4] }}
          transition={{ repeat: Infinity, duration: 2 }}
          fill="currentColor" 
          fillOpacity="0.1" 
        />
        <motion.path 
          d="M10 15 Q 50 5, 90 15" 
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <circle cx="90" cy="15" r="3" fill="currentColor" />
      </svg>
    )
  },
  {
    id: "architect",
    title: "Architect",
    phrase: "Validate design decisions early.",
    desc: "Technical decisions made precisely before development begins.",
    outcome: "Technical blueprint",
    timeline: "1–2 Weeks",
    deliverables: ["System Architecture", "Database Schema", "UI/UX Wireframes"],
    expectedOutcome: "A complete bulletproof technical architecture blueprint.",
    svgAnimation: (
      <svg viewBox="0 0 100 30" className="h-auto w-24 stroke-[1] stroke-current fill-none text-[#E87830]">
        <rect x="10" y="5" width="20" height="20" strokeDasharray="1 1" />
        <rect x="70" y="5" width="20" height="20" strokeDasharray="1 1" />
        <motion.path 
          d="M30 15 H70" 
          initial={{ strokeDasharray: "4 4", strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -20 }}
          transition={{ repeat: Infinity, ease: "linear", duration: 2 }}
        />
      </svg>
    )
  },
  {
    id: "engineer",
    title: "Engineer",
    phrase: "Ship small. Improve fast.",
    desc: "Clean, scalable implementation using the modern high-performance stacks.",
    outcome: "Working software",
    timeline: "2–4 Weeks",
    deliverables: ["Production Codebase", "API Integration", "Automated Tests"],
    expectedOutcome: "Production-ready code deployed to live staging environment.",
    svgAnimation: (
      <svg viewBox="0 0 100 30" className="h-auto w-24 stroke-[1] stroke-current fill-none text-[#E87830]">
        <motion.path 
          d="M10 22 L25 8 L40 22 L55 8 L70 22 L85 8" 
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />
      </svg>
    )
  },
  {
    id: "optimize",
    title: "Optimize",
    phrase: "Continuous monitoring and long-term scaling.",
    desc: "Continuous system refinement and data-driven product updates.",
    outcome: "Continuous improvements",
    timeline: "Ongoing",
    deliverables: ["Performance Audits", "Feature Iterations", "Security Patches"],
    expectedOutcome: "A platform that stays resilient, fast, and secure as you scale.",
    svgAnimation: (
      <svg viewBox="0 0 100 30" className="h-auto w-24 stroke-[1] stroke-current fill-none text-[#E87830]">
        <motion.path 
          d="M10 25 Q 30 25, 50 15 T 90 5" 
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <motion.circle 
          cx="90" cy="5" r="2.5" 
          fill="currentColor"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </svg>
    )
  }
];

const METRICS_DATA = [
  { label: "Typical Timeline", value: "2–8 Weeks" },
  { label: "Projects Delivered", value: "50+" },
  { label: "Support", value: "Lifetime" }
];

export default function ProcessSection() {
  return (
    <Section className="relative overflow-hidden border-b border-neutral-100 bg-white pb-28 pt-24">
      <Container>
        <div className="mb-20 max-w-xl select-none">
          <h2 className="section-title font-serif text-[42px] font-bold leading-[1.1] tracking-[-0.03em] text-neutral-900 sm:text-[50px] md:text-[58px]">
            Our Process
          </h2>
          <p className="body-lg mt-4 font-sans text-[17px] text-[#5A5A5A] md:text-[19px]">
            Built around clarity, not complexity.
          </p>
        </div>

        <div className="relative flex w-full flex-col divide-y divide-neutral-200/60 border-t border-neutral-200/60">
          {PROCESS_DATA.map((step) => (
            <article 
              key={step.id} 
              className="group relative grid items-start gap-8 px-4 py-12 transition-colors duration-300 hover:bg-[#FCFAF8]/50 lg:grid-cols-12"
            >
              <div className="flex items-center gap-3 lg:col-span-4">
                <span className="animate-pulse text-sm text-[#E87830]">●</span>
                <h3 className="card-title font-serif text-[24px] font-bold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-[#E87830] sm:text-[30px]">
                  {step.title}
                </h3>
                <span className="ml-auto font-sans text-xs text-neutral-400 lg:hidden">{step.timeline}</span>
              </div>

              <div className="space-y-4 lg:col-span-5">
                <div>
                  <span className="mb-2 block font-sans text-[12px] italic text-[#E87830]">
                    &ldquo;{step.phrase}&rdquo;
                  </span>
                  <p className="body mt-1 font-sans text-[16px] leading-relaxed text-[#5A5A5A] md:text-[17px]">
                    {step.desc}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <span className="mb-1.5 block font-sans text-[10px] uppercase tracking-wider text-neutral-400">
                      You'll Receive:
                    </span>
                    <ul className="space-y-1">
                      {step.deliverables.map((d, i) => (
                        <li key={i} className="flex items-center gap-1.5 font-sans text-[13px] font-medium text-neutral-700 md:text-[14px]">
                          <span className="text-neutral-300">&rarr;</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="mb-1.5 block font-sans text-[10px] uppercase tracking-wider text-neutral-400">
                      Outcome:
                    </span>
                    <span className="block font-sans text-sm font-medium text-neutral-800">{step.outcome}</span>
                    <p className="mt-1 font-sans text-[13px] leading-tight text-neutral-500">{step.expectedOutcome}</p>
                  </div>
                </div>
              </div>

              <div className="flex h-full min-h-[80px] flex-col items-end justify-between lg:col-span-3 lg:text-right">
                <span className="hidden rounded-sm bg-neutral-100 px-2 py-0.5 font-sans text-xs font-bold text-neutral-400 lg:block">{step.timeline}</span>
                <div className="mt-auto pt-4 lg:pt-0">
                  {step.svgAnimation}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 gap-8 border-t border-neutral-100 pt-12 text-center sm:grid-cols-3 sm:text-left">
          {METRICS_DATA.map((metric, index) => (
            <div key={index} className="flex flex-col gap-1">
              <span className="block font-sans text-[11px] uppercase tracking-widest text-neutral-400">
                {metric.label}
              </span>
              <span className="block font-serif text-[30px] font-bold tracking-tight text-neutral-900">
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col justify-between gap-6 border-t border-neutral-100 pt-10 sm:flex-row sm:items-center">
          <div>
            <h4 className="card-title font-serif text-[26px] font-bold tracking-tight text-neutral-900">
              Every great product starts with clarity.
            </h4>
          </div>
          
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center bg-neutral-900 px-5 py-3 font-sans text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#E87830]"
          >
            Talk to our engineers <span className="ml-2 text-sm">&rarr;</span>
          </a>
        </div>
      </Container>
    </Section>
  );
}