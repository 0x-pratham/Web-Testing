"use client";

import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        
        {/* Core CTA Card Container Block with Refined Rounded Profiles */}
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-[#181411] via-[#221A15] to-[#5A2808] p-10 lg:p-16 text-white">
          
          {/* Cosmolix Premium Signature Thin Top Accent Line */}
          <div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#E87830] via-[#E87830]/30 to-transparent"
          />

          {/* Luxury Ambient Glow Creating Subdepth Layering */}
          <div
            className="absolute right-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full bg-[#E87830]/10 blur-[120px] pointer-events-none"
          />

          {/* Premium Outcome-Oriented Header Hierarchy */}
          <h2 className="max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.06em] leading-[0.95]">
            Ready to build
            <br />
            something meaningful?
          </h2>

          {/* Description Block */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-300">
            Share your vision with us and we'll help transform it
            into a secure, scalable and future-ready digital product.
          </p>

          {/* Premium Handcrafted Border-Bottom Text Interaction */}
          <div className="mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 border-b border-[#E87830]/30 pb-1 text-white font-medium tracking-[-0.01em] transition-all duration-300 hover:border-[#E87830]"
            >
              <span>Let's discuss your idea</span>
              <span className="text-[#E87830] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Reassuring Structural Human Trust Signals Row with Enhanced Rhythm */}
          <div className="mt-12 flex flex-wrap items-center gap-4 text-sm text-neutral-400">
            <span>Security First</span>
            <div className="h-1 w-1 rounded-full bg-[#E87830]/50" />
            <span>Enterprise Ready</span>
            <div className="h-1 w-1 rounded-full bg-[#E87830]/50" />
            <span>Built To Scale</span>
          </div>

        </div>
      </div>
    </section>
  );
}