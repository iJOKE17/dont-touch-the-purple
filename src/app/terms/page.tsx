import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Don't Touch the Purple",
};

const LAST_UPDATED = "April 25, 2026";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing or playing Don't Touch the Purple ("the Game"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Game. These Terms apply to all visitors, users, and other persons who access the Game.`,
  },
  {
    title: "2. Description of Service",
    body: `Don't Touch the Purple is a free-to-play, browser-based hyper-casual arcade game. Players interact with colored buttons during a 30-second time limit to accumulate points while avoiding the purple danger buttons. The Game may include a leaderboard, user accounts, and score tracking features.`,
  },
  {
    title: "3. User Accounts",
    body: `You may create an account to save your high scores and appear on the leaderboard. Accounts are created via third-party authentication providers (such as Google). You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate, current, and complete information and to update it as needed. We reserve the right to suspend or terminate accounts that violate these Terms.`,
  },
  {
    title: "4. Gameplay & Scoring",
    body: `Scores are calculated based on in-game actions: correct color taps earn positive points, and purple button taps result in point deductions. High scores are stored and may be displayed on public leaderboards. We reserve the right to remove scores that are suspected of being achieved through unauthorized means, exploits, or cheating tools.`,
  },
  {
    title: "5. Prohibited Conduct",
    body: `You agree not to: (a) use automated scripts, bots, or tools to manipulate gameplay or inflate scores; (b) attempt to reverse-engineer, decompile, or tamper with the Game's source code or server-side logic; (c) use the Game to transmit harmful, offensive, or illegal content; (d) interfere with or disrupt the Game's infrastructure or servers; or (e) impersonate another user or person. Violations may result in immediate account termination and, where applicable, legal action.`,
  },
  {
    title: "6. Intellectual Property",
    body: `All content within the Game — including but not limited to graphics, animations, sound design, code, fonts, and copy — is the exclusive property of the Game's developers and is protected by applicable intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to access and use the Game solely for personal, non-commercial purposes. Nothing in these Terms transfers any ownership rights to you.`,
  },
  {
    title: "7. Disclaimers",
    body: `The Game is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Game will be uninterrupted, error-free, or free of harmful components. Your use of the Game is at your sole risk.`,
  },
  {
    title: "8. Limitation of Liability",
    body: `To the fullest extent permitted by applicable law, the developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Game, even if advised of the possibility of such damages. In no event shall our total liability to you for all claims exceed the amount you paid (if any) to access the Game in the twelve months preceding the claim.`,
  },
  {
    title: "9. Modifications to Terms",
    body: `We reserve the right to update or modify these Terms at any time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of the Game after changes are posted constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.`,
  },
  {
    title: "10. Governing Law",
    body: `These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions. Any disputes arising under these Terms shall be resolved through good-faith negotiation between the parties.`,
  },
  {
    title: "11. Contact",
    body: `If you have questions about these Terms, please reach out via the contact link in the footer. We will do our best to respond in a timely manner.`,
  },
];

export default function TermsPage() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="min-h-full pt-10 pb-10">
        <div className="max-w-2xl mx-auto px-4 py-10 flex flex-col gap-6">

          {/* Page header */}
          <div className="text-center mb-2">
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Legal</p>
            <h1 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-[#08F7FE] glow-text-blue">
              Terms of Service
            </h1>
            <p className="text-xs text-white/30 mt-2 uppercase tracking-widest">
              Last updated: {LAST_UPDATED}
            </p>
          </div>

          {/* Intro card */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-[#08F7FE]/20 p-5">
            <p className="text-sm text-white/60 leading-relaxed">
              Please read these Terms of Service carefully before playing{" "}
              <span className="text-white/90 font-bold">Don&apos;t Touch the Purple</span>.
              These Terms govern your access to and use of the Game. By using the Game
              you agree to these Terms in full.
            </p>
          </div>

          {/* Sections */}
          {sections.map(({ title, body }) => (
            <div
              key={title}
              className="bg-black/30 backdrop-blur-sm rounded-xl border border-white/5 p-5 flex flex-col gap-2"
            >
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#08F7FE]/80">
                {title}
              </h2>
              <p className="text-sm text-white/55 leading-relaxed">{body}</p>
            </div>
          ))}

          {/* Footer nav */}
          <div className="flex items-center justify-center gap-6 pt-2 pb-4">
            <Link
              href="/privacy"
              className="text-xs uppercase tracking-widest text-white/40 hover:text-[#BF00FF]/80 transition-colors"
            >
              Privacy Policy
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
