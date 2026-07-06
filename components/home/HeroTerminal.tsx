"use client";
import { motion } from "framer-motion";

export default function HeroTerminal() {
  return (
    <div className="absolute bottom-10 left-10 w-[220px] bg-[#111111]/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl z-50">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <span className="text-[10px] text-neutral-400 font-mono">RUNTIME: LIVE</span>
      </div>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="font-mono text-[10px] text-[#E87830] space-y-1"
      >
        <p>➜ boot engine...</p>
        <p className="text-white">➜ loading ai_models...</p>
        <p className="text-white">➜ connection: secure</p>
      </motion.div>
    </div>
  );
}