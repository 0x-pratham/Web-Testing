import Container from "@/components/shared/Container";

const items = [
  "6 Service Lines",
  "4-Stage Delivery Method",
  "Dedicated Point of Contact",
  "Response Within 2 Business Days",
];

export default function TrustStrip() {
  return (
    <section className="border-y border-neutral-200 bg-white">
      <Container>
        <div className="py-5">

          <div className="
            flex
            flex-wrap
            justify-center
            items-center
            gap-4
            text-sm
            md:text-base
            text-neutral-600
          ">
            {items.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4"
              >
                <span>{item}</span>

                {index !== items.length - 1 && (
                  <span className="text-[#E87830]">
                    •
                  </span>
                )}
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}