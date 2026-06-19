import Image from "next/image";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import Button from "@/components/shared/Button";

export const metadata = {
  title: "About Cosmolix",
  description:
    "Learn about Cosmolix Private Limited, our mission and leadership.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#1A1714] text-white py-32">
        <Container>
          <div className="max-w-4xl">
            <p className="uppercase tracking-[0.2em] text-[#E87830] mb-6">
              ABOUT COSMOLIX
            </p>

            <h1 className="text-6xl font-bold">
              Building Technology
              <br />
              For The Future.
            </h1>

            <p className="mt-8 text-lg text-neutral-300 max-w-2xl">
              Cosmolix Private Limited is focused on
              software development, artificial intelligence,
              cloud solutions and enterprise technology services.
            </p>
          </div>
        </Container>
      </section>

      {/* Founders */}
      <Section>
        <Container>
          <h2 className="text-4xl font-bold mb-12">
            Leadership
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border p-8">
              <div className="mb-6">
                <Image
                  src="/founders/pratham.png"
                  alt="Prathamesh Bhil"
                  width={120}
                  height={120}
                  className="
                    rounded-full
                    object-cover
                  "
                />
              </div>

              <h3 className="text-2xl font-semibold">
                Prathamesh Narayan Bhil
              </h3>

              <p className="text-neutral-600 mt-2">
                Founder & Director
              </p>
            </div>

            <div className="border p-8">
              <div className="mb-6">
                <Image
                  src="/founders/dhanesh.jpeg"
                  alt="Dhanesh Dinesh Shingade"
                  width={120}
                  height={120}
                  className="
                    rounded-full
                    object-cover
                  "
                />
              </div>

              <h3 className="text-2xl font-semibold">
                Dhanesh Dinesh Shingade
              </h3>

              <p className="text-neutral-600 mt-2">
                Director
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Company Facts */}
      <Section className="bg-neutral-50">
        <Container>
          <h2 className="text-4xl font-bold mb-12">
            Company Information
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="border p-6">
              <h3 className="font-semibold mb-2">
                Incorporation Date
              </h3>
              <p>17 February 2026</p>
            </div>

            <div className="border p-6">
              <h3 className="font-semibold mb-2">
                Registered State
              </h3>
              <p>Maharashtra, India</p>
            </div>

            <div className="border p-6">
              <h3 className="font-semibold mb-2">
                Authorized Capital
              </h3>
              <p>₹5,00,000</p>
            </div>

            <div className="border p-6">
              <h3 className="font-semibold mb-2">
                Business Activities
              </h3>
              <p>
                Software Development, AI/ML,
                Cloud Solutions and IT Services
              </p>
            </div>

          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Let's Build Together
            </h2>

            <div className="mt-8">
              <Button href="/contact">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}