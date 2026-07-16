import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/shared/Container";

export default function AboutCTA() {
  return (
    <section className="bg-[#FCFAF8] py-20 md:py-24 lg:py-32">
      <Container>
        <div className="rounded-[24px] bg-[#181411] p-6 text-white sm:p-8 md:rounded-[36px] md:p-10 lg:p-16">
          <h2 className="hero-title tracking-tight text-white">
            Have an idea worth building?
          </h2>

          <p className="body-lg mt-6 max-w-full text-neutral-400 md:max-w-xl">
            Let's discuss your goals and explore how technology can help
            accelerate your growth.
          </p>

          <div className="mt-8 md:mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 border-b border-[#E87830]/40 pb-1 font-semibold text-white transition-colors hover:border-[#E87830]"
              aria-label="Contact us to discuss your project idea"
            >
              Let's talk
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}