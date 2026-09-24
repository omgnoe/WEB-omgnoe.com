import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local dev on the exFAT volume: AppleDouble (._*) sidecar files poison
    // the optimizer cache, so serve images unoptimized there. Production
    // (Linux server) keeps full optimization; the env var is never set there.
    unoptimized: process.env.NEXT_IMAGES_UNOPTIMIZED === "1",
  },
};

export default nextConfig;
