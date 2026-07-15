"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";

/**
 * Interfaces
 */
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

/**
 * Constants
 */
const DEFAULT_OUTCOMES: OverviewOutcome[] = [
  { title: "Business First", description: "Software engineered around your core business objectives, ensuring every line of code adds measurable value." },
  { title: "Security Built In", description: "Security is not an afterthought; it is integrated into every layer of our architectural design." },
  { title: "Scalable Foundation", description: "Systems designed to handle growth seamlessly, ensuring stability as your user base and data volume expand." },
  { title: "Long-term Partnership", description: "We view our work as a continuous engagement, focusing on sustainable systems and ongoing support." }
];

/**
 * Animation Variants
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function ServiceOverview({ data }: ServiceOverviewProps) {
  const principles = data.outcomes?.length ? data.outcomes : DEFAULT_OUTCOMES;

  return (
    <section className="py-[120px] bg-white relative">
      <Container>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-12 gap-y-20 lg:gap-x-24"
        >
          {/* Narrative Column */}
          <div className="lg:col-span-5">
            <motion.div variants={itemVariants}>
              <span className="text-[#E87830] font-semibold text-[15px] uppercase tracking-[0.18em] mb-8 block">
                Strategic Overview
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants} 
              className="text-[42px] md:text-[50px] lg:text-[64px] font-extrabold leading-[0.95] tracking-[-0.045em] text-neutral-900 mb-12 max-w-[420px]"
            >
              {data.heading}
            </motion.h2>
            
            <motion.div 
              variants={itemVariants} 
              className="text-[17px] text-neutral-600 leading-[32px] max-w-[420px] mb-12"
            >
              <span className="text-neutral-900 font-medium block mb-4">
                {data.description.split('.')[0]}.
              </span>
              {data.description.split('.').slice(1).join('.')}
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button href="/contact">Talk with our Architects</Button>
            </motion.div>
          </div>

          {/* Editorial Principles Column */}
          <div className="lg:col-span-7">
            <div className="flex flex-col">
              {principles.map((outcome, i) => (
                <motion.div 
                  key={i}
                  variants={itemVariants}
                  className="group relative border-t border-neutral-200 py-[40px] first:pt-0 transition-all duration-500"
                >
                  <div className="flex items-start gap-8">
                    {/* Number Badge */}
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-[14px] font-bold text-neutral-900 transition-colors duration-500">
                        0{i + 1}
                      </span>
                    </div>

                    {/* Principle Content */}
                    <div className="flex-1">
                      <h4 className="text-[28px] font-bold text-neutral-900 mb-4 transition-transform duration-500">
                        {outcome.title}
                      </h4>
                      <p className="text-[17px] text-neutral-500 leading-[32px] max-w-[480px]">
                        {outcome.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}