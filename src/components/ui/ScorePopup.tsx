"use client";

interface ScorePopupProps {
  value: number;
  x: number;
  y: number;
}

export default function ScorePopup({ value, x, y }: ScorePopupProps) {
  const color =
    value > 0 ? "text-[#39FF14] glow-text-green" : "text-[#FF3131] glow-text-red";

  return (
    <span
      className={`absolute pointer-events-none font-bold text-xl float-up ${color}`}
      style={{ left: x, top: y }}
    >
      {value > 0 ? `+${value}` : value}
    </span>
  );
}
