"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import { services } from "@/data/services";

export default function FeaturedServices() {
  // Pulling specific slugs ensuring exact text content matches the dataset
  const cybersecurityService = services.find((s) => s.slug === "cybersecurity");
  const cloudService = services.find((s) => s.slug === "cloud");
  const softwareService = services.find((s) => s.slug === "software");

  const renderCard = (service: typeof services[0], colSpan: string, isDark = false) => {
    if (!service) return null;
    const Icon = service.icon;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-8 min-h-[410px] transition-all duration-500 hover:-translate-y-[2px] ${colSpan} ${
          isDark
            ? "border-[#E87830]/10 bg-[#181411] text-white hover:shadow-[0_25px_60px_rgba(0,0,0,0.06)]"
            : "border-neutral-200 bg-white hover:border-[#E87830]/20 hover:bg-[#FFFDFB] hover:shadow-[0_25px_60px_rgba(0,0,0,0.06)]"
        }`}
      >
        {/* Top Accent Gradient Line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E87830] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Subtle interior glow for the dark flagship card */}
        {isDark && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#E87830]/10 to-transparent pointer-events-none" />
        )}

        {/* Cloud Card Tiny Indicator */}
        {!isDark && service.slug === "cloud" && (
          <div className="absolute top-6 right-6">
            <div className="h-2 w-2 rounded-full bg-[#E87830]" />
          </div>
        )}

        <div className="relative z-10 flex flex-col h-full w-full">
          {/* Icon Container */}
          <div
            className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${
              isDark ? "bg-white/5" : "bg-[#FFF7F1]"
            }`}
          >
            <Icon className="h-6 w-6 text-[#E87830]" />
          </div>

          {/* Title */}
          <h3 className={`text-3xl font-bold tracking-[-0.04em] ${isDark ? "text-white" : "text-neutral-900"}`}>
            {service.title}
          </h3>

          {/* Description */}
          <p className={`mt-4 ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
            {service.description}
          </p>

          {/* Flagship Micro Detail for Cybersecurity */}
          {isDark && (
            <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E87830]">
              <span>Flagship Service</span>
            </div>
          )}

          {/* Conditional Layouts based on service type */}
          {isDark ? (
            /* Cybersecurity Enterprise Checklist Structure (Height Reduced) */
            <div className="mt-6 grid grid-cols-2 gap-y-2 gap-x-4">
              {service.capabilities.slice(0, 4).map((capability) => (
                <div key={capability} className="flex items-center gap-2 text-sm text-neutral-300">
                  <span className="text-[#E87830] font-medium">✓</span>
                  <span>{capability}</span>
                </div>
              ))}
            </div>
          ) : (
            /* Cloud and Software Pills/Capabilities */
            <div className="mt-8 flex flex-col flex-grow justify-end gap-4">
              <div className="flex flex-wrap gap-2">
                {service.capabilities.slice(0, 3).map((capability) => (
                  <span
                    key={capability}
                    className="rounded-full px-3 py-1 text-xs bg-neutral-100 text-neutral-600"
                  >
                    {capability}
                  </span>
                ))}
              </div>
              
              {/* Software Capability Row Anchored via mt-auto pt-4 */}
              {service.slug === "software" && (
                <div className="mt-auto pt-4 flex items-center gap-4 text-xs font-semibold tracking-wider text-neutral-400 uppercase border-t border-neutral-100">
                  <span>Build</span>
                  <span className="h-1 w-1 rounded-full bg-neutral-300" />
                  <span>Launch</span>
                  <span className="h-1 w-1 rounded-full bg-neutral-300" />
                  <span>Scale</span>
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <section className="pt-20 pb-24 relative">
      <Container>
        {/* Section Header Upgrade */}
        <div className="mb-16">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E87830]">
            FEATURED CAPABILITIES
          </span>

          <h2 className="mt-4 max-w-[850px] text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.05em] leading-[0.95] text-neutral-950">
            Technology Expertise
            <br className="sm:block hidden" />
            That Drives Growth.
          </h2>

          <p className="mt-5 max-w-2xl text-neutral-600 leading-relaxed">
            We combine engineering, cloud infrastructure and cybersecurity
            to help organizations build reliable digital products.
          </p>
        </div>

        {/* 12-Column Layout Shift with Alignment Fixed to items-stretch */}
        <div className="relative grid gap-6 lg:grid-cols-12 items-stretch">
          
          {/* Subtle Horizontal Connector Element */}
          <div
            className="hidden lg:block absolute left-1/2 top-1/2 -translate-y-1/2 h-px w-16 bg-gradient-to-r from-[#E87830]/20 to-transparent pointer-events-none z-0"
            style={{ transform: 'translate(-50%, -50%)' }}
          />

          {/* Flagship Highlight (Cybersecurity) */}
          {cybersecurityService && renderCard(cybersecurityService, "lg:col-span-6", true)}

          {/* Supporting Standard Highlight Cards */}
          {cloudService && renderCard(cloudService, "lg:col-span-3", false)}
          {softwareService && renderCard(softwareService, "lg:col-span-3", false)}
        </div>
      </Container>
    </section>
  );
}