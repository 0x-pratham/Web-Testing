type Props = {
  children: React.ReactNode;
};

export default function SectionLabel({
  children,
}: Props) {
  return (
    <p
      className="
        uppercase
        tracking-[0.2em]
        text-[#E87830]
        text-sm
        mb-4
      "
    >
      {children}
    </p>
  );
}