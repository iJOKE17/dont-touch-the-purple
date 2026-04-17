"use client";

import TimerBar from "./TimerBar";

interface HUDProps {
  score: number;
  timeRemaining: number;
}

export default function HUD({ score, timeRemaining }: HUDProps) {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-lg border border-[#08F7FE]/20">
      <span className="text-lg md:text-2xl font-bold tracking-wider text-[#39FF14] glow-text-green uppercase whitespace-nowrap">
        Score: {score}
      </span>
      <TimerBar timeRemaining={timeRemaining} />
    </div>
  );
}
