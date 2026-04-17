"use client";

import { useRouter } from "next/navigation";
import NeonButton from "@/components/ui/NeonButton";

interface MainMenuProps {
  highScore: number;
  onStart: () => void;
}

export default function MainMenu({ highScore, onStart }: MainMenuProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
      {/* Logo */}
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-white glow-text-white">
          Don&apos;t Touch
        </h1>
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-wider text-[#BF00FF] glow-text-purple pulse-glow text-center">
          The Purple
        </h2>
      </div>

      {/* High Score */}
      <div className="px-6 py-2 rounded-full border border-[#08F7FE]/40 bg-black/30">
        <span className="text-sm md:text-lg font-bold tracking-widest text-white uppercase">
          Best: {highScore.toLocaleString("en-US")} PTS
        </span>
      </div>

      {/* Start Button */}
      <NeonButton
        label="Tap to Start"
        color="green"
        onClick={onStart}
        className="text-lg md:text-xl"
      />

      {/* Bottom Icons */}
      {/* <div className="absolute bottom-12 left-6 right-6 flex justify-between items-center">
       

        <button
          onClick={() => router.push("/profile")}
          className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#08F7FE]/30 text-[#08F7FE]/60 hover:text-[#08F7FE] hover:border-[#08F7FE]/60 transition-colors cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 21.6c0-4.64 3.76-8.4 8.4-8.4s8.4 3.76 8.4 8.4" />
          </svg>
        </button>

         <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#FFF01F]/30 text-[#FFF01F]/60 hover:text-[#FFF01F] transition-colors cursor-pointer">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
          </svg>
        </button>
      </div> */}
    </div>
  );
}
