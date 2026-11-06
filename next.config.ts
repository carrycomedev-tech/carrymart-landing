import type { NextConfig } from "next";

const APP_STORE_URL = "https://apps.apple.com/app/carrymart/id6804004868";

/**
 * Where Android visitors go. An APK while the Play listing is under review; once
 * it is live, replace this with
 * https://play.google.com/store/apps/details?id=com.carrymart
 *
 * Name each APK by version rather than overwriting the last one: CloudFront
 * would keep serving the old file from cache under an unchanged name.
 */
const ANDROID_DOWNLOAD_URL = "https://media.carrymartgh.com/downloads/carrymart-1.3.apk";

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
      { source: "/sell", destination: "/sell-on-campus", permanent: true },
      { source: "/marketplace", destination: "/campus-marketplace", permanent: true },
      { source: "/faq", destination: "/support", permanent: true },
      { source: "/help", destination: "/support", permanent: true },

      // /get is printed on flyers as a QR code, so the path can never move. To
      // change where it leads, change the constants at the top of this file.
      // permanent must stay false: a phone remembers a permanent redirect, and
      // would keep going to the old target after the switch to Google Play.
      {
        source: "/get",
        has: [{ type: "header", key: "user-agent", value: ".*(iPhone|iPad|iPod).*" }],
        destination: APP_STORE_URL,
        permanent: false,
      },
      {
        source: "/get",
        has: [{ type: "header", key: "user-agent", value: ".*Android.*" }],
        destination: ANDROID_DOWNLOAD_URL,
        permanent: false,
      },
      { source: "/get", destination: "/#download", permanent: false },
      { source: "/get/android", destination: ANDROID_DOWNLOAD_URL, permanent: false },
    ];
  },
};

export default nextConfig;
