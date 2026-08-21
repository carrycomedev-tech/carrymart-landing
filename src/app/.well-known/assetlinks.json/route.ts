import { ANDROID_PACKAGE, ANDROID_SHA256_FINGERPRINTS } from "@/lib/app-links";

/**
 * `/.well-known/assetlinks.json` — the website half of Android App Links.
 *
 * The Play Services verifier fetches this after install for every host declared
 * with `android:autoVerify="true"` in the app's manifest, and approves the app
 * for those links only if the statement below names the app's package *and* the
 * SHA-256 of the certificate that actually signed the installed APK. Anything
 * else — wrong fingerprint, a redirect on this URL, a non-JSON content type —
 * leaves the links unverified, which looks exactly like a link that opens the
 * browser on purpose.
 *
 * Served as a route handler for the same reason as the Apple file: this needs a
 * real `application/json` response, and keeping both files next to each other
 * means one place to look when a link stops opening the app.
 *
 * `handle_all_urls` is the standard relation, and it is not as broad as it
 * sounds — it delegates only the URLs the app's own intent filters claim, which
 * are the two path patterns in `DEEP_LINK_PATHS`, not the whole domain.
 */
export const dynamic = "force-static";

const statements = [
  {
    relation: ["delegate_permission/common.handle_all_urls"],
    target: {
      namespace: "android_app",
      package_name: ANDROID_PACKAGE,
      sha256_cert_fingerprints: ANDROID_SHA256_FINGERPRINTS,
    },
  },
];

export function GET() {
  return new Response(JSON.stringify(statements, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
