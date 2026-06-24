import Image from "next/image";

interface Props {
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise?: string[];
}

export default function FounderCard({
  name,
  role,
  image,
  bio,
  expertise,
}: Props) {
  // Graceful runtime guard to eliminate Next.js/React empty source string errors
  const hasValidImage = image && image.trim() !== "";

  return (
    <div
      className="
        group
        relative
        h-full
        overflow-hidden
        rounded-[32px]
        bg-white
        border
        border-neutral-200/40
        transition-all
        duration-500
        ease-[cubic-bezier(0.16,1,0.3,1)]
        hover:-translate-y-1.5
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)]
      "
    >
      {/* Tiny signature accent line layer */}
      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-[2px]
          bg-transparent
          transition-colors
          duration-300
          group-hover:bg-[#E87830]
          z-10
        "
      />

      {/* Replaced Fake Image Container with Executive Layout */}
      <div className="px-5 pt-5 flex flex-col items-start">
        <div
          className="
            inline-flex
            overflow-hidden
            rounded-[20px]
            bg-[#F8F5F2]
          "
        >
          {hasValidImage ? (
            <Image
              src={image}
              alt={name}
              width={180}
              height={220}
              className="
                object-cover
                transition-transform
                duration-700
                ease-[cubic-bezier(0.16,1,0.3,1)]
                group-hover:scale-[1.02]
              "
            />
          ) : (
            <div className="w-[180px] h-[220px] flex items-center justify-center text-neutral-300 text-xs font-light select-none">
              Portrait Not Specified
            </div>
          )}
        </div>
      </div>

      {/* Premium Content Padding Partition */}
      <div className="p-6">
        {/* Name Typography */}
        <h3
          className="
            text-[1.55rem]
            md:text-[1.7rem]
            font-semibold
            tracking-[-0.04em]
            leading-tight
            text-neutral-950
          "
        >
          {name}
        </h3>

        {/* Executive Role Interface Anchor */}
        <div className="mt-3 flex items-center gap-3">
          <div className="h-px w-10 bg-[#E87830]/30" />
          <p className="text-sm font-medium tracking-tight text-neutral-500">
            {role}
          </p>
        </div>

        {/* Editorial Content Presentation Matrix */}
        <p className="mt-5 text-[14px] leading-6 text-neutral-600 font-light tracking-wide antialiased">
          {bio}
        </p>

        {/* Dynamic Expertise Tag Support Block */}
        {expertise && expertise.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-1.5">
            {expertise.map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  bg-neutral-50
                  border
                  border-neutral-100
                  px-3
                  py-1
                  text-[11px]
                  font-medium
                  tracking-wide
                  text-neutral-500
                  transition-colors
                  duration-300
                  group-hover:bg-white
                  group-hover:border-neutral-200/60
                "
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}