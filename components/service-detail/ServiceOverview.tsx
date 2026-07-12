import Container from "@/components/shared/Container";

export default function ServiceOverview({ data }: any) {
  return (
    <section className="py-24">
      <Container>
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-sm font-bold text-[#E87830] tracking-widest uppercase mb-4">About This Service</h2>
            <h3 className="text-4xl font-bold mb-8 leading-tight">Engineering excellence built for modern business requirements.</h3>
            <div className="text-lg text-neutral-600 leading-relaxed space-y-6">{data.description}</div>
          </div>
          <div className="lg:col-span-5 bg-neutral-50 p-10 rounded-2xl">
            <h4 className="font-bold text-xl mb-6">Why Choose Cosmolix?</h4>
            <ul className="space-y-4">{["Faster Delivery", "Secure Frameworks", "Scalable Systems", "Expert Support"].map(i => <li key={i} className="flex items-center gap-3 font-medium">✓ {i}</li>)}</ul>
          </div>
        </div>
      </Container>
    </section>
  );
}