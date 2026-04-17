"use client";

import { useCallback, useRef, useState } from "react";
import { ButtonState, NEON_COLORS, BUTTON_DEFAULT_COLOR } from "@/types/game";

interface GameButtonProps {
  state: ButtonState;
  index: number;
  onPress?: (index: number) => void;
}

interface FloatingLabel {
  id: number;
  text: string;
  color: string;
}

const GLOW_CLASS: Record<string, string> = {
  orange: "glow-orange",
  green: "glow-green",
  yellow: "glow-yellow",
  blue: "glow-blue",
  purple: "glow-purple",
};

const TARGET_COLORS = new Set(["orange", "green", "yellow", "blue"]);

export default function GameButton({ state, index, onPress }: GameButtonProps) {
  const isActive = state !== "default" && state !== "pressed";
  const bgColor = isActive
    ? NEON_COLORS[state as keyof typeof NEON_COLORS]
    : BUTTON_DEFAULT_COLOR;
  const glowClass = isActive ? GLOW_CLASS[state] ?? "" : "";
  const borderColor = isActive
    ? NEON_COLORS[state as keyof typeof NEON_COLORS]
    : "rgba(8, 247, 254, 0.2)";

  const [labels, setLabels] = useState<FloatingLabel[]>([]);
  const nextId = useRef(0);

  const handleInteraction = useCallback(() => {
    if (TARGET_COLORS.has(state)) {
      const id = nextId.current++;
      setLabels((prev) => [
        ...prev,
        { id, text: "+1", color: "#39FF14" },
      ]);
      setTimeout(() => setLabels((prev) => prev.filter((l) => l.id !== id)), 850);
    } else if (state === "purple") {
      const id = nextId.current++;
      setLabels((prev) => [
        ...prev,
        { id, text: "-3", color: "#FF3131" },
      ]);
      setTimeout(() => setLabels((prev) => prev.filter((l) => l.id !== id)), 850);
    }
    onPress?.(index);
  }, [state, index, onPress]);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLButtonElement>) => {
      e.preventDefault();
      handleInteraction();
    },
    [handleInteraction]
  );

  return (
    <div className="relative w-full h-full md:h-auto md:aspect-square">
      <button
        onClick={handleInteraction}
        onTouchStart={handleTouchStart}
        className={`
          absolute inset-0 rounded-2xl border-2 cursor-pointer
          transition-all duration-150 ease-out overflow-hidden
          ${glowClass}
          ${state === "pressed" ? "scale-95 brightness-75" : ""}
          active:scale-95 active:brightness-75
        `}
        style={{
          backgroundColor: bgColor,
          borderColor,
          touchAction: "manipulation",
        }}
      >
        {/* Bevel highlight */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      </button>

      {/* Floating score labels — rendered outside the button so they're not clipped */}
      {labels.map((label) => (
        <span
          key={label.id}
          className="absolute left-1/2 bottom-1/2 -translate-x-1/2 pointer-events-none font-bold text-lg float-up z-50"
          style={{
            color: label.color,
            textShadow: `0 0 8px ${label.color}, 0 0 20px ${label.color}`,
          }}
        >
          {label.text}
        </span>
      ))}
    </div>
  );
}
