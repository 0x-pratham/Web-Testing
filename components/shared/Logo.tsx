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
    <div className="flex items-center gap-3 select-none">
      <Image
        src="/brand/cosmolix-mark.png"
        alt="Cosmolix Logo"
        width={size}
        height={size}
        priority
        className="object-contain"
      />

      {showText && (
        <div className="flex flex-col justify-center">
          <h2 className="font-[var(--font-sora)] text-base font-bold tracking-[0.15em] text-neutral-900 leading-none">
            COSMOLIX
          </h2>

          <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mt-1 font-medium">
            Beyond Limits
          </p>
        </div>
      )}
    </div>
  );
}