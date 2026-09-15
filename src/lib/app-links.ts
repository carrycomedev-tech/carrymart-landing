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
 * `com.carrymart` is not signed by one certificate but by up to three, depending
 * on how a given copy of the app was installed, and Android verifies these links
 * only for the cert that signed *that* copy. So all three belong in the array
 * below — a missing one is not a partial failure, it is silently dead links for
 * everybody who installed that way.
 */

/**
 * The debug cert, `android/app/debug.keystore` in the app repo (alias
 * `androiddebugkey`). Every `./gradlew installDebug` and every emulator build
 * carries it, which is the only reason it is in a production file: without it
 * deep links cannot be tested on the machine they are developed on.
 *
 * It is a weaker entry than the other two — that keystore is **committed to the
 * app repo**, so its private key is available to anyone who can read the repo,
 * and a sideloaded APK signed with it and named `com.carrymart` would be able to
 * claim these URLs. That is an acceptable trade while the app is pre-launch;
 * drop this entry at public launch, when store installs are what matter and a
 * debug build claiming the domain is pure downside.
 */
const DEBUG_CERT_SHA256 =
  "FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C";

/**
 * The upload cert — `android/app/carrymart-upload.keystore`, created 2026-09-09
 * and read via `android/keystore.properties` (untracked, and the only copy).
 *
 * `build.gradle` signs `release` with this whenever that properties file is
 * present, so it is the cert on every locally built release APK and on the AAB
 * before Play touches it. Needed here for any release build installed directly
 * — `adb install` of a release APK, or an APK handed to a tester outside Play.
 */
const UPLOAD_CERT_SHA256 =
  "6B:C7:0D:02:F1:75:AC:C0:53:8B:68:13:D9:7E:22:6A:12:ED:72:BE:E2:62:08:F2:22:9E:16:2C:6A:1F:C1:45";

/**
 * The cert Play App Signing re-signs the bundle with before delivering it, which
 * is the cert on **every install from the Play Store** and therefore the only one
 * that will matter once the app is public. It is Google's key, not ours, and it
 * exists nowhere on this machine: read it from Play Console → Test and release →
 * Setup → App integrity → App signing key certificate (SHA-256).
 *
 * Still `null` because the only upload so far (v1.1, 2026-09-09) was rejected and
 * nobody has read the value out of the console yet. Set it to the string and the
 * array below picks it up; it survives the pending transfer to the organization
 * account, because a transfer keeps the app's signing key.
 */
const PLAY_APP_SIGNING_CERT_SHA256: string | null = null;

/**
 * Every certificate allowed to claim these links. Order is not significant to
 * the verifier; `null` entries are dropped so an unknown fingerprint is simply
 * absent rather than emitting `null` into the JSON, which fails the whole file.
 */
export const ANDROID_SHA256_FINGERPRINTS = [
  DEBUG_CERT_SHA256,
  UPLOAD_CERT_SHA256,
  PLAY_APP_SIGNING_CERT_SHA256,
].filter((fingerprint): fingerprint is string => fingerprint !== null);

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
