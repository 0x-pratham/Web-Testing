import Container from "@/components/shared/Container";

export default function ServiceProcess({ process }: { process: any[] }) {
  return (
    <section className="py-24">
      <Container>
        <h2 className="text-4xl font-bold mb-16 text-center">Our Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {process.map((p, i) => (
            <div key={i} className="relative">
              <div className="w-12 h-12 bg-[#E87830] text-white rounded-full flex items-center justify-center font-bold mb-4">{p.phase}</div>
              <h3 className="font-bold text-xl mb-2">{p.title}</h3>
              <p className="text-neutral-600 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}