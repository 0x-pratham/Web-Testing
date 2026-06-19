import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size?: number;
  showText?: boolean;
}

export default function Logo({
  size = 44,
  showText = true,
}: LogoProps) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <Image
        src="/brand/cosmolix-mark.png"
        alt="Cosmolix Logo"
        width={size}
        height={size}
        priority
        className="object-contain"
      />

      {showText && (
        <div>
          <h2 className="font-[var(--font-sora)] text-lg font-bold tracking-wide">
            COSMOLIX
          </h2>

          <p className="text-xs text-neutral-500">
            Beyond Limites
          </p>
        </div>
      )}
    </Link>
  );
}