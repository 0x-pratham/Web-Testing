import Container from "@/components/shared/Container";
import ContactForm from "@/components/contact/ContactForm";
import ContactBenefits from "@/components/contact/ContactBenefits";

export const metadata = {
  title: "Contact Cosmolix | Let's Build the Future",
  description: "Get in touch with Cosmolix for enterprise-grade software, AI, and cybersecurity solutions.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#FDFCFB] min-h-screen">
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#E87830]/5 blur-[120px]" />
          <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-cyan-400/[0.03] blur-[100px]" />
        </div>

        <Container>
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-20 items-start">
            
            {/* Left Side */}
            <div className="relative">
              {/* Humanized Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-neutral-200 bg-white shadow-sm text-neutral-600 text-[11px] font-medium tracking-wide mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E87830] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E87830]"></span>
                </span>
                Currently open to new projects
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] text-neutral-950 leading-[1.05]">
                Let's engineer <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E87830] to-[#C96A2B]">
                  your vision.
                </span>
              </h1>

              <p className="mt-8 text-lg text-neutral-600 leading-relaxed max-w-lg">
                Partner with us to build high-scale software, intelligent AI models, and resilient security frameworks. We turn complex problems into elegant solutions.
              </p>

              {/* Contact Info */}
              <div className="mt-12 grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Email Us", value: "info@cosmolix.co.in" },
                  { label: "Our HQ", value: "Pune, Maharashtra, India" }
                ].map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-neutral-200 bg-white shadow-sm">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-semibold">{item.label}</p>
                    <p className="mt-2 font-medium text-neutral-900">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 rounded-3xl border border-[#E87830]/10 bg-gradient-to-br from-white to-[#F9F7F4]">
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