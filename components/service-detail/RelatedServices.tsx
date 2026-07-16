"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import Container from "@/components/shared/Container";
import Link from "next/link";
import Button from "@/components/shared/Button";
import { services } from "@/data/services";

interface Service {
  title: string;
  description: string;
  slug: string;
  icon: LucideIcon;
}

interface RelatedServicesProps {
  currentSlug: string;
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: EASE,
    },
  },
};

export default function RelatedServices({ currentSlug }: RelatedServicesProps) {
  const relatedServices = services
    .filter((service) => service.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="relative bg-white py-[120px]">
      <div className="absolute top-0 w-full border-t border-neutral-200" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-50/30 via-transparent to-transparent" />

      <Container className="relative z-10">
        {/* Header Section */}
        <div className="mb-24 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="label mb-8 block uppercase text-[#E87830]">
              RELATED SERVICES
            </span>
            <h2 className="section-title mb-6 tracking-[-0.02em] text-neutral-900">
              Explore More
              <br />
              Engineering Solutions
            </h2>
            <p className="body-lg mb-4 text-neutral-600">
              Many of our clients combine multiple services to build secure,
              scalable, and future-ready digital ecosystems.
            </p>
            <p className="text-sm text-neutral-400 italic">
              Discover our complete portfolio of enterprise services.
            </p>
          </div>

          <div className="lg:mb-2">
            <Button
              href="/services"
              variant="secondary"
              className="group flex items-center gap-2 border border-neutral-200 bg-white px-6 py-3 transition-all hover:-translate-y-0.5 hover:border-[#E87830]"
            >
              View All Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {relatedServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative flex h-full flex-col border border-neutral-200 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#E87830] hover:shadow-xl"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-[16px] font-bold text-neutral-400">
                    0{i + 1}
                  </span>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-neutral-200 bg-white transition-colors duration-500 group-hover:border-[#E87830]">
                    <Icon
                      className="text-[#E87830] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[2deg]"
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                <div className="flex flex-grow flex-col">
                  <h3 className="card-title mb-3 text-neutral-900 transition-transform duration-500 group-hover:translate-x-1">
                    {service.title}
                  </h3>
                  <p className="body mb-8 text-neutral-500 transition-colors duration-500 group-hover:text-neutral-700">
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="mb-4 h-[1px] w-full overflow-hidden bg-neutral-200">
                    <div className="h-full w-full origin-left scale-x-0 bg-[#E87830] transition-transform duration-500 group-hover:scale-x-100" />
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-2 text-sm font-bold text-neutral-900 transition-colors hover:text-[#E87830]"
                  >
                    View Service
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}