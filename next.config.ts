import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '/cs-wsu-main-intro',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '/cs-wsu-main-intro',
  images: {
    unoptimized: true,
  },
};

// Make sure the basePath is available as a public environment variable
process.env.NEXT_PUBLIC_BASE_PATH = nextConfig.basePath;

export default nextConfig;
