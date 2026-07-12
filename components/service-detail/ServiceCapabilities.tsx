"use client";
import { motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import Container from "@/components/shared/Container";

export default function ServiceCapabilities({ capabilities }: { capabilities: string[] }) {
  return (
    <section className="py-24 bg-neutral-50">
      <Container>
        <h2 className="text-4xl font-bold mb-16">Capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="bg-white p-8 rounded-xl border border-neutral-100 shadow-sm hover:border-[#E87830] transition-all">
              <LayoutGrid className="text-[#E87830] mb-4" />
              <h3 className="font-bold text-lg mb-2">{item}</h3>
              <p className="text-sm text-neutral-500">Enterprise-grade implementation tailored to requirements.</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}