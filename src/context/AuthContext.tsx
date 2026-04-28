"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth, onAuthStateChanged, submitScore, User } from "@/lib/firebase";

const GUEST_HS_KEY = "guest_high_score";

interface AuthContextValue {
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextValue>({ user: null, loading: true });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      if (u) {
        const saved = localStorage.getItem(GUEST_HS_KEY);
        if (saved) {
          const guestScore = parseInt(saved, 10);
          if (!isNaN(guestScore) && guestScore > 0) {
            try {
              await submitScore(u.displayName || u.email || "Player", guestScore, u.uid);
            } catch (err) {
              console.error("Failed to migrate guest score:", err);
            }
          }
          localStorage.removeItem(GUEST_HS_KEY);
        }
      }
      setUser(u);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
