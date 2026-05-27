import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (no Node server).
  output: "export",
  // Serve directory-style URLs (e.g. /path/), which static hosts handle cleanly.
  trailingSlash: true,
  // GitHub Pages can't run Next.js image optimization.
  images: { unoptimized: true },
};

export default nextConfig;
