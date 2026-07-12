import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";

export default function ServiceCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#E87830]/10 to-transparent">
      <Container className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Something Exceptional?</h2>
          <p className="text-lg text-neutral-600 mb-10">Let our experts design the perfect strategy to accelerate your digital transformation journey.</p>
          <Button href="/contact">Start Project</Button>
        </div>
      </Container>
    </section>
  );
}