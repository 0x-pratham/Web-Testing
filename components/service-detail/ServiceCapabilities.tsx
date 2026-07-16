"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/shared/Container";

interface Capability {
  title: string;
  description: string;
}

interface Props {
  capabilities: Capability[];
}

export default function ServiceCapabilities({ capabilities }: Props) {
  // Defensive fallback: agar capabilities undefined hai, toh empty array use karega
  const capabilityList = capabilities ?? [];

  return (
    <section className="relative bg-white py-24">
      <Container>
        {/* Editorial Header */}
        <div className="mb-24 max-w-2xl">
          <span className="label mb-8 block uppercase text-[#E87830]">
            Capabilities
          </span>
          <h2 className="section-title mb-4 tracking-[-0.02em] text-neutral-900">
            Engineering capabilities<br />
            designed for scalable,<br />
            modern businesses.
          </h2>
        </div>

        {/* Editorial Capability List */}
        <ol className="flex flex-col">
          {capabilityList.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border-t border-neutral-200 py-12 last:border-b"
            >
              <div className="grid items-start gap-8 md:grid-cols-[80px_1fr_40px]">
                {/* Capability Number */}
                <span className="font-mono text-[15px] text-neutral-400 transition-colors duration-300 group-hover:text-[#E87830] pt-1">
                  0{i + 1}
                </span>
                
                {/* Title & Description */}
                <motion.div
                  className="transition-transform duration-500 group-hover:translate-x-2"
                >
                  <h3 className="card-title mb-4 text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="body max-w-[580px] text-neutral-600 transition-colors duration-300 group-hover:text-neutral-800">
                    {item.description}
                  </p>
                </motion.div>

                {/* Arrow */}
                <div className="flex justify-end pt-1">
                  <ArrowUpRight 
                    className="text-neutral-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#E87830]" 
                    size={20} 
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              
              {/* GPU-Accelerated Divider */}
              <motion.div 
                className="absolute bottom-0 left-0 h-[1px] w-full origin-left bg-[#E87830] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}