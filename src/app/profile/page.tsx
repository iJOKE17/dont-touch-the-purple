"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { getHighScore, signOutUser } from "@/lib/firebase";

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [highScore, setHighScore] = useState<number | null>(null);
  const [scoreLoading, setScoreLoading] = useState(true);
  const [signingOut, setSigningOut] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/signin");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (!user?.uid) return;
    setScoreLoading(true);
    console.log("user.id: ", user?.uid)
    getHighScore(user.uid)
      .then(setHighScore)
      .catch((error) => {
        console.error("error getting high score: ", error);
        setHighScore(0);
      })
      .finally(() => setScoreLoading(false));
  }, [user?.uid]);

  async function handleSignOut() {
    setSigningOut(true);
    try {
      await signOutUser();
      router.replace("/");
    } catch {
      setSigningOut(false);
    }
  }

  if (loading || !user || scoreLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <span className="text-[#08F7FE]/60 text-sm uppercase tracking-widest animate-pulse">
          Loading…
        </span>
      </div>
    );
  }

  const initials = (user.displayName ?? user.email ?? "?")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
      {/* Header */}
      <div className="text-center">
        <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Account</p>
        <h1 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-[#08F7FE] glow-text-blue">
          Profile
        </h1>
      </div>

      {/* Avatar */}
      <div className="relative">
        {user.photoURL ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={user.photoURL}
            alt={user.displayName ?? "Avatar"}
            className="w-20 h-20 rounded-full border-2 border-[#08F7FE]/60 glow-blue object-cover"
          />
        ) : (
          <div className="w-20 h-20 rounded-full border-2 border-[#08F7FE]/60 glow-blue bg-[#08F7FE]/10 flex items-center justify-center">
            <span className="text-2xl font-black text-[#08F7FE]">{initials}</span>
          </div>
        )}
        {/* Online dot */}
        <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-[#39FF14] rounded-full border-2 border-[#1A1A1A] glow-green" />
      </div>

      {/* User info card */}
      <div className="w-full max-w-xs bg-black/40 backdrop-blur-sm rounded-xl border border-[#08F7FE]/30 p-5 flex flex-col gap-4">
        {/* Name */}
        <div>
          <p className="text-[10px] uppercase tracking-widest text-white/40 mb-0.5">Name</p>
          <p className="text-sm font-bold text-white truncate">
            {user.displayName ?? "—"}
          </p>
        </div>

        {/* Email */}
        <div>
          <p className="text-[10px] uppercase tracking-widest text-white/40 mb-0.5">Email</p>
          <p className="text-sm font-bold text-white truncate">{user.email}</p>
        </div>

        {/* High score */}
        <div>
          <p className="text-[10px] uppercase tracking-widest text-white/40 mb-0.5">Personal Best</p>
          <p className="text-lg font-black text-[#39FF14] glow-text-green">
            {(highScore ?? 0).toLocaleString()} PTS
          </p>
        </div>
      </div>

      {/* Sign out */}
      <button
        onClick={handleSignOut}
        disabled={signingOut}
        className="
          w-full max-w-xs px-6 py-3 rounded-xl border-2 border-[#FF3131]/50
          uppercase tracking-widest font-bold text-sm text-[#FF3131]/80
          cursor-pointer transition-all duration-150
          hover:border-[#FF3131] hover:text-[#FF3131]
          active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        {signingOut ? "Signing out…" : "Sign Out"}
      </button>

      {/* Back */}
      <button
        onClick={() => router.push("/")}
        className="text-xs uppercase tracking-widest text-white/40 hover:text-white/70 transition-colors cursor-pointer"
      >
        ← Back to game
      </button>
    </div>
  );
}
