import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  webpack: (config) => {
    config.ignoreWarnings = [
      (warning: { message: string | string[] }) =>
        warning.message.includes("DialogContent requires a DialogTitle"),
    ];
    return config;
  },
};

export default nextConfig;
