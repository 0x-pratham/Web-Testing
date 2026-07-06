"use client";

import Link from "next/link";
import { motion, type Easing } from "framer-motion";
import { services } from "@/data/services";

// Option 2: Best practice - Reusable type-safe easing
const easeCustom: Easing = [0.16, 1, 0.3, 1];

export default function MegaMenu() {
  const designServices = services.filter((s) => s.category === "build").slice(0, 3);
  const buildServices = services.filter((s) => s.category === "run").slice(0, 3);
  const scaleServices = services.filter((s) => s.category === "more").slice(0, 3);

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block pt-4 z-50">
      <div className="absolute top-[-20px] left-0 right-0 h-[20px]" />

      <motion.div
        initial={{ opacity: 0, filter: "blur(6px)", scale: 0.98 }}
        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
        transition={{ duration: 0.22, ease: easeCustom }}
        className="w-[720px] bg-[#FFFCFA]/95 backdrop-blur-xl rounded-[24px] border border-[#ECE8E3] shadow-[0_18px_45px_rgba(0,0,0,0.06)] p-6 overflow-hidden"
      >
        {/* Header content remains same... */}
        <div className="mb-6">
          <h3 className="text-[18px] font-semibold text-[#111] leading-tight">Our Expertise</h3>
          <p className="text-[13px] text-[#6B6B6B] mt-1 font-normal">Crafting software that businesses rely on.</p>
        </div>

        <div className="h-[1px] w-full bg-[#111]/[0.08] mb-5" />

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8 grid grid-cols-3 gap-5">
            {/* Workflow Pillars */}
            {[
              { title: "Design", items: designServices },
              { title: "Build", items: buildServices },
              { title: "Scale", items: scaleServices },
            ].map((section) => (
              <div key={section.title}>
                <div className="text-[11px] font-bold tracking-wider text-[#111] uppercase mb-2 px-1">
                  {section.title}
                </div>
                <div className="space-y-1">
                  {section.items.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group/item flex items-center justify-between p-3 py-2 rounded-[6px] transition-colors duration-180 hover:bg-[#FFF6EF]"
                    >
                      <div className="flex items-center gap-2">
                        {/* Premium Left Accent line */}
                        <div className="w-[2px] h-3 rounded-full bg-neutral-300 transition-all duration-300 group-hover/item:bg-[#E87830]" />
                        <span className="text-[13px] font-medium text-[#111] group-hover/item:font-semibold">
                          {service.title}
                        </span>
                      </div>
                      <span className="text-[12px] opacity-0 text-[#E87830] transition-all duration-200 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0">
                        ↗
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Premium CTA Panel */}
          <div className="col-span-4 border-l border-[#ECE8E3] pl-5 flex flex-col justify-center gap-4">
             <div className="bg-[#FFF6EF] p-4 rounded-xl border border-[#E87830]/10">
                <p className="text-[12px] font-semibold text-[#111] mb-1">Book a Discovery Call</p>
                <p className="text-[11px] text-[#6B6B6B] leading-relaxed mb-3">15 mins • Response within 24h</p>
                <Link href="/contact" className="text-[12px] font-bold text-[#E87830] flex items-center gap-1">
                   Schedule now →
                </Link>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}