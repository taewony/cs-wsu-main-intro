import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/cs-wsu-main-intro',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
