"use client";

import { GameStats } from "@/types/game";
import NeonButton from "@/components/ui/NeonButton";

interface GameOverProps {
  score: number;
  isNewBest: boolean;
  stats: GameStats;
  isLoggedIn: boolean;
  onPlayAgain: () => void;
  onMainMenu: () => void;
  onSignIn: () => void;
}

export default function GameOver({
  score,
  isNewBest,
  stats,
  isLoggedIn,
  onPlayAgain,
  onMainMenu,
  onSignIn,
}: GameOverProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
      {/* Glitched headline */}
      <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider text-[#FF3131] glitch-text">
        Time&apos;s Up!
      </h1>

      {/* New best banner */}
      {isNewBest && (
        <span className="text-lg md:text-2xl font-bold uppercase tracking-widest text-[#FFF01F] glow-text-yellow flash">
          New Best!
        </span>
      )}

      {/* Score */}
      <span className="text-7xl md:text-9xl font-black text-white glow-text-white">
        {score}
      </span>

      {/* Stats panel */}
      <div className="w-full max-w-xs bg-black/40 backdrop-blur-sm rounded-lg border border-[#08F7FE]/20 p-4 flex flex-col gap-2">
        <StatRow
          label="Correct Taps:"
          count={stats.correctTaps}
          pts={`+${stats.correctTaps} pts`}
          ptsColor="text-[#39FF14]"
        />
        <StatRow
          label="Purple Taps:"
          count={stats.purpleTaps}
          pts={`-${stats.purpleTaps * 3} pts`}
          ptsColor="text-[#BF00FF]"
        />
        <StatRow
          label="Default Taps:"
          count={stats.defaultTaps}
          pts={`-${stats.defaultTaps} pts`}
          ptsColor="text-[#FF3131]"
        />
      </div>

      {/* Action buttons */}
      <div className="flex flex-col items-center gap-3 mt-2">
        <NeonButton
          label="Play Again"
          color="green"
          onClick={onPlayAgain}
          className="text-lg"
        />
        <NeonButton
          label="Main Menu"
          color="gray"
          onClick={onMainMenu}
          className="text-sm"
        />
        {!isLoggedIn && (
          <button
            onClick={onSignIn}
            style={{ touchAction: "manipulation" }}
            className="
              mt-1 text-xs uppercase tracking-widest
              text-[#08F7FE]/60 hover:text-[#08F7FE]
              transition-colors cursor-pointer
            "
          >
            Sign in to save to leaderboard →
          </button>
        )}
      </div>
    </div>
  );
}

function StatRow({
  label,
  count,
  pts,
  ptsColor,
}: {
  label: string;
  count: number;
  pts: string;
  ptsColor: string;
}) {
  return (
    <div className="flex items-center justify-between text-xs md:text-sm tracking-wider">
      <span className="text-white/80">
        {label} <span className="text-white font-bold">{count}</span>
      </span>
      <span className={`font-bold ${ptsColor}`}>({pts})</span>
    </div>
  );
}
