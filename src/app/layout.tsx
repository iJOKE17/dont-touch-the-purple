import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { GameProvider } from "@/context/GameContext";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

const orbitron = Orbitron({
  variable: "--font-orbitron-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Don't Touch the Purple",
  description:
    "A hyper-casual, reaction-based arcade game. Click the colored buttons, avoid the purple!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} h-full`}>
      <body className="h-full select-none">
        <Header />
        <AuthProvider>
          <GameProvider>{children}</GameProvider>
        </AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
