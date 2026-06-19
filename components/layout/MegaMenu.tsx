"use client";

import Link from "next/link";
import { services } from "@/data/services";

export default function MegaMenu() {
  return (
    <div
      className="
      absolute
      left-0
      top-full
      mt-4
      hidden
      group-hover:block
      w-[700px]
      bg-white
      border
      shadow-xl
      p-8
      rounded-xl
      "
    >
      <div className="grid grid-cols-2 gap-6">
        {services.map((service) => {
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
                className="text-[#E87830]"
              />

              <div>
                <h3 className="font-semibold">
                  {service.title}
                </h3>

                <p className="text-sm text-neutral-500">
                  {service.subtitle}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}