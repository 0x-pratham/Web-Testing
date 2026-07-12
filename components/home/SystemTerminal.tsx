"use client";
import { motion } from "framer-motion";

const items = ["Infrastructure Online", "AI Pipeline Ready", "Security Active", "Deployment Successful"];

export default function SystemTerminal() {
  return (
    <div className="
      w-full
      max-w-[220px]
      sm:max-w-[250px]
      lg:max-w-[280px]
      bg-white/80
      backdrop-blur-xl
      border
      border-neutral-200
      p-3
      sm:p-4
      lg:p-5
      rounded-xl
      shadow-2xl
    ">
      <p className="text-[9px] sm:text-[10px] font-bold text-neutral-400 mb-3 tracking-widest uppercase">Cosmolix Engine</p>
      <div className="
        font-mono
        text-[8px]
        sm:text-[9px]
        lg:text-[10px]
        text-neutral-800
        space-y-2
        sm:space-y-3
      ">
        {items.map((item, i) => (
          <motion.p 
            key={i} 
            className="break-words"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: i * 0.5 }}
          >
            ● {item}
          </motion.p>
        ))}
      </div>
    </div>
  );
}