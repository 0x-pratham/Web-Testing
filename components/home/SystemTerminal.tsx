"use client";

import { motion } from "framer-motion";

const items = [
  "Custom Software Development",
  "Cloud Infrastructure",
  "Cybersecurity Solutions",
  "AI & Automation"
];

export default function SystemTerminal() {
  return (
    <section 
      className="w-full max-w-[280px] rounded-xl border border-neutral-200 bg-white/80 p-4 shadow-lg backdrop-blur-xl sm:max-w-[320px]"
      aria-label="Core Expertise"
    >
      <h2 className="font-serif text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
        Core Expertise
      </h2>
      <ul className="text-sm font-sans text-neutral-800 space-y-2">
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="h-1 w-1 shrink-0 rounded-full bg-[#E87830]" />
            <span className="truncate">{item}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}