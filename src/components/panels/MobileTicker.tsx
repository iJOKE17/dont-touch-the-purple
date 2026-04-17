"use client";

import { Score } from "@/types/game";

interface MobileTickerProps {
  scores: Score[];
}

export default function MobileTicker({ scores }: MobileTickerProps) {
  const text = scores.length > 0
    ? scores.map((s) => `${s.name} - ${s.score}`).join(" | ")
    : "Loading scores…";

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 h-8 bg-black/60 border-t border-[#FFF01F]/40 overflow-hidden z-50">
      <div className="marquee whitespace-nowrap h-full flex items-center">
        <span className="text-xs font-bold tracking-widest text-[#FFF01F] glow-text-yellow uppercase px-4">
          High Scores: {text} &nbsp;&nbsp;&nbsp; High Scores: {text}
        </span>
      </div>
    </div>
  );
}
