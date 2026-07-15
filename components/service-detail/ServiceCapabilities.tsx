"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/shared/Container";

export default function ServiceCapabilities({ capabilities }: { capabilities: string[] }) {
  const descriptions: Record<string, string> = {
    "Cloud Architecture": "Build cloud-native systems that remain reliable, secure, and easy to scale as your business grows.",
    "Cyber Security": "Protect your digital infrastructure through security-first engineering and continuous monitoring.",
    "AI Integration": "Introduce practical AI into your existing workflows to improve efficiency without adding unnecessary complexity.",
    "Infrastructure": "Design deployment pipelines and systems that remain stable, maintainable, and efficient over time."
  };

  return (
    <section className="py-24 bg-white relative">
      <Container>
        {/* Editorial Header */}
        <div className="mb-24 max-w-2xl">
          <span className="block text-[12px] font-medium text-neutral-500 tracking-[0.2em] uppercase mb-8">
            Capabilities
          </span>
          <h2 className="text-[40px] md:text-[52px] leading-[1.1] text-neutral-900 tracking-[-0.02em] mb-4">
            Engineering capabilities<br />
            designed for scalable,<br />
            modern businesses.
          </h2>
        </div>

        {/* Editorial Capability List */}
        <div className="flex flex-col">
          {capabilities.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group py-12 border-b border-neutral-200 last:border-b-0 relative overflow-hidden"
            >
              <div className="grid md:grid-cols-[80px_1fr_40px] items-start gap-8">
                {/* Index - Using Body Font */}
                <div className="text-neutral-400 group-hover:text-[#E87830] transition-colors duration-300 font-mono text-[13px] tracking-wider pt-1">
                  0{i + 1}
                </div>
                
                {/* Title & Description */}
                <div>
                  <h3 className="text-[28px] md:text-[32px] font-normal text-neutral-900 mb-4">
                    {item}
                  </h3>
                  <p className="text-[17px] text-neutral-600 max-w-[580px] leading-[1.8]">
                    {descriptions[item] || "A dedicated engineering focus on building what your business needs to succeed."}
                  </p>
                </div>

                {/* Subtle Arrow */}
                <div className="flex justify-end pt-1">
                  <ArrowUpRight 
                    className="text-neutral-300 group-hover:text-[#E87830] transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                    size={20} 
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              
              {/* Subtle Animated Divider */}
              <motion.div 
                className="absolute bottom-0 left-0 h-[0.5px] bg-[#E87830]/30"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}