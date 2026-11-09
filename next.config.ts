import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local dev on the exFAT volume: AppleDouble (._*) sidecar files poison
    // the optimizer cache, so serve images unoptimized there. Production
    // (Linux server) keeps full optimization; the env var is never set there.
    unoptimized: process.env.NEXT_IMAGES_UNOPTIMIZED === "1",
    // The hero plates carry a content hash as a query string (see lib/hero.ts),
    // and Next 16 refuses a query on a local image unless the path is listed
    // here. Omitting `search` allows any query, which is what a varying hash
    // needs; pinning it to "" would allow only an empty one.
    localPatterns: [
      { pathname: "/hero/**" },
      { pathname: "/**", search: "" },
    ],
  },
};

export default nextConfig;
