import { APPLE_APP_ID, DEEP_LINK_PATHS } from "@/lib/app-links";

/**
 * `/.well-known/apple-app-site-association` — the half of an iOS universal link
 * that lives on the website.
 *
 * When the app is installed, iOS asks Apple's CDN for this file, checks that
 * `appIDs` contains the app's own `TEAMID.bundleid`, and only then routes
 * matching URLs into the app instead of Safari. Requirements Apple enforces,
 * all of which this handler satisfies and none of which it reports on failure:
 *
 * - HTTPS, at this exact path, with **no redirect** (see the host note in
 *   `@/lib/app-links` for why this is the `www.` host and not the apex)
 * - `Content-Type: application/json`, and no `.json` extension on the path
 * - no authentication, no `Vary` on cookies — Apple fetches it unauthenticated
 *
 * A route handler rather than a file in `public/`, because a `public/` file with
 * no extension is served as `application/octet-stream`, which Apple rejects.
 *
 * `components` (iOS 13+) is used over the legacy `paths` array: it is the form
 * that supports per-entry comments, and both entries here are simple prefix
 * matches. Order matters only for exclusions, and there are none.
 */
export const dynamic = "force-static";

const association = {
  applinks: {
    details: [
      {
        appIDs: [APPLE_APP_ID],
        components: [
          { "/": DEEP_LINK_PATHS[0], comment: "Profile links open the app" },
          { "/": DEEP_LINK_PATHS[1], comment: "Listing links open the app" },
        ],
      },
    ],
  },
};

export function GET() {
  return new Response(JSON.stringify(association, null, 2), {
    headers: {
      "Content-Type": "application/json",
      // Apple's CDN caches this for its own interval regardless; the short
      // max-age is so a fingerprint or App ID correction goes live in an hour
      // rather than a day when someone fetches it directly to debug.
      "Cache-Control": "public, max-age=3600",
    },
  });
}
