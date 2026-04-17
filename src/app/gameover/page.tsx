"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useGame, GUEST_HS_KEY } from "@/context/GameContext";
import { useAuth } from "@/context/AuthContext";
import { submitScore } from "@/lib/firebase";
import GameOver from "@/components/screens/GameOver";

export default function GameOverPage() {
  const router = useRouter();
  const { user } = useAuth();
  const { score, highScore, setHighScore, stats, fetchLeaderboard, startGame, goToMenu } =
    useGame();

  const isNewBest = score > highScore;
  const scoreSavedRef = useRef(false);

  // Update personal best and persist guest score
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      if (!user) {
        localStorage.setItem(GUEST_HS_KEY, String(score));
      }
    }
  }, [score, highScore, setHighScore, user]);

  // Submit score to leaderboard for logged-in users (once per game over visit)
  useEffect(() => {
    if (user && !scoreSavedRef.current) {
      scoreSavedRef.current = true;
      const name = user.displayName ?? user.email ?? "Player";
      submitScore(name, score, user.uid)
        .then(() => fetchLeaderboard())
        .catch(console.error);
    }
  }, [user, score, fetchLeaderboard]);

  return (
    <main className="h-full relative">
      <GameOver
        score={score}
        isNewBest={isNewBest}
        stats={stats}
        isLoggedIn={!!user}
        onPlayAgain={startGame}
        onMainMenu={goToMenu}
        onSignIn={() => router.push("/signin")}
      />
    </main>
  );
}
