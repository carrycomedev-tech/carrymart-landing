import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },

  /** Trailing-slash variants would otherwise be a second URL for every page. */
  trailingSlash: false,

  poweredByHeader: false,

  async headers() {
    return [
      {
        // Long-lived immutable caching for the marketing media. These files are
        // large enough that re-downloading them is a real Core Web Vitals cost,
        // and they are replaced by filename rather than edited in place.
        source: "/media/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/assets/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            // Keeps the OG image and llms.txt fetchable by any crawler while
            // the rest of the site stays same-origin by default.
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Old anchor-only entry points that were linked from the footer, kept as
      // real redirects so any existing external link lands on the page that now
      // owns that topic rather than on a fragment.
      { source: "/wallet", destination: "/carrypay", permanent: true },
      { source: "/escrow", destination: "/carrypay", permanent: true },
      { source: "/sell", destination: "/sell-on-campus", permanent: true },
      { source: "/marketplace", destination: "/campus-marketplace", permanent: true },
      { source: "/faq", destination: "/support", permanent: true },
      { source: "/help", destination: "/support", permanent: true },
    ];
  },
};

export default nextConfig;
