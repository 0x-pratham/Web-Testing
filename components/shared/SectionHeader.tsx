type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <div className="max-w-3xl mb-16">
      {eyebrow && (
        <p className="text-[#E87830] uppercase tracking-[0.2em] text-sm mb-4">
          {eyebrow}
        </p>
      )}

      <h2 className="font-[var(--font-sora)] text-4xl md:text-5xl font-bold">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-neutral-600 text-lg">
          {description}
        </p>
      )}
    </div>
  );
}