import Image from "next/image";

interface Props {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export default function FounderCard({
  name,
  role,
  image,
  bio,
}: Props) {
  return (
    <div
      className="
        bg-white
        p-10
        shadow-sm
        hover:shadow-xl
        transition
      "
    >
      <Image
        src={image}
        alt={name}
        width={120}
        height={120}
        className="
          rounded-full
          object-cover
        "
      />

      <h3 className="mt-6 text-2xl font-bold">
        {name}
      </h3>

      <p className="text-[#E87830]">
        {role}
      </p>

      <p className="mt-4 text-neutral-600">
        {bio}
      </p>
    </div>
  );
}