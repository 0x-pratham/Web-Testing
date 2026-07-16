"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Cloud, ShieldCheck, Cpu } from "lucide-react";

const modules = [
  { title: "AI Solutions", icon: BrainCircuit, pos: "-top-6 left-1/2 -translate-x-1/2" },
  { title: "Cloud Infrastructure", icon: Cloud, pos: "left-[-30px] top-1/2 -translate-y-1/2" },
  { title: "Cybersecurity", icon: ShieldCheck, pos: "right-[-30px] top-1/2 -translate-y-1/2" },
  {
    title: "Digital Infrastructure",
    icon: Cpu,
    pos: "bottom-[-10px] left-1/2 -translate-x-1/2",
  },
];

export default function OrbitingModules() {
  return (
    <div className="absolute inset-0 z-0 hidden pointer-events-none lg:block">
      {/* Animated Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-15">
        <motion.path
          d="M 330 100 C 330 200, 330 200, 330 300"
          stroke="#E87830"
          strokeWidth="1"
          strokeDasharray="4 4"
          fill="none"
          animate={{ pathLength: [0, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {modules.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, -8, 0],
          }}
          transition={{
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 },
            opacity: { duration: 1 },
          }}
          whileHover={{
            scale: 1.04,
            borderColor: "#E87830",
            boxShadow: "0 10px 20px rgba(232, 120, 48, 0.15)",
          }}
          className={`absolute ${m.pos} flex h-[52px] w-[160px] cursor-pointer items-center gap-3 rounded-[16px] border border-neutral-200 bg-white/90 px-3 shadow-sm backdrop-blur-xl pointer-events-auto`}
          role="presentation"
        >
          <motion.div whileHover={{ rotate: 10 }} className="text-[#E87830]">
            <m.icon className="h-[18px] w-[18px]" />
          </motion.div>
          <span className="font-sans text-sm font-medium text-neutral-900">
            {m.title}
          </span>
        </motion.div>
      ))}
    </div>
  );
}