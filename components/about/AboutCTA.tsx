import Link from "next/link";
import Container from "@/components/shared/Container";

export default function AboutCTA() {
  return (
    <section className="py-24">
      <Container>
        <div className="rounded-[36px] bg-[#181411] p-10 lg:p-16 text-white">
          <h2 className="max-w-3xl text-4xl md:text-5xl font-bold tracking-[-0.05em]">
            Have an idea worth building?
          </h2>

          <p className="mt-6 max-w-xl text-neutral-400 leading-relaxed">
            Let's discuss your goals and explore how technology can help
            accelerate your growth.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-b border-[#E87830]/40 pb-1 text-white font-medium hover:border-[#E87830]"
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