"use client";

import { motion, Variants } from "framer-motion";
import Container from "@/components/shared/Container";
import { services } from "@/data/services";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FeaturedServices() {
  const router = useRouter();
  const cybersecurityService = services.find((s) => s.slug === "cybersecurity");
  const cloudService = services.find((s) => s.slug === "cloud");
  const softwareService = services.find((s) => s.slug === "software");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 24 },
    },
  };

  const renderCard = (service: typeof services[0], isDark = false) => {
    if (!service) return null;
    const Icon = service.icon;
    const isHovered = hoveredCard === service.slug;

    return (
      <motion.div
        variants={cardVariants}
        onMouseEnter={() => setHoveredCard(service.slug)}
        onMouseLeave={() => setHoveredCard(null)}
        onClick={() => router.push(`/services/${service.slug}`)}
        className="group relative flex h-full cursor-pointer select-none flex-col focus:outline-none"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && router.push(`/services/${service.slug}`)}
      >
        <div
          className={`relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl border p-8 transition-all duration-300 ease-out focus-visible:ring-2 focus-visible:ring-[#E87830] ${
            isDark
              ? "bg-[#120e0c] border-neutral-800/80"
              : "bg-white border-neutral-200/60"
          } ${
            isHovered
              ? isDark
                ? "border-neutral-700 shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
                : "border-neutral-300 shadow-[0_12px_40px_rgba(0,0,0,0.02)]"
              : ""
          }`}
        >
          <div
            className={`absolute bottom-0 left-0 top-0 w-[2px] bg-[#E87830] transition-transform duration-300 ease-out origin-top ${
              isHovered ? "scale-y-100" : "scale-y-0"
            }`}
          />

          <div className="relative z-10 flex flex-1 flex-col items-start justify-between w-full">
            <div className="w-full">
              <div
                className={`mb-6 flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-300 ${
                  isDark ? "bg-neutral-800/50" : "bg-neutral-50"
                }`}
              >
                <Icon
                  className={`h-4 w-4 transition-colors duration-300 ${
                    isHovered
                      ? "text-[#E87830]"
                      : isDark
                      ? "text-neutral-400"
                      : "text-neutral-600"
                  }`}
                />
              </div>

              <div className="space-y-2">
                <h3 className={`card-title tracking-tight ${isDark ? "text-white" : "text-neutral-900"}`}>
                  {service.title}
                </h3>
                <p className={`body ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
                  {service.description}
                </p>
              </div>
            </div>

            <div className="mt-8 w-full">
              {isDark ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-y-2">
                    {service.capabilities.slice(0, 3).map((capability) => (
                      <div key={capability} className="flex items-center gap-2 body-sm text-neutral-400">
                        <span className="h-1 w-1 rounded-full bg-[#E87830]" />
                        <span className="truncate">{capability}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between border-t border-neutral-800/80 pt-3">
                    <span className="label text-neutral-500">Benchmark</span>
                    <span className="font-serif text-[15px] text-[#E87830]">99.9% Secure</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap gap-1.5">
                  {service.capabilities.slice(0, 3).map((capability) => (
                    <span
                      key={capability}
                      className="body-sm rounded bg-neutral-50 px-2 py-0.5 text-neutral-600 border border-neutral-200/30"
                    >
                      {capability}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="relative overflow-hidden border-y border-neutral-100 bg-white py-20 md:py-24">
      <div className="pointer-events-none absolute right-1/4 top-0 h-[350px] w-[350px] rounded-full bg-[#E87830]/3 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-[350px] w-[350px] rounded-full bg-[#E87830]/3 blur-[120px]" />

      <Container className="relative z-10">
        <div className="mb-16 grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E87830]" />
              <span className="label uppercase text-neutral-400">
                Featured Services
              </span>
            </div>
            <h2 className="section-title tracking-tight text-neutral-900">
              Technology That <br />
              Moves Your Business Forward.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-1">
            <p className="body-lg text-neutral-500">
              We design and develop secure, scalable digital solutions that help businesses grow, innovate and deliver better customer experiences.
            </p>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {cybersecurityService && renderCard(cybersecurityService, true)}
          {cloudService && renderCard(cloudService, false)}
          {softwareService && renderCard(softwareService, false)}
        </motion.div>
      </Container>
    </section>
  );
}