"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";

export default function ServiceProcess({ process }: { process: { phase: string; title: string; desc: string }[] }) {
  // Defensive fallback: agar process undefined hai, toh empty array use karega
  const processSteps = process ?? [];

  return (
    <section className="relative bg-white py-24">
      <Container>
        {/* Editorial Header */}
        <div className="mb-24 max-w-2xl">
          <span className="label mb-8 block uppercase text-[#E87830]">
            PROCESS
          </span>
          <h2 className="section-title mb-6 tracking-[-0.02em] text-neutral-900">
            How We Engineer<br />
            Every Project
          </h2>
          <p className="body-lg text-neutral-600">
            From discovery to deployment, every engagement follows a structured engineering process designed for transparency, quality, and long-term success.
          </p>
        </div>

        {/* Editorial Timeline */}
        <div className="relative flex flex-col gap-12 md:gap-0">
          {/* Progressive Connector Line */}
          <motion.div 
            className="absolute left-[19px] top-0 hidden h-full w-[1px] bg-neutral-200 md:block"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative grid grid-cols-1 items-start gap-8 md:grid-cols-[120px_1fr] md:py-16"
            >
              {/* Step Number */}
              <div className="relative z-10 flex items-center gap-8">
                <div className="flex h-10 w-10 items-center justify-center border border-neutral-300 font-mono text-[15px] text-neutral-900 transition-colors duration-500 group-hover:border-[#E87830] group-hover:text-[#E87830]">
                  0{i + 1}
                </div>
                {/* Horizontal line for mobile, active state indicator */}
                <div className="h-[1px] flex-1 bg-neutral-200 md:hidden" />
              </div>

              {/* Content */}
              <div className="pb-8 md:pb-0">
                <h3 className="card-title mb-4 text-neutral-900 transition-transform duration-500 group-hover:translate-x-2">
                  {step.title}
                </h3>
                <p className="body max-w-xl text-neutral-600 transition-colors duration-500 group-hover:text-neutral-800">
                  {step.desc}
                </p>
              </div>

              {/* Decorative Divider */}
              <div className="absolute bottom-0 left-0 hidden w-full border-b border-neutral-200 md:block" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}