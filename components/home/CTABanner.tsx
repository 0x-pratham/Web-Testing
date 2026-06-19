import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";

export default function CTABanner() {
  return (
    <section className="bg-[#7A3206] py-24">
      <Container>
        <div className="text-center text-white">
          <h2 className="text-6xl font-bold">
            Let's Build
            <br />
            Something Meaningful.
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-neutral-300">
            Whether you're exploring AI, building a
            platform or modernizing operations,
            we'd love to discuss your next project.
          </p>

          <div className="mt-8">
            <Button href="/contact">
              Schedule a Discussion
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}