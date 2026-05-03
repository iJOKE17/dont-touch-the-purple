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
  async rewrites() {
    return [
      {
        source: "/__/auth/:path*",
        destination:
          "https://dont-touch-the-purple-41095.firebaseapp.com/__/auth/:path*",
      },
    ];
  },
};

export default nextConfig;
