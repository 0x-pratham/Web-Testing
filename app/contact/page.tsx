import Container from "@/components/shared/Container";
import ContactForm from "@/components/contact/ContactForm";
import ContactBenefits from "@/components/contact/ContactBenefits";

export const metadata = {
  title: "Contact Cosmolix",
  description:
    "Contact Cosmolix Private Limited for software, AI and IT solutions.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="relative pt-28 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* Top Right Glow */}
          <div
            className="
              absolute
              top-0
              right-0
              h-[500px]
              w-[500px]
              rounded-full
              bg-[#E87830]/4
              blur-[120px]
            "
          />
          {/* Bottom Left Glow */}
          <div
            className="
              absolute
              bottom-0
              left-0
              h-[300px]
              w-[300px]
              rounded-full
              bg-cyan-400/[0.02]
              blur-[120px]
            "
          />
        </div>

        <Container>
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-16 relative">
            {/* Subtle Vertical Accent Line */}
            <div className="hidden lg:block absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[#E87830]/20 to-transparent -ml-8" />

            {/* Left Side */}
            <div>
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#E87830]/15
                  px-4
                  py-2
                  text-[11px]
                  uppercase
                  tracking-[0.22em]
                  text-[#E87830]
                "
              >
                GET IN TOUCH
              </span>

              <h1
                className="
                  mt-6
                  text-5xl
                  md:text-6xl
                  lg:text-7xl
                  font-semibold
                  tracking-[-0.07em]
                  leading-[0.9]
                "
              >
                Technology built for<br />growth, security and{" "}
                <span className="text-[#C96A2B]">
                  scale.
                </span>
              </h1>

              <p className="mt-8 text-lg text-neutral-600">
                Whether you're launching a new product, modernizing infrastructure or strengthening security, our team is ready to help you move forward with confidence.
              </p>

              <div className="mt-8 h-px w-20 bg-[#E87830]/20" />

              <div className="flex flex-wrap gap-3 mt-10">
                <span className="
                  group
                  rounded-full
                  border
                  border-[#E87830]/10
                  bg-[#E87830]/[0.03]
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  text-neutral-700
                  transition-all
                  duration-300
                  hover:border-[#E87830]/25
                  hover:bg-[#E87830]/[0.06]
                ">
                  Software Engineering
                </span>
                <span className="
                  group
                  rounded-full
                  border
                  border-[#E87830]/10
                  bg-[#E87830]/[0.03]
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  text-neutral-700
                  transition-all
                  duration-300
                  hover:border-[#E87830]/25
                  hover:bg-[#E87830]/[0.06]
                ">
                  Cloud & SaaS
                </span>
                <span className="
                  group
                  rounded-full
                  border
                  border-[#E87830]/10
                  bg-[#E87830]/[0.03]
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  text-neutral-700
                  transition-all
                  duration-300
                  hover:border-[#E87830]/25
                  hover:bg-[#E87830]/[0.06]
                ">
                  Cyber Security
                </span>
              </div>

              <div className="
                mt-14
                flex
                items-center
                gap-3
                text-sm
                text-neutral-500
              ">
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div
                  className="
                    rounded-2xl
                    border
                    border-neutral-200/60
                    bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(248,245,242,0.7))]
                    p-5
                    transition-all
                    duration-300
                    hover:border-[#E87830]/20
                  "
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#E87830]" />
                    <div className="h-px w-8 bg-[#E87830]/20" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-neutral-400">
                      Primary Contact
                    </p>
                    <p className="mt-2 font-medium">
                      info@cosmolix.co.in
                    </p>
                  </div>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-neutral-200/60
                    bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(248,245,242,0.7))]
                    p-5
                    transition-all
                    duration-300
                    hover:border-[#E87830]/20
                  "
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#E87830]" />
                    <div className="h-px w-8 bg-[#E87830]/20" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-neutral-400">
                      Based in India
                    </p>
                    <p className="mt-2 font-medium">
                      Pune, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="
                mt-12
                rounded-[28px]
                border
                border-[#E87830]/10
                bg-gradient-to-b
                from-white
                to-[#FCFAF8]
                p-6
              ">
                <ContactBenefits />
              </div>
            </div>

            {/* Right Side */}
            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}