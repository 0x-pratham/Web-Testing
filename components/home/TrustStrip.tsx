import Container from "@/components/shared/Container";

export default function TrustStrip() {
  return (
    <section className="bg-[#1A1714] text-white">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 text-center">
          <div>
            <h3 className="font-semibold">
              Incorporated
            </h3>
            <p className="text-sm opacity-70">
              Feb 2026
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Location
            </h3>
            <p className="text-sm opacity-70">
              Maharashtra, India
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Status
            </h3>
            <p className="text-sm opacity-70">
              MCA Registered
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Compliance
            </h3>
            <p className="text-sm opacity-70">
              Corporate Records
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}