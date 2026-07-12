// AllServicesGrid.tsx
"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { services } from "@/data/services";
import { useState } from "react";

export default function AllServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 140, damping: 22 }
    }
  };

  return (
    <section className="relative py-24 bg-[#FCFBF9] overflow-hidden">
      {/* Background Micro Structural Anchor Lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      <div className="mx-auto max-w-[1280px] px-6">
        
        {/* Studio-Grade Split Header block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-7">
            <h2 className="text-[42px] sm:text-[50px] md:text-[58px] font-bold tracking-tight text-neutral-950 leading-[1.1]">
              Technology Solutions
              <span className="text-neutral-400 font-normal"> Built for Business Growth.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[17px] md:text-[19px] text-neutral-500 leading-8 max-w-lg">
              We build secure, scalable and future-ready digital solutions that help businesses innovate, improve efficiency and achieve long-term growth.
            </p>
          </div>
        </div>

        {/* Premium Geometric Dot Matrix Layout Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-px bg-neutral-200/50 rounded-xl overflow-hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === idx;

            return (
              <motion.div
                key={service.slug}
                variants={cardVariants}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative bg-white flex flex-col h-full overflow-hidden"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="relative flex flex-col justify-between p-8 min-h-[380px] h-full w-full"
                >
                  {/* Luxury Ambient Shifter Fill */}
                  <div 
                    className={`absolute inset-0 bg-neutral-50/70 transition-transform duration-500 ease-out origin-top ${
                      isHovered ? "scale-y-100" : "scale-y-0"
                    }`}
                  />

                  {/* Top Segment Architecture */}
                  <div className="relative z-10 w-full">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-300 ${
                        isHovered 
                          ? "bg-white border-[#E87830]/20 shadow-sm" 
                          : "bg-neutral-50/60 border-neutral-100"
                      }`}>
                        <Icon className={`h-4 w-4 transition-colors duration-300 ${
                          isHovered ? "text-[#E87830]" : "text-neutral-500"
                        }`} />
                      </div>

                      {/* Minimal Diagonal Studio Indicator Key */}
                      <div className="overflow-hidden relative w-4 h-4">
                        <span className={`absolute inset-0 text-neutral-300 font-light text-sm transition-transform duration-300 ease-out ${
                          isHovered ? "translate-x-0 translate-y-0 text-[#E87830]" : "translate-x-2 -translate-y-2"
                        }`}>
                          ↗
                        </span>
                      </div>
                    </div>

                    {/* Service Main Content Metadata */}
                    <div className="space-y-2.5">
                      <h3 className="text-[26px] font-bold tracking-tight text-neutral-900 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-[15px] font-semibold text-[#E87830] tracking-wide">
                        {service.subtitle}
                      </p>
                      {/* Dynamic Clean Service Description Layer */}
                      {service.description && (
                        <p className="text-[16px] leading-7 text-neutral-500 pt-1">
                          {service.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Bottom Segment Architecture */}
                  <div className="relative z-10 w-full mt-10">
                    {service.capabilities && service.capabilities.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {service.capabilities.slice(0, 3).map((item) => (
                          <span
                            key={item}
                            className={`rounded-lg px-3 py-1.5 text-[13px] font-medium tracking-wide transition-all duration-300 border ${
                              isHovered 
                                ? "bg-white text-[#E87830] border-[#E87830]/20 shadow-sm" 
                                : "bg-white text-neutral-600 border-neutral-200"
                            }`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}