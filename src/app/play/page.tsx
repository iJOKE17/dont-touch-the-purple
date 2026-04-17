"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { GAME_DURATION } from "@/types/game";
import { randomButtons } from "@/context/GameContext";
import { useGame } from "@/context/GameContext";
import GamePlay from "@/components/screens/GamePlay";

function getColorInterval(timeRemaining: number): number {
  if (timeRemaining > 25) return 1200;
  if (timeRemaining > 20) return 1100;
  if (timeRemaining > 15) return 1000;
  return 800;
}

export default function PlayPage() {
  const router = useRouter();
  const { score, setScore, stats, setStats, buttons, setButtons, leaderboard } =
    useGame();

  const [timeRemaining, setTimeRemaining] = useState(GAME_DURATION);
  const timeRemainingRef = useRef(timeRemaining);

  useEffect(() => {
    timeRemainingRef.current = timeRemaining;
  }, [timeRemaining]);

  // Speed up button color cycling as time runs out
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    function scheduleNext() {
      const interval = getColorInterval(timeRemainingRef.current);
      timeoutId = setTimeout(() => {
        setButtons(randomButtons());
        scheduleNext();
      }, interval);
    }

    scheduleNext();

    return () => clearTimeout(timeoutId);
  }, [setButtons]);

  useEffect(() => {
    if (timeRemaining <= 0) {
      router.push("/gameover");
    }
  }, [timeRemaining, router]);

  // Countdown timer — navigate to /gameover when it hits zero
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prev) => Math.max(0, prev - 0.1));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleButtonPress = useCallback(
    (index: number) => {
      const state = buttons[index];

      if (state === "default" || state === "pressed") return;

      if (state === "purple") {
        setScore((s) => s - 3);
        setStats((s) => ({ ...s, purpleTaps: s.purpleTaps + 1 }));
      } else {
        setScore((s) => s + 1);
        setStats((s) => ({ ...s, correctTaps: s.correctTaps + 1 }));
      }

      setButtons((prev) => {
        const next = [...prev];
        next[index] = "pressed";
        return next;
      });
    },
    [buttons, setScore, setStats, setButtons]
  );

  return (
    <main className="h-full pt-16 relative">
      <GamePlay
        score={score}
        timeRemaining={timeRemaining}
        buttons={buttons}
        leaderboard={leaderboard}
        onButtonPress={handleButtonPress}
      />
    </main>
  );
}
