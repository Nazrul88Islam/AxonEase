import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },
  outputFileTracingRoot: path.resolve(__dirname, "../../"),
  output: "export", // <-- add this line to enable static export
};

export default nextConfig;
