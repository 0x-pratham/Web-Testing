// FeaturedServices.tsx
"use client";

import { motion, Variants } from "framer-motion";
import Container from "@/components/shared/Container";
import { services } from "@/data/services";
import { useState } from "react";

export default function FeaturedServices() {
  const cybersecurityService = services.find((s) => s.slug === "cybersecurity");
  const cloudService = services.find((s) => s.slug === "cloud");
  const softwareService = services.find((s) => s.slug === "software");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 150, damping: 24 }
    }
  };

  const renderCard = (service: typeof services[0], isDark = false) => {
    if (!service) return null;
    const Icon = service.icon;
    const isHovered = hoveredCard === service.slug;

    return (
      <motion.div
        variants={cardVariants}
        onMouseEnter={() => setHoveredCard(service.slug)}
        onMouseLeave={() => setHoveredCard(null)}
        className="group relative flex flex-col h-full cursor-pointer select-none"
      >
        <div
          className={`relative flex flex-col justify-between overflow-hidden rounded-xl p-8 min-h-[320px] h-full w-full transition-all duration-300 ease-out border ${
            isDark
              ? "bg-[#120e0c] border-neutral-800/80"
              : "bg-white border-neutral-200/60"
          } ${
            isHovered 
              ? isDark 
                ? "border-neutral-700 shadow-[0_12px_40px_rgba(0,0,0,0.4)]" 
                : "border-neutral-300 shadow-[0_12px_40px_rgba(0,0,0,0.02)]"
              : ""
          }`}
        >
          {/* Handcrafted Elite Left-Border Activation Accent */}
          <div 
            className={`absolute left-0 top-0 bottom-0 w-[2px] bg-[#E87830] transition-transform duration-300 ease-out origin-top ${
              isHovered ? "scale-y-100" : "scale-y-0"
            }`}
          />

          <div className="relative z-10 flex flex-col h-full w-full justify-between items-start flex-1">
            {/* Top Block */}
            <div className="w-full">
              <div
                className={`mb-6 flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-300 ${
                  isDark ? "bg-neutral-800/50" : "bg-neutral-50"
                }`}
              >
                <Icon className={`h-4 w-4 transition-colors duration-300 ${
                  isHovered ? "text-[#E87830]" : isDark ? "text-neutral-400" : "text-neutral-600"
                }`} />
              </div>

              <div className="space-y-2">
                <h3 className={`text-lg font-bold tracking-tight ${
                  isDark ? "text-white" : "text-neutral-900"
                }`}>
                  {service.title}
                </h3>
                <p className={`text-xs md:text-sm leading-relaxed ${
                  isDark ? "text-neutral-400" : "text-neutral-500"
                }`}>
                  {service.description}
                </p>
              </div>
            </div>

            {/* Bottom Block */}
            <div className="w-full mt-8">
              {isDark ? (
                /* Specialized Flagship Grid details for Cybersecurity */
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-y-2">
                    {service.capabilities.slice(0, 3).map((capability) => (
                      <div key={capability} className="flex items-center gap-2 text-xs text-neutral-400">
                        <span className="h-1 w-1 rounded-full bg-[#E87830]" />
                        <span className="truncate">{capability}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">Benchmark</span>
                    <span className="text-xs font-mono text-[#E87830]">99.9% Secure</span>
                  </div>
                </div>
              ) : (
                /* Capabilities cleanly presented without interaction noise */
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {service.capabilities.slice(0, 3).map((capability) => (
                      <span
                        key={capability}
                        className={`rounded px-2 py-0.5 text-[11px] font-medium tracking-wide transition-colors duration-300 ${
                          isDark 
                            ? "bg-neutral-800 text-neutral-300" 
                            : "bg-neutral-50 text-neutral-600 border border-neutral-200/30"
                        }`}
                      >
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="relative py-20 md:py-24 bg-white overflow-hidden border-y border-neutral-100">
      {/* High-End Minimal Gradient Overlays */}
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-[#E87830]/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-[#E87830]/3 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Modern Studio-grade Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-16 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E87830]" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                Core Capabilities
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
              Engineering Excellence
              <span className="text-neutral-400 font-normal"> Built for Modern Businesses.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-1">
            <p className="text-xs md:text-sm text-neutral-500 leading-relaxed max-w-md">
              We combine engineering, cloud infrastructure and cybersecurity
              to help organizations build reliable digital products.
            </p>
          </div>
        </div>

        {/* 3-Column Clean Balanced Modular Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch"
        >
          {cybersecurityService && renderCard(cybersecurityService, true)}
          {cloudService && renderCard(cloudService, false)}
          {softwareService && renderCard(softwareService, false)}
        </motion.div>
      </Container>
    </section>
  );
}