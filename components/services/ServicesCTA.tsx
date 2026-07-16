"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="py-24 bg-[#FCFBF9]">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="relative rounded-[24px] bg-[#0A0A0A] p-16 border border-neutral-800">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side: Header & Primary CTA */}
            <div className="space-y-12">
              <div className="max-w-2xl">
                <h2 className="section-title tracking-tight text-white">
                  Ready to build something meaningful?
                </h2>
                
                <p className="mt-8 body-lg text-neutral-400 max-w-xl">
                  Tell us about your idea, business goals or project requirements. We'll help you plan, build and launch a secure, scalable digital solution.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 font-semibold text-white transition-all duration-300"
                >
                  <span className="border-b-2 border-[#E87830] pb-0.5 group-hover:border-white transition-colors">
                    Start Your Project
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <div className="flex flex-col gap-1">
                  <span className="body font-semibold text-white">Book a Discovery Call</span>
                  <span className="body-sm text-neutral-500">Usually reply within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Right Side: Information Card */}
            <div className="bg-[#141414] rounded-xl p-8 border border-neutral-800 h-full flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h3 className="card-title text-white mb-2">Why Businesses Choose Cosmolix</h3>
                  <p className="body text-neutral-400">
                    We work closely with every client to understand their goals and deliver secure, scalable and high-quality digital solutions.
                  </p>
                </div>

                <ul className="space-y-3">
                  {[
                    "Free Consultation", 
                    "Business Requirement Analysis", 
                    "Dedicated Development Team", 
                    "Transparent Communication", 
                    "Long-Term Support"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 body text-neutral-300">
                      <CheckCircle2 className="h-4 w-4 text-[#E87830] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}