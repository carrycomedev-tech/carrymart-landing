/**
 * The facts the two /.well-known association files are built from — the ones
 * that make a tapped `https://www.carrymartgh.com/@handle` link open the
 * CarryMart app instead of this website.
 *
 * Both platforms verify ownership the same way: the app declares the domain,
 * the domain declares the app, and the OS only associates the two when both
 * sides agree. So every value below has an exact counterpart in the app repo
 * (`carrycome_app`), and a mismatch in any one of them fails *silently* — the
 * link simply opens the browser, with no error anywhere. Hence one file rather
 * than two literals buried in two route handlers:
 *
 * - `APPLE_APP_ID`      ↔ the App ID in App Store Connect, and the
 *                         `applinks:` entry in `carrycome_app.entitlements`
 * - `ANDROID_PACKAGE`   ↔ `applicationId` in `android/app/build.gradle`
 * - `ANDROID_SHA256`    ↔ the certificate the installed APK is signed with
 * - `DEEP_LINK_PATHS`   ↔ the `pathPattern` list in `AndroidManifest.xml`
 *
 * Host note: these files must be reachable at the apex-free `www.` host with no
 * redirect. `carrymartgh.com` 308s to `www.carrymartgh.com` for every path, and
 * neither Apple's AASA fetcher nor Android's Digital Asset Links follows a
 * redirect, so `www.` is the only host either platform can verify — which is
 * why it is also the origin the app and the API build share links against.
 */

/** Apple Developer Team ID that owns the bundle (App Store Connect → Membership). */
export const APPLE_TEAM_ID = "7Q9H58KYFT";

/** iOS bundle identifier — `PRODUCT_BUNDLE_IDENTIFIER` in the Xcode project. */
export const IOS_BUNDLE_ID = "com.carrymart";

/** The `TEAMID.bundleid` form Apple's `appIDs` array wants. */
export const APPLE_APP_ID = `${APPLE_TEAM_ID}.${IOS_BUNDLE_ID}`;

/** Android application id. Same string as the iOS bundle id, deliberately. */
export const ANDROID_PACKAGE = "com.carrymart";

/**
 * SHA-256 fingerprints of every signing certificate allowed to claim these
 * links. An install signed by a cert that is not listed here does not get
 * verified links, so during development the debug cert has to be present.
 *
 * The first entry is the Android SDK's standard debug keystore
 * (`~/.android/debug.keystore`, alias `androiddebugkey`) which
 * `android/app/build.gradle` still uses for `release` too, so it is the cert on
 * every build that exists today. Publishing to Play adds a second fingerprint —
 * Play App Signing re-signs the upload, so the cert users actually get is the
 * one shown under Play Console → Test and release → App integrity. Add it here
 * (keep both) the moment the app is uploaded, or verified links break for
 * everyone who installs from the store.
 */
export const ANDROID_SHA256_FINGERPRINTS = [
  "FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C",
];

/**
 * The only URL shapes that hand off to the app. Everything else on this domain
 * — the marketing pages, /terms, /support — must keep opening in the browser,
 * which is the whole reason this is a path list and not a wildcard: a bare `/*`
 * here would make every visit to the website try to launch the app first.
 *
 * `/@*` is a profile (`/@ama_styles`), `/l/*` a listing (`/l/{guid}`). Both are
 * served by this site as a web fallback for anyone without the app installed.
 */
export const DEEP_LINK_PATHS = ["/@*", "/l/*"] as const;

/** Custom scheme registered by the app, used as the manual "open in app" fallback. */
export const APP_SCHEME = "carrymart";
