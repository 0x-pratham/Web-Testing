export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />
      
      {/* Ambient Glows */}
      <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-orange-500/10 blur-[120px] rounded-full" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full" />
    </div>
  );
}