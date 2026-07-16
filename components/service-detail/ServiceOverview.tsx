"use client";

import { motion, type Variants } from "framer-motion";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";

// Agar tumne lib/motion.ts bana liya hai, toh yahan se import karo:
// import { EASE } from "@/lib/motion";
// Filhal ke liye yahan define kar rahe hain:
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface OverviewOutcome {
  title: string;
  description: string;
}

interface ServiceOverviewProps {
  data: {
    heading: string;
    description: string;
    outcomes?: OverviewOutcome[];
  };
}

const DEFAULT_OUTCOMES: OverviewOutcome[] = [
  { title: "Business First", description: "Software engineered around your core business objectives, ensuring every line of code adds measurable value." },
  { title: "Security Built In", description: "Security is not an afterthought; it is integrated into every layer of our architectural design." },
  { title: "Scalable Foundation", description: "Systems designed to handle growth seamlessly, ensuring stability as your user base and data volume expand." },
  { title: "Long-term Partnership", description: "We view our work as a continuous engagement, focusing on sustainable systems and ongoing support." }
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
      duration: 0.55, 
      ease: EASE 
    } 
  }
};

export default function ServiceOverview({ data }: ServiceOverviewProps) {
  const principles = data.outcomes?.length ? data.outcomes : DEFAULT_OUTCOMES;
  
  const paragraphs = (data.description ?? "").split('\n').filter(p => p.trim() !== '');

  return (
    <section className="relative bg-white py-[120px]">
      <Container>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-y-20 lg:grid-cols-12 lg:gap-x-24"
        >
          {/* Narrative Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <motion.div variants={itemVariants}>
              <span className="label mb-8 block uppercase text-[#E87830]">
                Strategic Overview
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants} 
              className="section-title mb-12 max-w-[420px] tracking-[-0.045em] text-neutral-900"
            >
              {data.heading}
            </motion.h2>
            
            <motion.div 
              variants={itemVariants} 
              className="body-lg mb-12 max-w-[420px] text-neutral-600 space-y-6"
            >
              {paragraphs.map((text, idx) => (
                <p key={idx} className={idx === 0 ? "font-medium text-neutral-900" : ""}>
                  {text}
                </p>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="h-px w-16 bg-neutral-300" />
              <Button href="/contact">Talk with our Architects</Button>
            </motion.div>
          </div>

          {/* Editorial Principles Column */}
          <div className="lg:col-span-7">
            <ol className="flex flex-col">
              {principles.map((outcome, i) => (
                <motion.li 
                  key={i}
                  variants={itemVariants}
                  className="group relative border-t border-neutral-200 py-[40px] transition-colors duration-500 first:border-none first:pt-0 hover:bg-orange-50/30"
                >
                  {/* Active Indicator */}
                  <div className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-[#E87830] transition-transform duration-500 group-hover:scale-y-100" />
                  
                  <div className="flex items-start gap-8 pl-4">
                    {/* Number Badge */}
                    <span className="font-mono text-[16px] font-bold text-neutral-400 transition-colors duration-500 group-hover:text-[#E87830]">
                      0{i + 1}
                    </span>

                    {/* Principle Content */}
                    <motion.div 
                      className="flex-1"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="card-title mb-4 text-neutral-900 transition-transform duration-500 max-w-[360px]">
                        {outcome.title}
                      </h4>
                      <p className="body max-w-[470px] text-neutral-500">
                        {outcome.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}