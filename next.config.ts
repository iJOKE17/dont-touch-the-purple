import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["demo.joker-games.dev", "*.joker-games.dev"],
  transpilePackages: [
    "firebase",
    "@firebase/auth",
    "@firebase/app",
    "@firebase/firestore",
    "@firebase/util",
    "@firebase/component",
    "@firebase/logger",
  ],
};

export default nextConfig;
