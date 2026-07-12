"use client";
import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";

export default function FloatingCards() {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="relative px-4 py-4 bg-white/80 backdrop-blur-2xl border border-neutral-200 rounded-2xl overflow-hidden"
    >
      {/* 5. Glass Reflection Strip */}
      <div className="absolute top-0 left-0 right-0 h-10 rounded-t-2xl bg-gradient-to-b from-white/60 to-transparent pointer-events-none"/>
      
      {/* 6. Icon Animation */}
      <motion.div animate={{ rotate: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity }}>
        <BrainCircuit className="w-6 h-6 text-orange-500" />
      </motion.div>
      {/* Content */}
    </motion.div>
  );
}