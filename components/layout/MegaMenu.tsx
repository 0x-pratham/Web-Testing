"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/data/services";

export default function MegaMenu() {
  // Category data mapping matching elite enterprise language
  const designServices = services.filter((s) => s.category === "build").slice(0, 3);
  const buildServices = services.filter((s) => s.category === "run").slice(0, 3);
  const scaleServices = services.filter((s) => s.category === "more").slice(0, 3);

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block pt-4 z-50">
      {/* Invisible Hover Bridge */}
      <div className="absolute top-[-20px] left-0 right-0 h-[20px]" />

      <motion.div
        initial={{ opacity: 0, filter: "blur(6px)", scale: 0.98 }}
        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="
          w-[720px] 
          bg-[#FFFCFA]/95
          backdrop-blur-16
          rounded-[18px]
          border 
          border-[#ECE8E3]
          shadow-[0_18px_45px_rgba(0,0,0,0.06)]
          p-6
          overflow-hidden
        "
      >
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-[18px] font-semibold text-[#111] leading-tight">
            Our Expertise
          </h3>
          <p className="text-[13px] text-[#6B6B6B] mt-1 font-normal">
            Crafting software that businesses rely on.
          </p>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-[#111]/[0.08] mb-5" />

        {/* Grid System */}
        <div className="grid grid-cols-12 gap-6">
          
          {/* Categories Left Block */}
          <div className="col-span-8 grid grid-cols-3 gap-5">
            
            {/* Design Workflow Pillar */}
            <div>
              <div className="text-[11px] font-bold tracking-wider text-[#111] uppercase mb-2 px-1">
                Design
              </div>
              <div className="space-y-1">
                {designServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group/item flex items-center justify-between p-3 py-2 rounded-[6px] transition-colors duration-180 hover:bg-[#FFF6EF]"
                  >
                    <div className="flex items-center gap-2">
                      {/* Premium Tiny Square Geometric Marker */}
                      <div className="w-1.5 h-1.5 rounded-sm bg-neutral-300 transition-colors duration-180 group-hover/item:bg-[#E87830]" />
                      <span className="text-[13px] font-medium text-[#111] transition-all duration-180 group-hover/item:font-semibold">
                        {service.title}
                      </span>
                    </div>
                    <span className="text-[12px] opacity-0 text-[#E87830] transition-all duration-120 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0">
                      ↗
                    </span>
                  </Link>
                ))}
                <Link href="/services" className="block text-[12px] font-semibold text-[#E87830] hover:underline pl-3.5 pt-1">
                  View all →
                </Link>
              </div>
            </div>

            {/* Build Workflow Pillar */}
            <div>
              <div className="text-[11px] font-bold tracking-wider text-[#111] uppercase mb-2 px-1">
                Build
              </div>
              <div className="space-y-1">
                {buildServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group/item flex items-center justify-between p-3 py-2 rounded-[6px] transition-colors duration-180 hover:bg-[#FFF6EF]"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-sm bg-neutral-300 transition-colors duration-180 group-hover/item:bg-[#E87830]" />
                      <span className="text-[13px] font-medium text-[#111] transition-all duration-180 group-hover/item:font-semibold">
                        {service.title}
                      </span>
                    </div>
                    <span className="text-[12px] opacity-0 text-[#E87830] transition-all duration-120 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0">
                      ↗
                    </span>
                  </Link>
                ))}
                <Link href="/services" className="block text-[12px] font-semibold text-[#E87830] hover:underline pl-3.5 pt-1">
                  View all →
                </Link>
              </div>
            </div>

            {/* Scale Workflow Pillar */}
            <div>
              <div className="text-[11px] font-bold tracking-wider text-[#111] uppercase mb-2 px-1">
                Scale
              </div>
              <div className="space-y-1">
                {scaleServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group/item flex items-center justify-between p-3 py-2 rounded-[6px] transition-colors duration-180 hover:bg-[#FFF6EF]"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-sm bg-neutral-300 transition-colors duration-180 group-hover/item:bg-[#E87830]" />
                      <span className="text-[13px] font-medium text-[#111] transition-all duration-180 group-hover/item:font-semibold">
                        {service.title}
                      </span>
                    </div>
                    <span className="text-[12px] opacity-0 text-[#E87830] transition-all duration-120 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0">
                      ↗
                    </span>
                  </Link>
                ))}
                <Link href="/services" className="block text-[12px] font-semibold text-[#E87830] hover:underline pl-3.5 pt-1">
                  View all →
                </Link>
              </div>
            </div>

          </div>

          {/* Right Static Trust Panel Block */}
          <div className="col-span-4 border-l border-[#ECE8E3] pl-5 flex flex-col justify-center">
            <p className="text-[12px] text-[#6B6B6B] font-normal leading-relaxed">
              Selected by startups and growing businesses to build secure, high-performance software.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-5 pt-4 border-t border-[#111]/[0.08] flex items-center justify-between">
          <Link 
            href="/contact" 
            className="group/btn inline-flex items-center gap-1 text-[13px] font-semibold text-[#111] transition-colors duration-150 hover:text-[#E87830]"
          >
            <span>Let's discuss your project</span>
            <span className="transition-transform duration-120 ease-out group-hover/btn:translate-x-1">→</span>
          </Link>
          
          <div className="text-[11px] font-medium text-[#6B6B6B] bg-[#ECE8E3]/40 px-2 py-0.5 rounded-[4px]">
            15 Engineering Services
          </div>
        </div>

      </motion.div>
    </div>
  );
}