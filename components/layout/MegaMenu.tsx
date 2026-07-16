"use client";

import Link from "next/link";
import { motion, type Easing } from "framer-motion";
import { services } from "@/data/services";

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
        role="menu"
        className="w-[720px] bg-[#FFFCFA]/95 backdrop-blur-xl rounded-[24px] border border-[#ECE8E3] shadow-[0_18px_45px_rgba(0,0,0,0.06)] p-6 overflow-hidden"
      >
        <div className="mb-6">
          <h3 className="section-title text-[18px] text-[#111] leading-tight">Our Services</h3>
          <p className="body-sm text-[#6B6B6B] mt-1">Explore the technologies and solutions we build for modern businesses.</p>
        </div>

        <div className="h-[1px] w-full bg-[#111]/[0.08] mb-5" />

        <div className="grid grid-cols-12 gap-6">
          <nav className="col-span-8 grid grid-cols-3 gap-5" aria-label="Services Navigation">
            {[
              { title: "Design", items: designServices },
              { title: "Build", items: buildServices },
              { title: "Scale", items: scaleServices },
            ].map((section) => (
              <div key={section.title}>
                <div className="body-sm font-bold tracking-wider text-[#111] uppercase mb-2 px-1">
                  {section.title}
                </div>
                <div className="space-y-1">
                  {section.items.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group/item flex items-center justify-between p-3 py-2 rounded-[6px] transition-colors duration-180 hover:bg-[#FFF6EF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87830]"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-[2px] h-3 rounded-full bg-neutral-300 transition-all duration-300 group-hover/item:bg-[#E87830]" />
                        <span className="body-sm font-medium text-[#111] group-hover/item:font-semibold">
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
          </nav>

          <div className="col-span-4 border-l border-[#ECE8E3] pl-5 flex flex-col justify-center gap-4">
             <div className="bg-[#FFF6EF] p-5 rounded-xl border border-[#E87830]/10 hover:border-[#E87830]/20 hover:shadow-md transition-all duration-300">
                <p className="body-sm font-bold text-[#111] mb-2">Explore Everything We Build</p>
                <p className="body-sm text-[#6B6B6B] leading-relaxed mb-4">Browse our complete portfolio of software, AI, cloud and cybersecurity services.</p>
                
                <Link 
                  href="/services" 
                  className="block w-full py-2 mb-3 text-center body-sm font-bold text-[#111] border border-[#111] rounded-[6px] hover:bg-[#111] hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#111]"
                >
                  View All Services →
                </Link>

                <div className="pt-2 border-t border-[#E87830]/10">
                  <p className="body-sm text-[#6B6B6B] mb-1">Need guidance?</p>
                  <Link href="/contact" className="body-sm font-bold text-[#E87830] flex items-center gap-1 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87830] rounded">
                    Talk to our team →
                  </Link>
                </div>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}