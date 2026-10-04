import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ["images.pexels.com"], // Replace with your image domains
  }
};

export default nextConfig;
