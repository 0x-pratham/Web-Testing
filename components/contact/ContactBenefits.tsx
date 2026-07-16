"use client";

import { motion } from "framer-motion";
import { Clock3, Handshake, ShieldCheck } from "lucide-react";

const benefits = [
  { 
    title: "Quick Response", 
    desc: "We typically respond within one business day.",
    icon: Clock3
  },
  { 
    title: "Flexible Engagement", 
    desc: "Project-based, dedicated teams or long-term partnerships.",
    icon: Handshake
  },
  { 
    title: "End-to-End Delivery", 
    desc: "From strategy and design to deployment and ongoing support.",
    icon: ShieldCheck
  },
];

export default function ContactBenefits() {
  return (
    <ul className="mt-8 space-y-8 md:mt-12 md:space-y-12">
      {benefits.map((b, i) => {
        const Icon = b.icon;
        return (
          <motion.li
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            key={b.title}
          >
            <div className="mb-2 flex items-center gap-2">
              <Icon className="h-4 w-4 text-[#E87830]" aria-hidden="true" />
              <h3 className="label uppercase text-[#E87830]">
                {b.title}
              </h3>
            </div>
            <p className="body-lg text-neutral-800">
              {b.desc}
            </p>
          </motion.li>
        );
      })}
    </ul>
  );
}