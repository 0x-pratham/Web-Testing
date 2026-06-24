"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/data/services";

export default function AllServicesGrid() {
  return (
    <section className="py-24 bg-[#FCFAF8]">
      <div className="mx-auto max-w-[1280px] px-6">
        
        {/* Section Label */}
        <span className="text-xs uppercase tracking-[0.25em] text-[#E87830] font-semibold">
          All Services
        </span>

        {/* Enhanced Luxury Section Header */}
        <h2 className="mt-4 max-w-[850px] text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.06em] leading-[0.95] text-neutral-950">
          Technology Capabilities
          <br />
          Built Around Outcomes.
        </h2>

        {/* Premium Client-Focused Narrative Description Block */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
          From product engineering and cloud infrastructure to cybersecurity and AI, we deliver the expertise required to build modern digital experiences.
        </p>

        {/* Refined Luxury Grid Layout with Increased Gap Spacing */}
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex flex-col justify-between min-h-[300px] rounded-[32px] border border-transparent bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-[3px] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden"
                >
                  {/* Premium Ultra-Thin 1px Cosmolix Signature Top Accent Line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#E87830] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className="flex items-start justify-between w-full h-full">
                    <div className="flex flex-col h-full justify-between flex-grow pr-8">
                      <div>
                        {/* Premium Scaled Luxury Icon Block */}
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#FAF5F1] transition-transform duration-500 group-hover:scale-105">
                          <Icon className="h-6 w-6 text-[#E87830]" />
                        </div>

                        {/* Title - Refined Stronger Luxury Typographic Hierarchy */}
                        <h3 className="text-[1.6rem] font-semibold tracking-[-0.04em] leading-tight text-neutral-900">
                          {service.title}
                        </h3>

                        {/* Description - Premium Luxury Spacing Scales */}
                        <p className="mt-2 text-[15px] leading-7 text-neutral-600">
                          {service.subtitle}
                        </p>
                      </div>

                      {/* Premium Enterprise Elegant Bullet List Component */}
                      {service.capabilities && service.capabilities.length > 0 && (
                        <ul className="mt-6 space-y-2">
                          {service.capabilities.slice(0, 2).map((item) => (
                            <li
                              key={item}
                              className="flex items-center gap-2 text-sm text-neutral-600"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-[#E87830]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Premium Invisible-Until-Hover Action Arrow Button with Glide Interaction */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF7F1] text-[#E87830] transition-all duration-500 opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0">
                      <span className="transition-transform duration-500 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}