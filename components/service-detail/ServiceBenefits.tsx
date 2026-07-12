import Container from "@/components/shared/Container";
import { ShieldCheck } from "lucide-react";

export default function ServiceBenefits({ benefits }: { benefits: string[] }) {
  return (
    <section className="py-24 bg-white">
      <Container>
        <h2 className="text-4xl font-bold mb-16">Key Benefits</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((item, i) => (
            <div key={i} className="p-8 border border-neutral-100 rounded-xl hover:shadow-lg transition-all">
              <ShieldCheck className="text-[#E87830] mb-6" size={32} />
              <h4 className="font-bold text-xl mb-3">{item}</h4>
              <p className="text-neutral-500 leading-relaxed">Delivering measurable value and long-term operational success for your enterprise.</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}