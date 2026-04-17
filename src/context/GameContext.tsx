"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useRouter } from "next/navigation";
import { ButtonState, ButtonColor, GameStats, Score } from "@/types/game";
import { getTopScores } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";

const ACTIVE_COLORS: ButtonColor[] = ["orange", "green", "yellow", "blue", "purple"];
const GUEST_HS_KEY = "guest_high_score";

export function randomButtons(): ButtonState[] {
  return Array.from({ length: 8 }, () => {
    const roll = Math.random();
    if (roll < 0.45) return "default" as ButtonState;
    return ACTIVE_COLORS[Math.floor(Math.random() * ACTIVE_COLORS.length)];
  });
}

interface GameContextValue {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  highScore: number;
  setHighScore: React.Dispatch<React.SetStateAction<number>>;
  stats: GameStats;
  setStats: React.Dispatch<React.SetStateAction<GameStats>>;
  buttons: ButtonState[];
  setButtons: React.Dispatch<React.SetStateAction<ButtonState[]>>;
  leaderboard: Score[];
  fetchLeaderboard: () => Promise<void>;
  startGame: () => void;
  goToMenu: () => void;
}

const GameContext = createContext<GameContextValue | null>(null);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [stats, setStats] = useState<GameStats>({
    correctTaps: 0,
    purpleTaps: 0,
    defaultTaps: 0,
  });
  const [buttons, setButtons] = useState<ButtonState[]>(Array(8).fill("default"));
  const [leaderboard, setLeaderboard] = useState<Score[]>([]);

  useEffect(() => {
    if (!user) {
      const saved = localStorage.getItem(GUEST_HS_KEY);
      if (saved) setHighScore(parseInt(saved, 10));
    }
  }, [user]);

  const fetchLeaderboard = useCallback(async () => {
    try {
      const entries = await getTopScores(10);
      setLeaderboard(entries);
    } catch (err) {
      console.error("Failed to fetch leaderboard:", err);
    }
  }, []);

  const startGame = useCallback(() => {
    setScore(0);
    setStats({ correctTaps: 0, purpleTaps: 0, defaultTaps: 0 });
    setButtons(randomButtons());
    router.push("/play");
  }, [router]);

  const goToMenu = useCallback(() => {
    setButtons(Array(8).fill("default"));
    router.push("/");
  }, [router]);

  return (
    <GameContext.Provider
      value={{
        score,
        setScore,
        highScore,
        setHighScore,
        stats,
        setStats,
        buttons,
        setButtons,
        leaderboard,
        fetchLeaderboard,
        startGame,
        goToMenu,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used within a GameProvider");
  return ctx;
}

export { GUEST_HS_KEY };
