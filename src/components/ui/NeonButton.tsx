"use client";

interface NeonButtonProps {
  label: string;
  color?: "green" | "gray";
  onClick?: () => void;
  className?: string;
}

export default function NeonButton({
  label,
  color = "green",
  onClick,
  className = "",
}: NeonButtonProps) {
  const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick?.();
  };

  if (color === "gray") {
    return (
      <button
        onClick={onClick}
        onTouchStart={handleTouchStart}
        style={{ touchAction: "manipulation" }}
        className={`
          px-8 py-3 rounded-xl border-2 border-white/30 uppercase
          tracking-widest font-bold text-white/80 cursor-pointer
          transition-all duration-150
          hover:border-white/60 hover:text-white
          active:scale-95
          ${className}
        `}
      >
        {label}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      onTouchStart={handleTouchStart}
      style={{ touchAction: "manipulation" }}
      className={`
        px-10 py-4 rounded-xl uppercase tracking-widest font-bold
        cursor-pointer transition-all duration-150
        bg-[#39FF14] text-[#1A1A1A] glow-green pulse-scale
        hover:brightness-110
        active:scale-95
        ${className}
      `}
    >
      {label}
    </button>
  );
}
