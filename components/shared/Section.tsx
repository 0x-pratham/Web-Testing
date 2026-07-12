type SectionProps = {
  children: React.ReactNode;
  className?: string;
  spacing?: "default" | "compact" | "hero";
};

const spacingClasses = {
  compact: "py-16 md:py-20 xl:py-24",
  default: "py-[90px] md:py-[110px] xl:py-[140px]",
  hero: "pt-32 pb-20 md:pt-40 md:pb-28",
};

export default function Section({
  children,
  className,
  spacing = "default",
}: SectionProps) {
  return (
    <section
      className={`
        relative
        isolate
        overflow-hidden
        ${spacingClasses[spacing]}
        ${className || ""}
      `}
    >
      {children}
    </section>
  );
}