import Container from "@/components/shared/Container";
import ContactForm from "@/components/contact/ContactForm";
import ContactBenefits from "@/components/contact/ContactBenefits";

export const metadata = {
  title: "Contact Cosmolix | Let's Build the Future",
  description: "Get in touch with Cosmolix for enterprise-grade software, AI, and cybersecurity solutions.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FDFCFB]">
      <section className="relative overflow-hidden pb-20 pt-28 sm:pt-32 lg:pb-24 lg:pt-32">
        {/* Background Glows */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -right-[5%] -top-[10%] h-[600px] w-[600px] rounded-full bg-[#E87830]/5 blur-[120px]" />
          <div className="absolute -left-[10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-cyan-400/[0.03] blur-[100px]" />
        </div>

        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
            {/* Left Side */}
            <div className="relative">
              <span className="label uppercase text-[#E87830]">
                Contact Us
              </span>
              <h1 className="hero-title mt-6 tracking-tight text-neutral-950">
                Let's engineer <br />
                <span className="bg-gradient-to-r from-[#E87830] to-[#C96A2B] bg-clip-text text-transparent">
                  your vision.
                </span>
              </h1>

              <p className="body-lg mt-8 max-w-lg text-neutral-600">
                Partner with us to build high-scale software, intelligent AI models, and resilient security frameworks. We turn complex problems into elegant solutions.
              </p>

              {/* Contact Info */}
              <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E87830] md:p-6">
                  <p className="label uppercase tracking-widest text-neutral-400">Email Us</p>
                  <a 
                    href="mailto:info@cosmolix.co.in" 
                    className="mt-2 block text-[18px] font-semibold text-neutral-900 transition-colors group-hover:text-[#E87830]"
                  >
                    info@cosmolix.co.in
                  </a>
                </div>
                <div className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E87830] md:p-6">
                  <p className="label uppercase tracking-widest text-neutral-400">Our HQ</p>
                  <address className="mt-2 block text-[18px] font-semibold text-neutral-900 not-italic">
                    Pune, Maharashtra, India
                  </address>
                </div>
              </div>

              <div className="mt-10 rounded-3xl border border-[#E87830]/10 bg-gradient-to-br from-white to-[#F9F7F4] p-6 md:mt-12 md:p-8">
                <ContactBenefits />
              </div>
            </div>

            {/* Right Side Sticky Form */}
            <div className="lg:sticky lg:top-32">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}