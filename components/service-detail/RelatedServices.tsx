"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/shared/Container";
import { services } from "@/data/services";

export default function RelatedServices({ currentSlug }: { currentSlug: string }) {
  const others = services.filter((s) => s.slug !== currentSlug).slice(0, 3);
  return (
    <section className="py-20 border-t border-neutral-100">
      <Container>
        <h2 className="text-3xl font-bold mb-12">Explore Other Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {others.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.slug} whileHover={{ y: -8 }} className="group p-8 border border-neutral-200 rounded-xl hover:border-[#E87830] transition-all">
                <Link href={`/services/${item.slug}`}>
                  <Icon className="text-[#E87830] mb-6" size={24} />
                  <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-neutral-500 mb-6 text-sm">{item.subtitle}</p>
                  <span className="flex items-center gap-2 text-[#E87830] font-semibold text-sm group-hover:gap-4 transition-all">
                    View Service <ArrowRight size={16} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}