"use client";
import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import { Check } from "lucide-react";
import ServiceVisual from "./ServiceVisual";

export default function ServiceHero({ data, category, slug }: any) {
  return (
    <section className="bg-[#1A1714] text-white pt-28 sm:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E87830]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="order-last lg:order-first text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <span className="text-[#E87830] font-semibold tracking-[0.22em] uppercase text-[15px] md:text-[16px] mb-4 block">
              {category}
            </span>
            <h1 className="text-[42px] sm:text-[50px] md:text-[58px] lg:text-[68px] font-bold leading-[1.05] tracking-[-0.04em] mb-6 max-w-[12ch]">
              {data.title}
            </h1>
            <p className="text-[17px] md:text-[19px] leading-8 text-neutral-300 mb-8 max-w-[640px]">
              {data.subtitle}
            </p>
            <div className="w-full sm:w-auto mt-2">
              <Button href="/contact">Start Your Project</Button>
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 gap-y-3">
              {["Enterprise Ready", "Secure Architecture", "Scalable Solutions", "Long-term Support"].map(t => (
                <div key={t} className="flex items-center gap-3 text-[15px] font-medium text-neutral-300">
                  <Check size={18} className="text-[#E87830] shrink-0" /> {t}
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Visual Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center order-first lg:order-last w-full"
          >
            <div className="w-full max-w-[300px] sm:max-w-[360px] md:max-w-[460px] lg:max-w-[560px] min-h-[260px] sm:min-h-[320px] lg:min-h-[520px] flex items-center justify-center">
              <ServiceVisual slug={slug} />
            </div>
          </motion.div>
        </div>
        
        {/* Project Snapshot */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-white/5">
          {[ 
            {l: "Timeline", v: "6-12 Weeks"}, 
            {l: "Architecture", v: "Scalable"}, 
            {l: "Support", v: "24/7"}, 
            {l: "Delivery", v: "Enterprise"} 
          ].map(item => (
            <div key={item.l} className="text-center lg:text-left">
              <p className="text-[14px] text-neutral-500 mb-1">{item.l}</p>
              <p className="text-[18px] font-semibold text-white">{item.v}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}