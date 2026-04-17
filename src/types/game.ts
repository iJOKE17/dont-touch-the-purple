export type ButtonColor = "orange" | "green" | "yellow" | "blue" | "purple";

export type ButtonState = "default" | "pressed" | ButtonColor;

export type GameScreen = "menu" | "playing" | "gameover";

export interface GameState {
  screen: GameScreen;
  score: number;
  timeRemaining: number;
  highScore: number;
  buttons: ButtonState[];
  stats: GameStats;
}

export interface GameStats {
  correctTaps: number;
  purpleTaps: number;
  defaultTaps: number;
}

export interface Score {
  name: string;
  score: number;
  timestamp: number;
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  icon: "clock" | "shield";
  unlocked: boolean;
}

export const NEON_COLORS: Record<ButtonColor, string> = {
  orange: "#FF6B00",
  green: "#39FF14",
  yellow: "#FFF01F",
  blue: "#08F7FE",
  purple: "#BF00FF",
};

export const BUTTON_DEFAULT_COLOR = "#4A4A4A";
export const BACKGROUND_COLOR = "#1A1A1A";
export const GAME_DURATION = 30;
