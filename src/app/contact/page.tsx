import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Don't Touch the Purple",
};

const CONTACT_EMAIL = "arthorn.kittinukul@gmail.com";

function createMailtoLink(subject: string, body: string): string {
  const params = new URLSearchParams({
    subject,
    body,
  });
  return `mailto:${CONTACT_EMAIL}?${params.toString()}`;
}

const bugReportLink = createMailtoLink(
  "Bug Report - Don't Touch the Purple",
  [
    "Hi, I found a bug in Don't Touch the Purple.",
    "",
    "What happened:",
    "",
    "What I expected to happen:",
    "",
    "Steps to reproduce:",
    "1.",
    "2.",
    "3.",
    "",
    "Device/Browser:",
    "",
  ].join("\n")
);

const feedbackLink = createMailtoLink(
  "Feedback - Don't Touch the Purple",
  [
    "Hi, I want to share feedback for Don't Touch the Purple.",
    "",
    "My feedback:",
    "",
    "Optional ideas/improvements:",
    "",
  ].join("\n")
);

export default function ContactPage() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="min-h-full pt-10 pb-10">
        <div className="max-w-2xl mx-auto px-4 py-10 flex flex-col gap-6">
          <div className="text-center mb-2">
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Support</p>
            <h1 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-[#08F7FE] glow-text-blue">
              Contact
            </h1>
            <p className="text-xs text-white/40 mt-3">
              Send us a message at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="underline decoration-white/30 hover:decoration-[#08F7FE] transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>

          <section className="bg-black/30 backdrop-blur-sm rounded-xl border border-[#FF4D6D]/30 p-5 flex flex-col gap-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#FF4D6D]">
              Bug Report
            </h2>
            <p className="text-sm text-white/60 leading-relaxed">
              Found something broken? Send us the details and steps to reproduce it so we can
              investigate quickly.
            </p>
            <a
              href={bugReportLink}
              className="w-fit text-xs uppercase tracking-widest px-4 py-2 rounded-md border border-[#FF4D6D]/50 text-[#FF4D6D] hover:bg-[#FF4D6D]/10 transition-colors"
            >
              Send Bug Report
            </a>
          </section>

          <section className="bg-black/30 backdrop-blur-sm rounded-xl border border-[#BF00FF]/30 p-5 flex flex-col gap-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#BF00FF]">
              Feedback
            </h2>
            <p className="text-sm text-white/60 leading-relaxed">
              Have ideas to make the game better? We would love to hear your suggestions.
            </p>
            <a
              href={feedbackLink}
              className="w-fit text-xs uppercase tracking-widest px-4 py-2 rounded-md border border-[#BF00FF]/50 text-[#BF00FF] hover:bg-[#BF00FF]/10 transition-colors"
            >
              Send Feedback
            </a>
          </section>

          <div className="flex items-center justify-center gap-6 pt-2 pb-4">
            <Link
              href="/privacy"
              className="text-xs uppercase tracking-widest text-white/40 hover:text-[#BF00FF]/80 transition-colors"
            >
              Privacy Policy
            </Link>
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
