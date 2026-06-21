"use client";

import { Brain, Target, Handshake, ArrowRight } from "lucide-react";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import Button from "@/components/shared/Button";

// 🔴 Critical Issue #1, #3 & 🟡 #5: Differentiated Value Proposition Datastore with Outcomes and Icons
const reasoningItems = [
  {
    icon: Brain,
    title: "AI-Native Engineering",
    desc: "Build intelligent systems designed for automation and scale.",
    benefit: "Reduce manual effort and accelerate growth.",
  },
  {
    icon: Target,
    title: "Business-Focused Delivery",
    desc: "Every project aligns technology decisions with measurable business outcomes.",
    benefit: "Maximize return on engineering investment.",
  },
  {
    icon: Handshake,
    title: "End-to-End Partnership",
    desc: "From strategy and development to deployment and ongoing support.",
    benefit: "Eliminate fragmentation across vendors.",
  },
];

// 🟡 Important Issue #7: Measurable High-Credibility Trust Statistics
const performanceMetrics = [
  { value: "50+", label: "Projects Delivered" },
  { value: "10+", label: "Industries Served" },
  { value: "99%", label: "Client Commitment" },
  { value: "24/7", label: "Support Avail" },
];

export default function WhyCosmolix() {
  return (
    // 🟡 Important Issue #6: Premium Ambient Dark Gradient Canvas Theme
    <Section className="bg-gradient-to-br from-[#1A1714] to-[#25201C] text-white overflow-hidden relative border-b border-neutral-900">
      
      {/* Absolute Decorative Premium Subtle Glow Accent */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E87830]/5 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        {/* Header Block Framework */}
        <div className="max-w-4xl mb-16">
          <p className="uppercase tracking-[0.25em] text-[#E87830] text-xs font-semibold mb-4">
            WHY PARTNER WITH US
          </p>

          {/* 🟢 Enhancement #8: Strategic Global Identity Renaming */}
          <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-sora)] tracking-tight leading-[1.1]">
            Why Businesses Partner With Cosmolix
          </h2>

          {/* 🔴 Critical Issue #2: Contextual Authority Positioning Description Layer */}
          <p className="mt-6 max-w-3xl text-lg text-neutral-400 leading-relaxed">
            We combine software engineering, artificial intelligence, cloud expertise and cybersecurity to help organizations move faster, operate smarter and scale with confidence.
          </p>
        </div>

        {/* Dynamic Connected Solution Grid Matrix — 🔴 Critical Issue #4 & 🟢 Enhancement #9 */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {reasoningItems.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-sm
                  p-8
                  flex
                  flex-col
                  justify-between
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#E87830]/30
                  hover:bg-white/[0.07]
                "
              >
                <div>
                  {/* Luxury Ambient Icon Background Box */}
                  <div className="p-3 bg-white/5 w-fit rounded-xl border border-white/5 text-[#E87830] group-hover:bg-[#E87830]/10 transition-colors duration-300 mb-6">
                    <IconComponent size={22} strokeWidth={2} />
                  </div>

                  {/* Primary Messaging Core */}
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#E87830] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Separator Line Rule & Outcome Block (Critical Issue #3) */}
                <div className="mt-8 pt-5 border-t border-white/10">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 block mb-1">
                    Key Benefit
                  </span>
                  <p className="text-xs font-medium text-neutral-300 leading-normal tracking-tight">
                    {item.benefit}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* 🟡 Important Issue #7: High-Impact Measurable Performance Grid Row */}
        <div className="mt-20 pt-10 border-t border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {performanceMetrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-4xl md:text-5xl font-extrabold text-[#E87830] tracking-tight font-[var(--font-sora)]">
                {metric.value}
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-neutral-400 mt-2">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* 🟢 Enhancement #10: Interactive Inbound Conversion Panel At High-Trust Point */}
        <div className="mt-20 p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="max-w-xl">
            <h4 className="text-lg font-bold tracking-tight">
              Ready to build your next digital product?
            </h4>
            <p className="text-xs text-neutral-400 mt-1 leading-normal">
              Partner with an engineering squad equipped to translate system architectures into operational revenue growth metrics.
            </p>
          </div>
          {/* FIX: Wrapped inside a div with the custom styling and layout classes */}
          <div className="bg-white text-neutral-900 hover:bg-neutral-100 rounded-xl whitespace-nowrap transition-colors duration-300">
            <Button href="/contact">
              <span className="flex items-center gap-1.5 px-4 py-2">
                Start Your Project <ArrowRight size={14} strokeWidth={2.5} />
              </span>
            </Button>
          </div>
        </div>

      </Container>
    </Section>
  );
}