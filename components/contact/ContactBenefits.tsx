"use client";

import { motion } from "framer-motion";

const benefits = [
  { title: "Quick Response", desc: "We typically respond within one business day." },
  { title: "Flexible Engagement", desc: "Project-based, dedicated teams or long-term partnerships." },
  { title: "End-to-End Delivery", desc: "From strategy and design to deployment and ongoing support." },
];

export default function ContactBenefits() {
  return (
    <div className="space-y-8 md:space-y-12 mt-8 md:mt-12">
      {benefits.map((b, i) => (
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          key={b.title}
        >
          <h3 className="text-[15px] md:text-[16px] uppercase tracking-[0.18em] text-[#E87830] font-semibold mb-2">
            {b.title}
          </h3>
          <p className="text-[18px] md:text-[20px] leading-8 font-medium text-neutral-800">
            {b.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}