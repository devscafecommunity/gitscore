/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image src prop open for every domain
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
