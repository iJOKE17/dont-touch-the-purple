import Link from "next/link";
import ContactIcon from "@/components/icon/ContactIcon";
import SupportIcon from "@/components/icon/SupportIcon";
import GithubIcon from "@/components/icon/GithubIcon";
import DiscordIcon from "@/components/icon/DiscordIcon";
import TwitterIcon from "@/components/icon/TwitterIcon";
import TermsIcon from "@/components/icon/TermsIcon";
import SecurityIcon from "@/components/icon/SecurityIcon";
import PrivacyIcon from "@/components/icon/PrivacyIcon";
import IncognitoIcon from "@/components/icon/IncognitoIcon";
import VersionIcon from "@/components/icon/VersionIcon";

const navLinks = [
  { label: "contact", icon: <ContactIcon />, href: "#" },
  { label: "support", icon: <SupportIcon />, href: "#" },
  { label: "github", icon: <GithubIcon />, href: "#" },
  // { label: "discord", icon: <DiscordIcon />, href: "#" },
  // { label: "twitter", icon: <TwitterIcon />, href: "#" },
  { label: "terms", icon: <TermsIcon />, href: "#" },
  { label: "security", icon: <SecurityIcon />, href: "#" },
  { label: "privacy", icon: <PrivacyIcon />, href: "#" },
];

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-4 h-10 bg-[#111]/90 backdrop-blur-sm border-t border-white/5">
      <nav className="flex items-center gap-4">
        {navLinks.map(({ label, icon, href }) => (
          <Link
            key={label}
            href={href}
            className="flex items-center gap-1 text-[10px] text-white/40 hover:text-white/70 transition-colors"
          >
            <span className="opacity-70">{icon}</span>
            {label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        {/* <span className="flex items-center gap-1 text-[10px] text-white/40">
          <IncognitoIcon />
          incognito
        </span> */}
        <span className="flex items-center gap-1 text-[10px] text-white/40">
          <VersionIcon />
          v{process.env.npm_package_version ?? "0.1.0"}
        </span>
      </div>
    </footer>
  );
}
