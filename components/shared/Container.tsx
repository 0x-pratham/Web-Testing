// components/shared/Container.tsx

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`
        relative
        mx-auto
        w-full
        max-w-[1280px]
        px-5
        sm:px-6
        lg:px-8
        xl:px-10
        2xl:px-12
        supports-[padding:max(0px)]:px-[max(1.25rem,env(safe-area-inset-left))]
        supports-[padding:max(0px)]:pr-[max(1.25rem,env(safe-area-inset-right))]
        transition-[padding]
        duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}