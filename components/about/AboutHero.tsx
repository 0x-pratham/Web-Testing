"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";

export default function AboutHero() {
  const tags = ["Custom Software", "Cybersecurity", "Cloud Solutions"];

  return (
    <section
      className="
        relative
        flex
        min-h-[88vh]
        items-center
        overflow-hidden
        bg-[#0F0D0C]
        pb-28
        pt-36
        text-white
        selection:bg-[#E87830]/30
        sm:pt-40
        md:pb-24
        lg:pt-28
      "
    >
      <div className="pointer-events-none absolute -right-[10%] -top-[20%] h-[500px] w-[500px] rounded-full bg-[#E87830]/10 blur-[140px]" />
      
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          <div className="space-y-10 lg:col-span-6 md:space-y-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="label uppercase text-[#E87830]"
            >
              About Cosmolix
            </motion.div>

            <h1 className="hero-title tracking-tight leading-[1.05]">
              Building technology<br />
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="inline-block"
              >
                with <span className="text-[#E87830]">purpose.</span>
              </motion.span>
            </h1>

            <p className="body-lg max-w-lg leading-9 text-neutral-400 md:leading-8">
              Cosmolix partners with businesses and organizations to build secure digital products, scalable infrastructure and technology solutions that create lasting value.
            </p>

            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span 
                  key={tag}
                  className="body-sm rounded-lg border border-white/5 px-5 py-3 text-neutral-500 transition-all hover:border-[#E87830]/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mt-14 lg:col-span-6 lg:mt-0">
            <div className="rounded-[4px] border border-white/10 bg-[#0A0908]/80 p-6 md:p-8">
              <div className="mb-8 flex items-center justify-between">
                <span className="label uppercase text-neutral-500">Our Journey</span>
              </div>

              <div className="h-56 w-full overflow-hidden">
                <svg className="h-full w-full" viewBox="0 0 400 150" preserveAspectRatio="none" aria-hidden="true">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                    d="M0 120 C 50 120, 50 30, 100 30 C 150 30, 150 90, 200 90 C 250 90, 250 10, 300 10 C 350 10, 350 110, 400 110"
                    fill="none"
                    stroke="#E87830"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/5 pt-8">
                {[
                  { label: "Our Approach", value: "Client-Centric" },
                  { label: "Our Promise", value: "Quality First" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="label text-neutral-600">{stat.label}</div>
                    <div className="card-title mt-1 text-neutral-200">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}