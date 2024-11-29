import type { NextConfig } from "next";
/*
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
*/

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

export default nextConfig;