import Link from "next/link";
import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";

export default function Footer() {
  return (
    <footer className="bg-[#1A1714] text-white border-t-2 border-[#E87830]">
      <Container>
        <div className="grid md:grid-cols-4 gap-12 py-20">

          <div>
            <Logo
              size={52}
              showText={false}
            />

            <p className="mt-4 text-sm text-neutral-400">
              Custom software, AI solutions and
              enterprise technology services.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Services
            </h3>

            <div className="space-y-3">
              <Link href="/services/ai-ml">
                AI & ML
              </Link>

              <Link href="/services/software">
                Software
              </Link>

              <Link href="/services/training">
                Training
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Company
            </h3>

            <div className="space-y-3">
              <Link href="/about">
                About
              </Link>

              <Link href="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Legal
            </h3>

            <p className="text-sm text-neutral-400">
              COSMOLIX PRIVATE LIMITED
            </p>

            <p className="text-sm text-neutral-400 mt-2">
              Maharashtra, India
            </p>
          </div>

        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-neutral-500">
          © 2026 COSMOLIX PRIVATE LIMITED.
        </div>
      </Container>
    </footer>
  );
}