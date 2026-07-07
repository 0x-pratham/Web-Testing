"use client";
import { motion } from "framer-motion";

const items = ["Infrastructure", "AI", "Latency"];

export default function HeroTerminal() {
  return (
    <div className="p-5">
      {items.map((item, i) => (
        <motion.p key={i} animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}>
          ● {item}
        </motion.p>
      ))}
    </div>
  );
}