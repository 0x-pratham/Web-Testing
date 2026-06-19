import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";

export default function CTABanner() {
  return (
    <section className="bg-[#7A3206] py-24">
      <Container>
        <div className="text-center text-white">
          <h2 className="text-5xl font-light">
            Let's Build Something
          </h2>

          <h3 className="text-5xl font-bold mt-2">
            Significant.
          </h3>

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