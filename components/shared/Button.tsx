import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`
        inline-flex
        items-center
        justify-center
        px-6
        py-3
        font-medium
        transition-all
        duration-200
        
        ${
          variant === "primary"
            ? "bg-[#1A1714] text-white hover:bg-[#7A3206]"
            : "border border-[#E87830] text-[#E87830] hover:bg-[#E8783010]"
        }

        ${className}
      `}
    >
      {children}
    </Link>
  );
}