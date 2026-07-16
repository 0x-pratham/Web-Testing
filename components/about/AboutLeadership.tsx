"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import Image from "next/image";

const leaders = [
  {
    name: "Prathamesh Bhil",
    role: "Chief Executive Officer",
    image: "/founders/pratham.png",
    bio: "Visionary leader driving business strategy, global partnerships, and organizational excellence to scale the future of Cosmolix.",
    expertise: ["Strategy", "Growth", "Vision"]
  },
  {
    name: "Pranali Sonar",
    role: "Managing Director",
    image: "/founders/pranali.png",
    bio: "Leading strategic operations, business development and organizational growth while ensuring the company's long-term vision is successfully executed.",
    expertise: ["Leadership", "Operations", "Strategy", "Partnerships"]
  },
  {
    name: "Sahil Vethekar",
    role: "Chief Marketing Officer",
    image: "/founders/sahil.jpeg",
    bio: "Crafting the brand narrative, market-defining positioning, and high-impact growth strategies to elevate our presence globally.",
    expertise: ["Branding", "Positioning", "Marketing", "Communities"]
  }
];

export default function AboutLeadership() {
  return (
    <section className="relative bg-[#FCFAF8] py-20 selection:bg-[#E87830]/20 md:py-24 lg:py-32">
      <Container>
        {/* Header - Editorial Style */}
        <div className="mb-14 flex flex-col items-center text-center md:mb-20 lg:mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="label uppercase text-[#E87830]"
          >
            Executive Leadership
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title mt-6 tracking-tight text-neutral-950"
          >
            The minds building <br/>the next generation.
          </motion.h2>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col border border-neutral-100 bg-white p-6 transition-all duration-700 hover:border-[#E87830]/20 md:p-8"
            >
              {/* Image Container - Subtle Zoom (1.03x) */}
              <div className="relative mb-6 aspect-[4/5] overflow-hidden bg-neutral-100 md:mb-8">
                <Image 
                  src={leader.image} 
                  alt={`${leader.name}, ${leader.role}`} 
                  fill 
                  className="scale-100 object-cover grayscale transition-all duration-[1200ms] ease-out group-hover:scale-[1.03] group-hover:grayscale-0" 
                />
                {/* Subtle Orange Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#E87830]/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              </div>

              {/* Text Info */}
              <div className="relative z-10 flex-grow space-y-1">
                <h3 className="card-title text-neutral-950">
                  {leader.name}
                </h3>
                <span className="label block uppercase text-[#E87830]">
                  {leader.role}
                </span>
                <p className="body pt-6 text-neutral-600 min-h-[120px] md:min-h-[90px]">
                  {leader.bio}
                </p>
              </div>

              {/* Expertise Tags */}
              <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-neutral-100 pt-6">
                {leader.expertise.map((tag) => (
                  <span 
                    key={tag} 
                    className="body-sm inline-flex items-center justify-center whitespace-nowrap rounded-md bg-neutral-50 px-4 py-2 uppercase text-neutral-500 transition-colors group-hover:bg-[#E87830]/5 group-hover:text-[#E87830]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Engineering "Corner Mark" */}
              <div className="absolute right-0 top-0 p-4 opacity-0 transition-all duration-500 group-hover:opacity-100" aria-hidden="true">
                <div className="h-2 w-2 border-r border-t border-[#E87830]" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}