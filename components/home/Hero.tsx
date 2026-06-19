import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[#F5F1EA]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div className="max-w-4xl">
            <p className="text-[#E87830] uppercase tracking-[0.2em] text-sm mb-6">
              COSMOLIX PRIVATE LIMITED
            </p>

            <h1 className="font-[var(--font-sora)] text-5xl md:text-7xl font-bold leading-[1.05]">
              Technology Solutions
              <br />
              Built For
              <span className="text-[#E87830]">
                {" "}Growth.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg text-neutral-700">
              We help organizations design, build and
              operate modern technology platforms across
              software, artificial intelligence, cloud and
              digital transformation initiatives.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact">
                Start a Project
              </Button>

              <Button
                href="/services/ai-ml"
                variant="secondary"
              >
                Explore Services
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16">
              <div>
                <h3 className="text-3xl font-bold">
                  12+
                </h3>

                <p className="text-neutral-500">
                  Service Lines
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  End-to-End
                </h3>

                <p className="text-neutral-500">
                  Technology Delivery
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  Build + Run
                </h3>

                <p className="text-neutral-500">
                  Technology Services
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}