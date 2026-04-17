"use client";

import { ButtonState, Score } from "@/types/game";
import HUD from "@/components/hud/HUD";
import GameBoard from "@/components/game/GameBoard";
import SkillsPanel from "@/components/panels/SkillsPanel";
import ScrollBoard from "@/components/panels/ScrollBoard";
import MobileTicker from "@/components/panels/MobileTicker";

interface GamePlayProps {
  score: number;
  timeRemaining: number;
  buttons: ButtonState[];
  leaderboard: Score[];
  onButtonPress?: (index: number) => void;
}

export default function GamePlay({
  score,
  timeRemaining,
  buttons,
  leaderboard,
  onButtonPress,
}: GamePlayProps) {
  return (
    <div className="flex flex-col h-full">
      {/* 3-column layout: skills | center | leaderboard */}
      <div className="flex flex-1 items-stretch gap-2 p-2 md:p-4 pb-10 lg:pb-4">
        {/* <SkillsPanel /> */}

        <div className="flex flex-col flex-1 gap-3 min-w-0 min-h-0 container mx-auto">
          <HUD score={score} timeRemaining={timeRemaining} />
          <div className="flex-1 flex items-center justify-center">
            <GameBoard buttons={buttons} onButtonPress={onButtonPress} />
          </div>
        </div>

        {/* <ScrollBoard scores={leaderboard} /> */}
      </div>

      <MobileTicker scores={leaderboard} />
    </div>
  );
}
