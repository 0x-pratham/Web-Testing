import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="bg-[#F5F1EA] min-h-[90vh] flex items-center">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="max-w-4xl">
            <p className="text-[#E87830] uppercase tracking-[0.2em] text-sm mb-6">
              COSMOLIX PRIVATE LIMITED
            </p>

            <h1 className="font-[var(--font-sora)] text-5xl md:text-7xl font-light leading-tight">
              We Build
              <br />
              <span className="font-bold">
                Intelligent Systems
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg text-neutral-700">
              Custom software, AI solutions, cloud
              platforms, and enterprise technology
              engineered for growth.
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

            <div className="mt-16 grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-3xl font-bold">
                  AI
                </h3>
                <p className="text-neutral-500">
                  Research & Deployment
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  SaaS
                </h3>
                <p className="text-neutral-500">
                  Cloud Platforms
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  IT
                </h3>
                <p className="text-neutral-500">
                  Enterprise Services
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}