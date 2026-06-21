type Props = {
  children: React.ReactNode;
};

export default function SectionLabel({
  children,
}: Props) {
  return (
    <div
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-[#E87830]/20
        bg-[#E87830]/10
        px-4
        py-2
        mb-6
      "
    >
      <span
        className="
          uppercase
          tracking-[0.14em]
          text-xs
          text-[#E87830]
        "
      >
        {children}
      </span>
    </div>
  );
}