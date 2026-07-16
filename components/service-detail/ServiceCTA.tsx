"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import { EASE, type Variants } from "@/lib/motion"; // Global utility import

const TRUST_INDICATORS = [
  "Free Consultation",
  "Enterprise Architecture",
  "Long-term Support"
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.45, 
      ease: EASE 
    } 
  }
};

export default function ServiceCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-[120px]">
      {/* Divider */}
      <div className="absolute top-0 w-full border-t border-neutral-200" />
      
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="h-[400px] w-[400px] rounded-full bg-[#E87830]/5 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          {/* Label */}
          <motion.div variants={itemVariants}>
            <span className="label mb-8 block uppercase text-[#E87830]">
              LET'S BUILD TOGETHER
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            variants={itemVariants} 
            className="hero-title mb-8 tracking-[-0.02em] text-neutral-900"
          >
            Ready to Engineer<br />
            Your Next Digital Advantage?
          </motion.h2>

          {/* Description */}
          <motion.p 
            variants={itemVariants} 
            className="body-lg mb-10 max-w-xl text-neutral-600"
          >
            Partner with Cosmolix to design secure, scalable, and future-ready digital solutions that deliver measurable business outcomes.
          </motion.p>

          {/* Trust Indicators */}
          <motion.ul 
            variants={itemVariants}
            className="mb-12 flex flex-wrap justify-center gap-6"
          >
            {TRUST_INDICATORS.map((text) => (
              <li key={text} className="flex items-center gap-2 text-[15px] text-neutral-700">
                <CheckCircle2 size={18} className="text-[#E87830]" />
                {text}
              </li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="mb-6">
            <Button href="/contact">Start Your Project</Button>
          </motion.div>

          {/* Helper Text */}
          <motion.p variants={itemVariants} className="text-[14px] text-neutral-500">
            Usually respond within 24 hours
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}