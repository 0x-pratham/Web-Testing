"use client";
import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import { Check } from "lucide-react";
import ServiceVisual from "./ServiceVisual";

export default function ServiceHero({ data, category, slug }: any) {
  return (
    <section className="bg-[#1A1714] text-white pt-32 pb-24 relative overflow-hidden">
      {/* Subtle Ambient Light */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E87830]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content */}
          <div className="order-last lg:order-first flex flex-col items-start text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[48px] sm:text-[56px] lg:text-[72px] font-bold leading-[1] tracking-[-0.04em] mb-8"
            >
              {data.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[18px] md:text-[20px] leading-relaxed text-neutral-300 mb-10 max-w-[540px]"
            >
              {data.subtitle}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-start gap-3"
            >
              <Button href="/contact">Start Your Project</Button>
              <span className="text-[14px] text-neutral-500">Discuss your requirements with our engineering team.</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4"
            >
              {[
                "Enterprise Ready", "Secure Architecture", 
                "Scalable Solutions", "Long-term Support"
              ].map((text) => (
                <div key={text} className="flex items-center gap-3 text-[15px] text-neutral-300">
                  <Check size={16} className="text-[#E87830]" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Visual Showcase */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center order-first lg:order-last"
          >
            <div className="relative border border-white/10 p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
              <div className="w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px] flex items-center justify-center">
                <ServiceVisual slug={slug} />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Metric Strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 pt-8 grid grid-cols-2 md:grid-cols-4 gap-y-8"
        >
          {[ 
            {l: "Timeline", v: "6–12 Weeks"}, 
            {l: "Architecture", v: "Scalable"}, 
            {l: "Support", v: "24/7"}, 
            {l: "Delivery", v: "Enterprise"} 
          ].map((item) => (
            <div key={item.l} className="border-l border-white/10 pl-6">
              <p className="text-[18px] font-semibold text-white mb-0.5">{item.v}</p>
              <p className="text-[12px] text-neutral-500 uppercase tracking-widest">{item.l}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}