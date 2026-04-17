"use client";

import { Score } from "@/types/game";

interface ScrollBoardProps {
  scores: Score[];
}

export default function ScrollBoard({ scores }: ScrollBoardProps) {
  return (
    <div className="hidden lg:flex flex-col gap-2 p-3 bg-black/40 backdrop-blur-sm rounded-lg border border-[#08F7FE]/20 w-[150px] shrink-0">
      <h3 className="text-[10px] font-bold tracking-widest text-[#08F7FE] uppercase text-center">
        Top 10
      </h3>
      {scores.length === 0 ? (
        <p className="text-[9px] text-white/30 text-center mt-2 tracking-wider">
          Loading…
        </p>
      ) : (
        <ol className="flex flex-col gap-1">
          {scores.slice(0, 10).map((entry, i) => (
            <li
              key={i}
              className="flex justify-between text-[10px] tracking-wider text-white/80"
            >
              <span className="truncate max-w-[60px]">
                {i + 1}. {entry.name}
              </span>
              <span>{entry.score}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
