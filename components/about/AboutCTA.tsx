import Link from "next/link";
import Container from "@/components/shared/Container";

export default function AboutCTA() {
  return (
    <section className="py-20 md:py-24 lg:py-32">
      <Container>
        <div className="rounded-[24px] md:rounded-[36px] bg-[#181411] p-6 sm:p-8 md:p-10 lg:p-16 text-white">
          <h2 className="max-w-3xl text-[42px] sm:text-[50px] md:text-[58px] lg:text-[64px] font-bold tracking-[-0.04em] leading-[1.05]">
            Have an idea worth building?
          </h2>

          <p className="mt-6 max-w-full md:max-w-xl text-[17px] md:text-[19px] leading-8 text-neutral-400">
            Let's discuss your goals and explore how technology can help
            accelerate your growth.
          </p>

          <div className="mt-8 md:mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-b border-[#E87830]/40 pb-1 text-[18px] text-white font-semibold hover:border-[#E87830]"
            >
              Let's talk
              <span className="text-[#E87830]">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}