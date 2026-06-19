import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">

        <h1 className="text-7xl font-bold text-neutral-900">
          404
        </h1>

        <p className="mt-4 text-neutral-500 text-lg">
          Page not found.
        </p>

        <Link
          href="/"
          className="
            inline-block
            mt-8
            bg-[#E87830]
            text-white
            font-medium
            px-6
            py-3
            rounded-sm
            hover:bg-[#cf6524]
            transition-colors
            duration-200
          "
        >
          Return Home
        </Link>

      </div>
    </div>
  );
}