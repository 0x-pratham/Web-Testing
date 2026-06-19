import Container from "@/components/shared/Container";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact Cosmolix",
  description:
    "Contact Cosmolix Private Limited for software, AI and IT solutions.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="py-32">
        <Container>

          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left Side */}
            <div>

              <p className="uppercase tracking-[0.2em] text-[#E87830] mb-6">
                CONTACT
              </p>

              <h1 className="text-6xl font-bold">
                Start The
                <br />
                Conversation
              </h1>

              <p className="mt-8 text-lg text-neutral-600">
                Tell us about your project and
                we'll get back to you within
                2 business days.
              </p>

              <div className="mt-12 space-y-6">

                <div>
                  <h3 className="font-semibold">
                    Email
                  </h3>
                  <p>
                    contact@cosmolix.com
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Location
                  </h3>
                  <p>
                    Maharashtra, India
                  </p>
                </div>

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