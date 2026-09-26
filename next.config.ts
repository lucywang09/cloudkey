import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Must be 'http' or 'https'
        hostname: "images.unsplash.com", // The actual domain name
      }
    ]
  }
};

export default nextConfig;
