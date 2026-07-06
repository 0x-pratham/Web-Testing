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
    name: "Dhanesh Shingade",
    role: "Chief Technology Officer",
    image: "/founders/dhanesh.jpeg",
    bio: "Architecting our tech roadmap, engineering standards, and high-scale secure infrastructure with an relentless focus on performance.",
    expertise: ["Engineering", "Cloud", "Security"]
  },
  {
    name: "Sahil Vethekar",
    role: "Chief Marketing Officer",
    image: "/founders/sahil.jpeg",
    bio: "Crafting the brand narrative, market-defining positioning, and high-impact growth strategies to elevate our presence globally.",
    expertise: ["Branding", "Positioning", "Marketing"]
  }
];

export default function AboutLeadership() {
  return (
    <section className="py-32 bg-[#FCFAF8] relative selection:bg-[#E87830]/20">
      <Container>
        {/* Header - Editorial Style */}
        <div className="mb-24 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.3em] text-[#E87830] font-bold"
          >
            Executive Leadership
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-6 text-5xl md:text-6xl font-bold tracking-[-0.04em] text-neutral-950 font-[var(--font-sora)]"
          >
            The minds building <br/>the next generation.
          </motion.h2>
        </div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white border border-neutral-100 p-8 transition-all duration-700 hover:border-[#E87830]/20"
            >
              {/* Image Container - Subtle Zoom (1.03x) */}
              <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-neutral-100">
                <Image 
                  src={leader.image} 
                  alt={leader.name} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[1200ms] ease-out scale-100 group-hover:scale-[1.03]" 
                />
                {/* UPDATED: Subtle Orange Ambient Glow instead of white */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#E87830]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Text Info */}
              <div className="space-y-1 relative z-10">
                <h3 className="text-2xl font-bold font-[var(--font-sora)] tracking-tight text-neutral-950">
                  {leader.name}
                </h3>
                <span className="text-[#E87830] text-[10px] font-bold uppercase tracking-[0.25em] block">
                  {leader.role}
                </span>
                <p className="text-sm text-neutral-500 leading-relaxed pt-6 font-light min-h-[90px]">
                  {leader.bio}
                </p>
              </div>

              {/* Expertise Tags */}
              <div className="mt-8 pt-6 border-t border-neutral-100 flex gap-2">
                {leader.expertise.map((tag) => (
                  <span key={tag} className="text-[9px] uppercase tracking-[0.1em] text-neutral-400 font-bold bg-neutral-50 px-2.5 py-1 transition-colors group-hover:bg-[#E87830]/5 group-hover:text-[#E87830]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Engineering "Corner Mark" */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-2 h-2 border-t border-r border-[#E87830]" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}