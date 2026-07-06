"use client";

import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section className="py-24 bg-[#FCFBF9]">
      <div className="mx-auto max-w-[1280px] px-6">
        
        {/* Dark Mode Container: 
          - Using #0A0A0A for a grounded, elite feel.
          - 24px border radius for consistency.
          - No gradients, just solid surface.
        */}
        <div className="relative rounded-[24px] bg-[#0A0A0A] p-16 border border-neutral-800">
          
          {/* Header Hierarchy */}
          <div className="max-w-2xl">
            <h2 className="text-[56px] font-semibold tracking-[-0.03em] leading-[1.1] text-white">
              Ready to build something meaningful?
            </h2>
            
            <p className="mt-8 text-lg leading-[1.8] text-neutral-400 max-w-xl">
              Share your vision with us and we'll help transform it into a secure, 
              scalable and future-ready digital product.
            </p>
          </div>

          {/* Premium CTA Interaction */}
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 text-base font-semibold text-white transition-all duration-300"
            >
              <span className="border-b-2 border-[#E87830] pb-0.5 group-hover:border-white transition-colors">
                Start Your Project
              </span>
              <span className="text-[#E87830] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-white">Book a Discovery Call</span>
              <span className="text-[13px] text-neutral-500">Usually reply within 24 hours</span>
            </div>
          </div>

          {/* Human Trust Signals */}
          <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-wrap items-center gap-8 text-[13px] font-medium text-neutral-500">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E87830]" />
              Security First
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E87830]" />
              Enterprise Ready
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E87830]" />
              Built To Scale
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}