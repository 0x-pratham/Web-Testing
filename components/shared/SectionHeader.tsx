type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <div
      className={`
        max-w-[760px]
        mb-14
        lg:mb-16
        ${align === "center" ? "mx-auto text-center" : "text-left"}
      `}
    >
      {eyebrow && (
        <p
          className={`
            font-body
            text-[12px]
            font-semibold
            uppercase
            tracking-[0.22em]
            text-[#E87830]
            mb-5
            ${align === "center" ? "mx-auto" : ""}
          `}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className="
          font-heading
          text-[34px]
          sm:text-[40px]
          lg:text-[46px]
          xl:text-[52px]
          font-bold
          leading-[1.08]
          tracking-[-0.03em]
          text-neutral-900
          text-balance
        "
      >
        {title}
      </h2>

      {/* Divider line */}
      <div
        className={`
          mt-8
          h-px
          w-16
          bg-[#E87830]/25
          ${align === "center" ? "mx-auto" : ""}
        `}
      />

      {description && (
        <>
          {/* Center description only when align="center" */}
          <p
            className={`
              mt-7
              max-w-[680px]
              font-body
              text-[16px]
              sm:text-[17px]
              lg:text-[18px]
              leading-[1.8]
              text-neutral-600
              text-pretty
              ${align === "center" ? "mx-auto" : "mx-0"}
            `}
          >
            {description}
          </p>
        </>
      )}
    </div>
  );
}