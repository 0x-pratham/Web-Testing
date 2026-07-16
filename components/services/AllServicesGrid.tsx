"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { services } from "@/data/services";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function AllServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 140, damping: 22 },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#FCFBF9] py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-20 grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="section-title tracking-tight text-neutral-950">
              Technology Solutions
              <span className="font-serif text-neutral-400"> Built for Business Growth.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="body-lg text-neutral-500">
              We build secure, scalable and future-ready digital solutions that help businesses innovate, improve efficiency and achieve long-term growth.
            </p>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-neutral-200/50 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === idx;

            return (
              <motion.div
                key={service.slug}
                variants={cardVariants}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative flex h-full flex-col overflow-hidden bg-white"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="relative flex h-full w-full flex-col justify-between p-8 min-h-[380px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E87830] focus-visible:ring-inset"
                >
                  <div
                    className={`absolute inset-0 bg-neutral-50/70 transition-transform duration-500 ease-out origin-top ${
                      isHovered ? "scale-y-100" : "scale-y-0"
                    }`}
                  />

                  <div className="relative z-10 w-full">
                    <div className="mb-6 flex items-center justify-between">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-300 ${
                          isHovered
                            ? "border-[#E87830]/20 bg-white shadow-sm"
                            : "border-neutral-100 bg-neutral-50/60"
                        }`}
                      >
                        <Icon
                          className={`h-4 w-4 transition-colors duration-300 ${
                            isHovered ? "text-[#E87830]" : "text-neutral-500"
                          }`}
                        />
                      </div>

                      <div className="relative h-4 w-4 overflow-hidden">
                        <div
                          className={`absolute inset-0 transition-transform duration-300 ease-out ${
                            isHovered ? "translate-x-0 translate-y-0 text-[#E87830]" : "translate-x-2 -translate-y-2 text-neutral-300"
                          }`}
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <h3 className="card-title tracking-tight text-neutral-900">
                        {service.title}
                      </h3>
                      <p className="label text-[#E87830]">
                        {service.subtitle}
                      </p>
                      {service.description && (
                        <p className="body pt-1 text-neutral-500">
                          {service.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="relative z-10 mt-10 w-full">
                    {service.capabilities && service.capabilities.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {service.capabilities.slice(0, 3).map((item) => (
                          <span
                            key={item}
                            className={`rounded-lg border px-3 py-1.5 body-sm tracking-wide transition-all duration-300 ${
                              isHovered
                                ? "border-[#E87830]/20 bg-white text-[#E87830] shadow-sm"
                                : "border-neutral-200 bg-white text-neutral-600"
                            }`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}