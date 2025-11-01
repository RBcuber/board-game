import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "f.tabletopia.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.catan.de",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
