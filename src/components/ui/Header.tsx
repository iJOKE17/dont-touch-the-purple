"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CrownIcon from "@/components/icon/CrownIcon";
import InfoIcon from "@/components/icon/InfoIcon";
import CogIcon from "@/components/icon/CogIcon";
import UserIcon from "@/components/icon/UserIcon";

export default function Header() {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 h-12 bg-[#111]/90 backdrop-blur-sm border-b border-white/5">
      {/* Left group: logo + nav icons */}
      <div className="flex items-center gap-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
            <div className="flex flex-col justify-center items-start leading-none">
              <span className="text-[8px] font-extrabold uppercase tracking-tight text-white glow-text-white select-none">
                Don&apos;t Touch
              </span>
              <span className="text-[10px] font-black uppercase tracking-tight text-[#BF00FF] glow-text-purple select-none">
                The Purple
              </span>
            </div>
   
        </Link>

        {/* Crown — leaderboard */}
        <button
          aria-label="Leaderboard"
          className="flex items-center justify-center w-6 h-6 rounded-md text-white/40 hover:text-white/80 transition-colors cursor-pointer"
        >
          <CrownIcon />
        </button>

        {/* Info */}
        <button
          aria-label="Info"
          className="flex items-center justify-center w-6 h-6 rounded-md text-white/40 hover:text-white/80 transition-colors cursor-pointer"
        >
          <InfoIcon />
        </button>

        {/* Cog — settings */}
        <button
          aria-label="Settings"
          className="flex items-center justify-center w-6 h-6 rounded-md text-white/40 hover:text-white/80 transition-colors cursor-pointer"
        >
          <CogIcon />
        </button>
      </div>

      {/* Right: user / profile */}
      <button
        aria-label="Profile"
        onClick={() => router.push("/profile")}
        className="flex items-center justify-center w-6 h-6 text-white/50 hover:text-white/90 transition-colors cursor-pointer"
      >
        <UserIcon />
      </button>
    </header>
  );
}
