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
    <div className="w-full max-w-[280px] sm:max-w-[320px] bg-white/80 backdrop-blur-xl border border-neutral-200 p-4 rounded-xl shadow-lg">
      <p className="text-[10px] font-bold text-neutral-400 mb-3 tracking-widest uppercase">Core Expertise</p>
      <div className="text-[11px] text-neutral-800 space-y-2">
        {items.map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -10 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="w-1 h-1 bg-[#E87830] rounded-full" />
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}