import Link from "next/link";
import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";

export default function Footer() {
  return (
    <footer className="bg-[#1A1714] text-white border-t-2 border-[#E87830]">
      <Container>
        <div className="grid md:grid-cols-4 gap-12 py-20">

          {/* Column 1: Brand */}
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

          {/* Column 2: Services */}
          <div>
            <h3 className="font-semibold mb-4">
              Services
            </h3>

            <div className="flex flex-col space-y-3 text-sm text-neutral-400">
              <Link href="/services/ai-ml" className="hover:text-white transition">
                AI & ML
              </Link>

              <Link href="/services/software" className="hover:text-white transition">
                Software
              </Link>

              <Link href="/services/cybersecurity" className="hover:text-white transition">
                Cybersecurity
              </Link>

              <Link href="/services/cloud" className="hover:text-white transition">
                Cloud
              </Link>

              <Link href="/services/devops" className="hover:text-white transition">
                DevOps
              </Link>
            </div>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-semibold mb-4">
              Company
            </h3>

            <div className="flex flex-col space-y-3 text-sm text-neutral-400">
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>

              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-neutral-400">
              <p>
                info@cosmolix.co.in
              </p>

              <p>
                Maharashtra, India
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} COSMOLIX PRIVATE LIMITED. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}