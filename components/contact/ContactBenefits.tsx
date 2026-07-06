"use client";

import { motion } from "framer-motion";

const benefits = [
  { title: "Response Time", desc: "Typically within 2 business days." },
  { title: "Engagement Models", desc: "Project-based, retained and consulting." },
  { title: "Delivery Focus", desc: "Software, AI, Cloud and Enterprise Systems." },
];

export default function ContactBenefits() {
  return (
    <div className="space-y-12 mt-12">
      {benefits.map((b, i) => (
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          key={b.title}
        >
          <h3 className="text-[11px] uppercase tracking-[0.25em] text-[#E87830] font-bold mb-2">
            {b.title}
          </h3>
          <p className="text-neutral-900 font-medium">
            {b.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}