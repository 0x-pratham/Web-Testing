"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionLabel from "@/components/shared/SectionLabel";
import Button from "@/components/shared/Button";
import { services } from "@/data/services";

export default function ServicesGrid() {
  {/* Step 3: Fetch Cybersecurity and Cloud Featured items */}
  const featuredCyber = services.find(
    (s) => s.slug === "cyber-security" || s.slug === "cybersecurity"
  );
  
  const featuredCloud = services.find(
    (s) => s.slug === "cloud-devops" || s.slug === "cloud"
  );

  if (!featuredCyber || !featuredCloud) return null;

  const CyberIcon = featuredCyber.icon;
  const CloudIcon = featuredCloud.icon;

  {/* Step 5: Dynamically filter out the two premium featured assets to ensure a clean 6-service grid below */}
  const spotlightServices = services
    .filter((s) => s.slug !== featuredCyber.slug && s.slug !== featuredCloud.slug)
    .slice(0, 6);

  return (
    <Section className="bg-[#FCFAF8]">
      <Container>
        {/* Header Block Framework */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <SectionLabel>SERVICES</SectionLabel>
            <span className="text-xs font-mono font-semibold tracking-wider text-neutral-400 uppercase">
              {services.length} Specialized Service Areas
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-sora)] text-neutral-900 tracking-tight">
            Technology Built For Growth.
          </h2>

          <p className="mt-5 max-w-2xl text-lg text-neutral-600 leading-relaxed">
            From AI-powered applications and enterprise software to cloud infrastructure and cybersecurity, we help organizations build, launch and scale technology with confidence.
          </p>
        </div>

        {/* Step 2: Refactored container from 3 columns to a balanced 2 column layout layout */}
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* Featured Card 1: Cybersecurity — Premium Dark Theme Card */}
          <Link
            href={`/services/${featuredCyber.slug}`}
            className="
              relative
              overflow-hidden
              bg-gradient-to-br
              from-[#1A1714]
              to-[#2A2520]
              border
              border-white/10
              rounded-3xl
              text-white
              p-8 md:p-10
              min-h-[320px]
              flex
              flex-col
              justify-between
              group
              transition-all
              duration-500
              ease-[cubic-bezier(0.16,1,0.3,1)]
              hover:-translate-y-[2px]
              hover:shadow-[0_30px_80px_rgba(232,120,48,0.08)]
              cursor-pointer
            "
          >
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#E87830]/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid sm:grid-cols-[1.1fr_auto_0.9fr] gap-6 w-full items-start">
              <div>
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-white/5 w-fit rounded-xl border border-white/5">
                    <CyberIcon size={26} className="text-[#E87830]" />
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-bold tracking-tight">
                  {featuredCyber.title}
                </h3>

                <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                  {featuredCyber.description}
                </p>

                {/* Step 6: Targeted Cybersecurity Badge Array */}
                <div className="mt-6 inline-flex rounded-full bg-white/10 px-3.5 py-1 text-xs font-medium tracking-wide text-neutral-200 backdrop-blur-sm border border-white/5">
                  VAPT • Audits • Compliance
                </div>
              </div>

              <div className="hidden sm:block w-px bg-white/10 self-stretch my-2" />

              {featuredCyber.capabilities && (
                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 self-stretch flex flex-col justify-center gap-3">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block border-b border-white/5 pb-2">
                    Key Capabilities
                  </span>
                  <div className="flex flex-col gap-2.5">
                    {featuredCyber.capabilities.slice(0, 4).map((cap, i) => (
                      <div key={cap} className="flex items-center gap-2.5 text-xs text-neutral-200">
                        <span className="text-[10px] text-[#E87830] font-mono w-4">0{i + 1}</span>
                        <Check size={12} className="text-[#E87830] flex-shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative z-10 flex items-center gap-2 text-sm font-semibold mt-8 text-neutral-300 group-hover:text-white transition-colors duration-300">
              <span>Explore Solution</span>
              <ArrowRight size={16} className="opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
            </div>
          </Link>

          {/* Featured Card 2: Cloud & Infrastructure — Light Theme Card */}
          <Link
            href={`/services/${featuredCloud.slug}`}
            className="
              relative
              overflow-hidden
              bg-white
              border
              border-neutral-200/60
              rounded-3xl
              text-neutral-900
              p-8 md:p-10
              min-h-[320px]
              flex
              flex-col
              justify-between
              group
              transition-all
              duration-500
              ease-[cubic-bezier(0.16,1,0.3,1)]
              hover:-translate-y-[2px]
              hover:border-[#E87830]/30
              hover:shadow-[0_30px_80px_rgba(232,120,48,0.08)]
              cursor-pointer
            "
          >
            {/* Step 10: Copper accent top line on premium light featured card */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E87830] via-[#E87830]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#E87830]/5 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid sm:grid-cols-[1.1fr_auto_0.9fr] gap-6 w-full items-start">
              <div>
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-[#FAF6F2] border border-[#E87830]/10 w-fit rounded-xl">
                    <CloudIcon size={26} className="text-[#E87830]" />
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-bold tracking-tight font-[var(--font-sora)]">
                  {featuredCloud.title}
                </h3>

                <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
                  {featuredCloud.description}
                </p>

                {/* Step 7: Targeted Cloud Badge Array */}
                <div className="mt-6 inline-flex rounded-full bg-[#FAF6F2] border border-[#E87830]/10 px-3.5 py-1 text-xs font-medium tracking-wide text-[#E87830]">
                  Cloud Native • DevOps Ready
                </div>
              </div>

              <div className="hidden sm:block w-px bg-neutral-200/60 self-stretch my-2" />

              {featuredCloud.capabilities && (
                <div className="bg-neutral-50 border border-neutral-200/50 rounded-2xl p-5 self-stretch flex flex-col justify-center gap-3">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block border-b border-neutral-200/60 pb-2">
                    Key Capabilities
                  </span>
                  <div className="flex flex-col gap-2.5">
                    {featuredCloud.capabilities.slice(0, 4).map((cap, i) => (
                      <div key={cap} className="flex items-center gap-2.5 text-xs text-neutral-600">
                        <span className="text-[10px] text-[#E87830] font-mono w-4">0{i + 1}</span>
                        <Check size={12} className="text-[#E87830] flex-shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative z-10 flex items-center gap-2 text-sm font-semibold mt-8 text-neutral-600 group-hover:text-[#E87830] transition-colors duration-300">
              <span>Explore Solution</span>
              <ArrowRight size={16} className="opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
            </div>
          </Link>
        </div>

        {/* Step 9: Reconnected premium copper theme rhythm separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#E87830]/25 to-transparent my-20" />

        <div className="space-y-12">
          {/* Step 4 & 5: Clean 6-service pure functional matrix without placeholder nodes or custom blocks */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {spotlightServices.map((service, index) => {
              const Icon = service.icon;
              
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="
                      group
                      relative
                      overflow-hidden
                      bg-white
                      rounded-2xl
                      border
                      border-neutral-200/50
                      p-7 md:p-8
                      min-h-[240px]
                      flex
                      flex-col
                      justify-between
                      transition-all
                      duration-500
                      ease-[cubic-bezier(0.16,1,0.3,1)]
                      hover:-translate-y-[2px]
                      hover:border-[#E87830]/30
                      hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                      cursor-pointer
                    "
                  >
                    {/* Subtle premium copper accent edge layer */}
                    <div
                      className="
                        absolute
                        top-0
                        left-0
                        right-0
                        h-[2px]
                        bg-gradient-to-r
                        from-[#E87830]
                        via-[#E87830]/30
                        to-transparent
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-500
                      "
                    />

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-[#FAF6F2] border border-[#E87830]/10 w-fit rounded-xl transition-colors">
                          <Icon size={22} className="text-[#E87830]" />
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 mb-1.5">
                        <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-400">
                          {service.category || "Solution"}
                        </span>
                      </div>

                      <h4 className="mt-1 font-bold text-[1.35rem] leading-tight tracking-[-0.02em] text-neutral-900 group-hover:text-[#E87830] transition-colors">
                        {service.title}
                      </h4>

                      <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div>
                      <div className="mt-5 h-px bg-neutral-100 w-full" />

                      <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                        {service.benefits.slice(0, 2).map((benefit) => (
                          <span
                            key={benefit}
                            className="
                              text-xs
                              text-neutral-600
                              flex
                              items-center
                              gap-1.5
                            "
                          >
                            <Check size={12} className="text-[#E87830] flex-shrink-0" />
                            {benefit}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#E87830]">
                        Learn More
                        <ArrowRight
                          size={15}
                          className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Step 10: Updated High-End Conversion Anchor */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold tracking-tight text-neutral-900 font-[var(--font-sora)]">
            Ready To Build Something Exceptional?
          </h3>
          <p className="mt-3 text-neutral-500 text-sm max-w-md mx-auto leading-relaxed">
            Let's discuss your next product, platform, cloud migration or security initiative.
          </p>
          <div className="mt-6 flex justify-center items-center gap-3">
            <Button href="/contact">
              Start a Project
            </Button>
            <Button href="/services" variant="secondary">
              Explore Services
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}