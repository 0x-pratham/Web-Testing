"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import { Check } from "lucide-react";
import ServiceVisual from "./ServiceVisual";

interface ServiceData {
  title: string;
  subtitle: string;
}

interface ServiceHeroProps {
  data: ServiceData;
  category: string;
  slug: string;
}

export default function ServiceHero({ data, category, slug }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#1A1714] pt-32 pb-24 text-white">
      {/* Subtle Ambient Light */}
      <div
        className="pointer-events-none absolute top-0 right-0 h-[800px] w-[800px] rounded-full bg-[#E87830]/5 blur-[120px]"
        aria-hidden="true"
      />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Content */}
          <div className="order-last flex flex-col items-start text-left lg:order-first">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="label uppercase text-[#E87830]"
            >
              Enterprise Solution
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hero-title mt-6 mb-8 tracking-tight text-white"
            >
              {data.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="body-lg mb-10 max-w-[540px] text-neutral-300"
            >
              {data.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-start gap-3"
            >
              <Button href="/contact">Start Your Project</Button>
              <span className="body-sm text-neutral-500">
                Discuss your requirements with our engineering team.
              </span>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 grid grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-2"
            >
              {["Enterprise Ready", "Secure Architecture", "Scalable Solutions", "Long-term Support"].map((text) => (
                <li key={text} className="flex items-center gap-3 text-neutral-300">
                  <Check size={16} className="shrink-0 text-[#E87830]" />
                  <span className="body">{text}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Visual Showcase */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-first flex items-center justify-center lg:order-last"
            aria-hidden="true"
          >
            <div className="relative border border-white/10 p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
              <div className="flex h-[320px] w-[320px] items-center justify-center sm:h-[400px] sm:w-[400px] lg:h-[480px] lg:w-[480px]">
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
          className="mt-24 grid grid-cols-2 gap-y-8 pt-8 md:grid-cols-4"
        >
          {[
            { l: "Timeline", v: "6–12 Weeks" },
            { l: "Architecture", v: "Scalable" },
            { l: "Support", v: "24/7" },
            { l: "Delivery", v: "Enterprise" },
          ].map((item) => (
            <div key={item.l} className="border-l border-white/10 pl-6">
              <p className="card-title mb-0.5 text-white">{item.v}</p>
              <p className="label uppercase text-neutral-500">{item.l}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}