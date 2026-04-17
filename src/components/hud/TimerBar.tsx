"use client";

import { GAME_DURATION } from "@/types/game";

interface TimerBarProps {
  timeRemaining: number;
}

export default function TimerBar({ timeRemaining }: TimerBarProps) {
  const pct = (timeRemaining / GAME_DURATION) * 100;

  const fillColor =
    pct > 50 ? "#39FF14" : pct > 25 ? "#FFF01F" : "#FF3131";

  // Format time: show as full seconds, no milliseconds
  const timeText = Math.ceil(timeRemaining);

  return (
    <div className="relative h-7 flex-1 max-w-[200px] md:max-w-[260px] rounded-md bg-black/60 border border-white/10 overflow-hidden">
      <div
        className="absolute inset-y-0 left-0 rounded-md transition-all duration-300 ease-linear"
        style={{ width: `${pct}%`, backgroundColor: fillColor }}
      />
      <span className="relative z-10 flex items-center justify-center h-full text-[10px] md:text-xs font-bold tracking-widest text-white uppercase">
        {timeText} s
      </span>
    </div>
  );
}
