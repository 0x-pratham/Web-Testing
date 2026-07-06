// components/shared/Container.tsx

type ContainerProps = {
  children: React.ReactNode;
  className?: string; // Add this line
};

export default function Container({
  children,
  className = "", // Add this default parameter
}: ContainerProps) {
  return (
    // Append the className to your existing classes
    <div className={`mx-auto max-w-7xl px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}