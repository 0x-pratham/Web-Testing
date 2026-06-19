"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/data/services";

export default function MegaMenu() {
  const build = services.filter(
    (s) => s.category === "build"
  );

  const run = services.filter(
    (s) => s.category === "run"
  );

  const more = services.filter(
    (s) => s.category === "more"
  );

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.2
      }}
      className="
        absolute
        left-1/2
        -translate-x-1/2
        top-full
        mt-4
        hidden
        group-hover:block
        w-[900px]
        bg-white
        shadow-xl
        p-8
        rounded-xl
        border
        border-neutral-100
      "
    >
      <div className="grid grid-cols-3 gap-8">
        {/* Column 1: BUILD */}
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#E87830] mb-4 px-4">
            BUILD
          </div>
          <div className="space-y-1">
            {build.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="
                    flex
                    gap-4
                    p-4
                    rounded-lg
                    hover:bg-neutral-50
                    transition
                  "
                >
                  <Icon
                    size={22}
                    className="text-[#E87830] shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-sm text-neutral-900">
                      {service.title}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {service.subtitle}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Column 2: RUN */}
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#E87830] mb-4 px-4">
            RUN
          </div>
          <div className="space-y-1">
            {run.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="
                    flex
                    gap-4
                    p-4
                    rounded-lg
                    hover:bg-neutral-50
                    transition
                  "
                >
                  <Icon
                    size={22}
                    className="text-[#E87830] shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-sm text-neutral-900">
                      {service.title}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {service.subtitle}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Column 3: MORE */}
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#E87830] mb-4 px-4">
            MORE
          </div>
          <div className="space-y-1">
            {more.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="
                    flex
                    gap-4
                    p-4
                    rounded-lg
                    hover:bg-neutral-50
                    transition
                  "
                >
                  <Icon
                    size={22}
                    className="text-[#E87830] shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-sm text-neutral-900">
                      {service.title}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {service.subtitle}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}