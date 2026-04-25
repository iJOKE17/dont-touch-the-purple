import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Don't Touch the Purple",
};

const LAST_UPDATED = "April 25, 2026";

const sections = [
  {
    title: "1. Information We Collect",
    body: `When you create an account, we collect information provided by your authentication provider (Google): your display name, email address, and profile photo URL. During gameplay, we collect your scores and game statistics (correct taps, purple taps, default taps) in order to maintain your personal best and populate leaderboards. We do not collect payment information.`,
  },
  {
    title: "2. How We Use Your Information",
    body: `We use the information we collect to: (a) create and manage your game account; (b) calculate, store, and display your high scores and leaderboard rankings; (c) provide gameplay statistics on the results screen; (d) maintain the integrity of the leaderboard and detect cheating; and (e) communicate with you in response to support requests. We do not sell, rent, or share your personal information with third parties for marketing purposes.`,
  },
  {
    title: "3. Data Storage & Security",
    body: `Your account data and scores are stored using Google Firebase Firestore and Firebase Authentication, both of which employ industry-standard security measures including encryption in transit (TLS) and at rest. While we take reasonable precautions to protect your data, no system is completely secure and we cannot guarantee absolute security. You are responsible for keeping your account credentials confidential.`,
  },
  {
    title: "4. Third-Party Services",
    body: `The Game uses the following third-party services: Google Firebase (authentication and database), and Google Fonts (Orbitron typeface). These services have their own privacy policies that govern how they handle your data. By using the Game you also agree to be bound by the applicable policies of these services. We encourage you to review Google's Privacy Policy at https://policies.google.com/privacy.`,
  },
  {
    title: "5. Cookies & Local Storage",
    body: `The Game may use browser local storage and session storage to cache leaderboard data and maintain game state across sessions. Firebase Authentication uses cookies and local storage tokens to keep you signed in. You may clear these at any time through your browser settings, though doing so will sign you out of the Game.`,
  },
  {
    title: "6. Guest (Incognito) Play",
    body: `You may play the Game without creating an account. In guest mode, no personal information is collected or stored on our servers. Your scores will not be saved between sessions and will not appear on the public leaderboard. Game state during a guest session is held only in your browser's memory.`,
  },
  {
    title: "7. Data Retention",
    body: `We retain your account data and scores for as long as your account remains active. If you delete your account, your personal data (display name, email, photo URL) and associated scores will be removed from our systems within 30 days, except where retention is required by law or for legitimate business purposes such as fraud prevention.`,
  },
  {
    title: "8. Your Rights",
    body: `Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete data we hold about you. To exercise these rights, contact us via the link in the footer. We will respond to verified requests within a reasonable timeframe. If you are located in the European Economic Area, you may also have the right to lodge a complaint with your local data protection authority.`,
  },
  {
    title: "9. Children's Privacy",
    body: `The Game is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe that a child under 13 has provided us with personal information, please contact us and we will take steps to delete such information promptly.`,
  },
  {
    title: "10. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this Policy periodically. Continued use of the Game after changes are posted constitutes your acceptance of the revised Policy.`,
  },
  {
    title: "11. Contact",
    body: `If you have questions or concerns about this Privacy Policy or the data we hold about you, please contact us via the link in the footer. We are committed to resolving privacy-related concerns promptly and transparently.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="min-h-full pt-10 pb-10">
        <div className="max-w-2xl mx-auto px-4 py-10 flex flex-col gap-6">

          {/* Page header */}
          <div className="text-center mb-2">
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Legal</p>
            <h1 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-[#BF00FF] glow-text-purple">
              Privacy Policy
            </h1>
            <p className="text-xs text-white/30 mt-2 uppercase tracking-widest">
              Last updated: {LAST_UPDATED}
            </p>
          </div>

          {/* Intro card */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-[#BF00FF]/20 p-5">
            <p className="text-sm text-white/60 leading-relaxed">
              Your privacy matters. This Privacy Policy explains what information{" "}
              <span className="text-white/90 font-bold">Don&apos;t Touch the Purple</span>{" "}
              collects, how it is used, and the choices available to you. We keep
              data collection to the minimum required to run the Game.
            </p>
          </div>

          {/* Sections */}
          {sections.map(({ title, body }) => (
            <div
              key={title}
              className="bg-black/30 backdrop-blur-sm rounded-xl border border-white/5 p-5 flex flex-col gap-2"
            >
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#BF00FF]/70">
                {title}
              </h2>
              <p className="text-sm text-white/55 leading-relaxed">{body}</p>
            </div>
          ))}

          {/* Footer nav */}
          <div className="flex items-center justify-center gap-6 pt-2 pb-4">
            <Link
              href="/terms"
              className="text-xs uppercase tracking-widest text-white/40 hover:text-[#08F7FE]/80 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/"
              className="text-xs uppercase tracking-widest text-white/40 hover:text-white/70 transition-colors"
            >
              ← Back to Game
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
