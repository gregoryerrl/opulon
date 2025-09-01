import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization disabled for Cloudflare compatibility
  images: {
    unoptimized: true,
  },
  
  // Webpack configuration for Node.js compatibility
  webpack: (config: any) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: false,
      stream: false,
      url: false,
      zlib: false,
      http: false,
      https: false,
      assert: false,
      os: false,
      path: false,
    };
    return config;
  },
  
  // Environment variables for runtime
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  },
  
  // Server external packages for better Cloudflare compatibility
  serverExternalPackages: [],
};

export default nextConfig;