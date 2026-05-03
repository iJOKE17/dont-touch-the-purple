"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithGoogle } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";
import GoogleIcon from "@/components/icon/GoogleIcon";
import { isInAppBrowser, openInExternalBrowser } from "@/utils/browser";

export default function SignInPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [signingIn, setSigningIn] = useState(false);
  const [inAppBrowser, setInAppBrowser] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setInAppBrowser(isInAppBrowser());
  }, []);

  useEffect(() => {
    if (!loading && user) {
      router.push("/");
    }
  }, [user, loading, router]);

  async function handleGoogleSignIn() {
    setError(null);
    setSigningIn(true);
    try {
      await signInWithGoogle();
      // Page will navigate away; no further action needed here
    } catch {
      setError("Sign in failed. Please try again.");
      setSigningIn(false);
    }
  }

  function handleOpenInBrowser() {
    openInExternalBrowser(window.location.href);
  }

  async function handleCopyLink() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  if (inAppBrowser) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
        <div className="w-full max-w-md bg-black/40 backdrop-blur-sm rounded-xl border border-[#FE53BB]/30 p-6 flex flex-col items-center gap-5">
          <h2 className="text-sm md:text-base font-bold uppercase tracking-widest text-[#FE53BB] text-center">
            Open in your browser to sign in
          </h2>
          <p className="text-xs text-white/60 text-center leading-relaxed">
            Google sign-in doesn&apos;t work inside this app&apos;s built-in browser.
            Tap the button below or copy the link and open it in Chrome or Safari.
          </p>

          <button
            onClick={handleOpenInBrowser}
            className="
              w-full flex items-center justify-center gap-3
              px-6 py-3 rounded-xl font-bold uppercase tracking-wider
              bg-[#FE53BB] text-black cursor-pointer
              transition-all duration-150
              hover:brightness-90 active:scale-95
            "
          >
            Open in Browser
          </button>

          <button
            onClick={handleCopyLink}
            className="
              w-full flex items-center justify-center gap-3
              px-6 py-3 rounded-xl font-bold uppercase tracking-wider
              border border-white/20 text-white/70 cursor-pointer
              transition-all duration-150
              hover:border-white/40 hover:text-white active:scale-95
            "
          >
            {copied ? "Copied!" : "Copy Link"}
          </button>
        </div>

        <button
          onClick={() => router.push("/")}
          className="text-xs uppercase tracking-widest text-white/40 hover:text-white/70 transition-colors cursor-pointer"
        >
          ← Back to game
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-full gap-8 px-6">

      {/* Card */}
      <div className="w-full max-w-md bg-black/40 backdrop-blur-sm rounded-xl border border-[#08F7FE]/30 p-6 flex flex-col items-center gap-6">
        <h2 className="text-sm md:text-base font-bold uppercase tracking-widest text-[#08F7FE] glow-text-blue text-center">
          Sign in to save your score
        </h2>

        <button
          onClick={handleGoogleSignIn}
          disabled={signingIn}
          className="
            w-full flex items-center justify-center gap-3
            px-6 py-3 rounded-xl font-bold uppercase tracking-wider
            bg-white text-[#1A1A1A] cursor-pointer
            transition-all duration-150
            hover:brightness-90 active:scale-95
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          <GoogleIcon />
          {signingIn ? "Signing in…" : "Continue with Google"}
        </button>

        {error && (
          <p className="text-xs text-[#FF3131] text-center">{error}</p>
        )}
      </div>


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
