"use client";

import { ButtonState } from "@/types/game";
import GameButton from "./GameButton";

interface GameBoardProps {
  buttons: ButtonState[];
  onButtonPress?: (index: number) => void;
}

export default function GameBoard({ buttons, onButtonPress }: GameBoardProps) {
  return (
    <div
      className="
        grid gap-3 p-3 w-full max-w-2xl mx-auto
        h-full md:h-auto
        grid-cols-2 grid-rows-4
        md:grid-cols-4 md:grid-rows-2
        portrait:grid-cols-2 portrait:grid-rows-4
      "
    >
      {buttons.map((state, i) => (
        <GameButton
          key={i}
          index={i}
          state={state}
          onPress={onButtonPress}
        />
      ))}
    </div>
  );
}
