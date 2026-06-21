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
  const featured = services.find((s) => s.slug === "ai-ml");
  
  if (!featured) return null;

  const FeaturedIcon = featured.icon;

  const buildServices = services.filter((s) => s.category === "build" && s.slug !== "ai-ml");
  const runServices = services.filter((s) => s.category === "run");
  const enableServices = services.filter((s) => s.category === "more");

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

        {/* Dynamic Service Grid Matrix */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured Card Block */}
          <Link
            href={`/services/${featured.slug}`}
            className="
              relative
              overflow-hidden
              lg:col-span-3
              bg-gradient-to-br
              from-[#1A1714]
              to-[#2A2520]
              border
              border-white/10
              rounded-3xl
              text-white
              p-8 md:p-10
              min-h-[400px]
              flex
              flex-col
              justify-between
              group
              transition-all
              duration-500
              ease-[cubic-bezier(0.16,1,0.3,1)]
              hover:scale-[1.01]
              cursor-pointer
            "
          >
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#E87830]/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid md:grid-cols-[1.2fr_auto_0.8fr] gap-8 w-full items-start">
              <div>
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-white/5 w-fit rounded-xl border border-white/5">
                    <FeaturedIcon size={28} className="text-[#E87830]" />
                  </div>
                </div>

                <h3 className="mt-6 text-2xl md:text-3xl font-bold tracking-tight">
                  {featured.title}
                </h3>

                <p className="mt-3 text-sm md:text-base text-neutral-300 leading-relaxed max-w-xl">
                  Build intelligent systems that automate workflows, unlock insights and create measurable business impact.
                </p>

                <div className="mt-6 inline-flex rounded-full bg-white/10 px-3.5 py-1 text-xs font-medium tracking-wide text-neutral-200 backdrop-blur-sm border border-white/5">
                  Enterprise Ready • Automate Workflows
                </div>
              </div>

              <div className="hidden md:block w-px bg-white/10 self-stretch my-2" />

              {featured.capabilities && (
                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 self-stretch flex flex-col justify-center gap-4">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block border-b border-white/5 pb-2">
                    Core Capabilities Flow
                  </span>
                  <div className="flex flex-col gap-3">
                    {featured.capabilities.slice(0, 4).map((cap, i) => (
                      <div key={cap} className="flex items-center gap-3 text-xs text-neutral-200">
                        <span className="text-[10px] text-[#E87830] font-mono w-4">0{i + 1}</span>
                        <Check size={12} className="text-[#E87830] flex-shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative z-10 flex items-center gap-2 text-sm font-semibold mt-8 text-neutral-300 group-hover:text-white transition-colors duration-300">
              <span>Explore Solution</span>
              <ArrowRight
                size={16}
                className="
                  opacity-60
                  transition-all
                  duration-300
                  group-hover:opacity-100
                  group-hover:translate-x-1
                "
              />
            </div>
          </Link>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-16" />

        <div className="space-y-24">
          
          {/* BUILD CATEGORY */}
          {buildServices.length > 0 && (
            <div>
              <div className="mb-10">
                <span className="text-xs font-mono text-[#E87830]">
                  01
                </span>
                <h3 className="mt-2 text-3xl font-bold font-[var(--font-sora)] text-neutral-900">
                  Build
                </h3>
                <p className="mt-2 text-neutral-500 text-sm">
                  Engineering & Product Creation
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {buildServices.map((service, index) => {
                  const Icon = service.icon;
                  const displayIndex = String(index + 2).padStart(2, '0');
                  
                  // 🎯 Improvement #9: Premium Reveal Animation (opacity, y, scale)
                  return (
                    <motion.div
                      key={service.slug}
                      initial={{ opacity: 0, y: 30, scale: 0.98 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={`/services/${service.slug}`}
                        className="
                          group
                          bg-white
                          rounded-2xl
                          border
                          border-neutral-200/50
                          p-7 md:p-8
                          min-h-[280px]
                          flex
                          flex-col
                          justify-between
                          transition-all
                          duration-500
                          ease-[cubic-bezier(0.16,1,0.3,1)]
                          hover:scale-[1.01]
                          hover:border-[#E87830]/30
                          hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                          cursor-pointer
                        "
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-[#FAF6F2] border border-[#E87830]/10 w-fit rounded-xl transition-colors">
                              <Icon size={22} className="text-[#E87830]" />
                            </div>
                          </div>

                          <span className="text-xs font-mono text-neutral-300 block">{displayIndex}</span>

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
          )}

          {/* RUN CATEGORY */}
          {runServices.length > 0 && (
            <div>
              <div className="mb-10">
                <span className="text-xs font-mono text-[#E87830]">
                  02
                </span>
                <h3 className="mt-2 text-3xl font-bold font-[var(--font-sora)] text-neutral-900">
                  Run
                </h3>
                <p className="mt-2 text-neutral-500 text-sm">
                  Operations & Infrastructure
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {runServices.map((service, index) => {
                  const Icon = service.icon;
                  const displayIndex = String(buildServices.length + index + 2).padStart(2, '0');
                  
                  // 🎯 Improvement #9: Premium Reveal Animation (opacity, y, scale)
                  return (
                    <motion.div
                      key={service.slug}
                      initial={{ opacity: 0, y: 30, scale: 0.98 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={`/services/${service.slug}`}
                        className="
                          group
                          bg-white
                          rounded-2xl
                          border
                          border-neutral-200/50
                          p-7 md:p-8
                          min-h-[280px]
                          flex
                          flex-col
                          justify-between
                          transition-all
                          duration-500
                          ease-[cubic-bezier(0.16,1,0.3,1)]
                          hover:scale-[1.01]
                          hover:border-[#E87830]/30
                          hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                          cursor-pointer
                        "
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-[#FAF6F2] border border-[#E87830]/10 w-fit rounded-xl transition-colors">
                              <Icon size={22} className="text-[#E87830]" />
                            </div>
                          </div>

                          <span className="text-xs font-mono text-neutral-300 block">{displayIndex}</span>

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
          )}

          {/* GROW CATEGORY */}
          {enableServices.length > 0 && (
            <div>
              <div className="mb-10">
                <span className="text-xs font-mono text-[#E87830]">
                  03
                </span>
                <h3 className="mt-2 text-3xl font-bold font-[var(--font-sora)] text-neutral-900">
                  Grow
                </h3>
                <p className="mt-2 text-neutral-500 text-sm">
                  Strategic Acceleration & Scale
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {enableServices.map((service, index) => {
                  const Icon = service.icon;
                  const displayIndex = String(buildServices.length + runServices.length + index + 2).padStart(2, '0');
                  
                  // 🎯 Improvement #9: Premium Reveal Animation (opacity, y, scale)
                  return (
                    <motion.div
                      key={service.slug}
                      initial={{ opacity: 0, y: 30, scale: 0.98 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={`/services/${service.slug}`}
                        className="
                          group
                          bg-white
                          rounded-2xl
                          border
                          border-neutral-200/50
                          p-7 md:p-8
                          min-h-[280px]
                          flex
                          flex-col
                          justify-between
                          transition-all
                          duration-500
                          ease-[cubic-bezier(0.16,1,0.3,1)]
                          hover:scale-[1.01]
                          hover:border-[#E87830]/30
                          hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                          cursor-pointer
                        "
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-[#FAF6F2] border border-[#E87830]/10 w-fit rounded-xl transition-colors">
                              <Icon size={22} className="text-[#E87830]" />
                            </div>
                          </div>

                          <span className="text-xs font-mono text-neutral-300 block">{displayIndex}</span>

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
          )}

        </div>

        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold tracking-tight text-neutral-900 font-[var(--font-sora)]">
            Need a custom solution?
          </h3>
          <p className="mt-3 text-neutral-500 text-sm max-w-md mx-auto leading-relaxed">
            Let's discuss your goals and build something exceptional.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/contact">
              Start Your Project
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}