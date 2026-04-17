"use client";

import { useEffect } from "react";
import MainMenu from "@/components/screens/MainMenu";
import { useGame } from "@/context/GameContext";

export default function Home() {
  const { leaderboard, fetchLeaderboard, startGame } = useGame();

  useEffect(() => {
    fetchLeaderboard();
  }, [fetchLeaderboard]);

  return (
    <main className="h-full relative">
      <MainMenu highScore={leaderboard[0]?.score ?? 0} onStart={startGame} />
    </main>
  );
}
