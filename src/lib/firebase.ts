import { initializeApp, getApps } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  where,
  getDocs,
} from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SCORES_COLLECTION = "scores";

export interface LeaderboardEntry {
  name: string;
  score: number;
  userId: string;
  timestamp: number;
}

export async function submitScore(
  name: string,
  score: number,
  userId: string,
): Promise<void> {
  await addDoc(collection(db, SCORES_COLLECTION), {
    name,
    score,
    userId,
    timestamp: Date.now(),
  });
}

// Firestore doesn't support GROUP BY, so we fetch a large batch and deduplicate
// on the client — keeping only each user's personal best before slicing to `count`.
export async function getTopScores(count = 10): Promise<LeaderboardEntry[]> {
  const q = query(
    collection(db, SCORES_COLLECTION),
    orderBy("score", "desc"),
    limit(count * 20),
  );
  const snapshot = await getDocs(q);
  const all = snapshot.docs.map((doc) => doc.data() as LeaderboardEntry);

  const best = new Map<string, LeaderboardEntry>();
  for (const entry of all) {
    const key = entry.userId ?? entry.name;
    if (!best.has(key)) {
      best.set(key, entry);
    }
  }

  return Array.from(best.values()).slice(0, count);
}

export async function getHighScore(userId: string): Promise<number> {
  const q = query(
    collection(db, SCORES_COLLECTION),
    where("userId", "==", userId),
    orderBy("score", "desc"),
    limit(1),
  );
  const snapshot = await getDocs(q);
  if (snapshot.empty) return 0;
  return (snapshot.docs[0].data() as LeaderboardEntry).score;
}

export async function signInWithGoogle(): Promise<User> {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
}

export async function signOutUser(): Promise<void> {
  await signOut(auth);
}

export { db, auth, onAuthStateChanged };
export type { User };
