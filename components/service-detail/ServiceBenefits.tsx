"use client";

import { motion, type Variants } from "framer-motion";
import * as Icons from "lucide-react"; // Import all icons
import Container from "@/components/shared/Container";

const EASE: [number, number, number, number] = [
  0.16,
  1,
  0.3,
  1,
];

export interface Benefit {
  title: string;
  category?: string;
  desc?: string;
  description?: string;
  icon?: string;
}

interface ServiceBenefitsProps {
  benefits: Benefit[];
}

export default function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        duration: 0.45, 
        ease: EASE 
      } 
    }
  };

  if (!benefits || benefits.length === 0) return null;

  return (
    <section className="relative bg-white py-[120px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-50/40 via-transparent to-transparent" />
      
      <Container>
        <div className="mb-24 max-w-2xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="label uppercase text-[#E87830]">BENEFITS</span>
          </div>
          <h2 className="section-title mb-6 tracking-[-0.02em] text-neutral-900">
            Why Businesses Choose<br />
            This Solution
          </h2>
          <p className="body-lg text-neutral-600">
            Engineered to deliver measurable value, long-term scalability, and operational excellence for high-performance enterprises.
          </p>
        </div>

        <motion.ul 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((benefit, i) => {
            const iconName = benefit.icon ?? "ShieldCheck";
            const IconComponent = (Icons as any)[iconName];

            return (
              <motion.li 
                key={i} 
                variants={itemVariants}
                className="group relative flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#E87830] hover:shadow-2xl hover:shadow-orange-100/50"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-[16px] font-bold text-neutral-400 transition-colors group-hover:text-[#E87830]">
                    0{i + 1}
                  </span>
                  {/* Dynamic Icon Render */}
                  {IconComponent && (
                    <div className="flex h-[52px] w-[52px] items-center justify-center rounded-xl border border-neutral-200 bg-white transition-all duration-500 group-hover:scale-110 group-hover:border-[#E87830]">
                      <IconComponent className="text-[#E87830]" size={24} strokeWidth={1.5} />
                    </div>
                  )}
                </div>

                <div className="flex flex-grow flex-col">
                  <span className="mb-2 block text-[12px] font-bold uppercase tracking-widest text-neutral-400">
                    {benefit.category ?? "Business Value"}
                  </span>
                  <h4 className="card-title mb-4 text-neutral-900 transition-transform duration-500 group-hover:translate-x-1.5">
                    {benefit.title}
                  </h4>
                  <p className="body flex-grow text-neutral-500 transition-colors duration-500 group-hover:text-neutral-700">
                    {benefit.desc ?? benefit.description}
                  </p>
                </div>

                <div className="mt-8 h-[2px] w-full overflow-hidden bg-neutral-100">
                  <motion.div 
                    className="h-full w-full origin-left bg-[#E87830] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                  />
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </Container>
    </section>
  );
}