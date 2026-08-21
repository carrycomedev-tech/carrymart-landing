# Deep linking — the website's half

A tapped `https://www.carrymartgh.com/@ama_styles` should open the CarryMart app
on that profile. Two things have to be true for that: the **app** claims the
domain, and the **domain** claims the app. This repo owns the second half — the
two files under `/.well-known/` — plus the web pages those URLs fall back to
when the app is not installed.

Everything either platform reads is generated from one file, `src/lib/app-links.ts`.
Change identifiers there, not in the route handlers.

## What is live here

| URL | Source | Purpose |
| --- | --- | --- |
| `/.well-known/apple-app-site-association` | `src/app/.well-known/apple-app-site-association/route.ts` | iOS universal links |
| `/.well-known/assetlinks.json` | `src/app/.well-known/assetlinks.json/route.ts` | Android App Links |
| `/@{handle}` | `src/app/[handle]/page.tsx` | Profile preview (no app installed) |
| `/l/{id}` | `src/app/l/[id]/page.tsx` | Listing preview |
| `/p/{id}` | `src/app/p/[id]/page.tsx` | Post / reel preview |

The three preview pages read the public API (`api.carrycomegh.com`, anonymous
endpoints only) through `src/lib/link-targets.ts`, and are `noindex, follow`:
they exist for people and chat-app crawlers, not for search.

## The three rules that break this silently

1. **`www.` only.** `carrymartgh.com` 308-redirects every path to `www`, and
   neither Apple's AASA fetcher nor Android's Digital Asset Links verifier
   follows a redirect. So the apex can never be verified, and the app declares
   `www.carrymartgh.com` alone. Every share link the API and app build is `www`
   for the same reason. If the apex is ever served directly (no redirect), it can
   be added to both sides then.
2. **`application/json`, no redirect, no auth.** Both are route handlers rather
   than files in `public/` because a `public/` file with no extension is served
   as `application/octet-stream`, which Apple rejects outright.
3. **The identifiers must match the shipped app exactly.** A wrong Team ID or a
   fingerprint from the wrong keystore produces no error anywhere — the link just
   opens the browser.

| Value | Here | Must equal |
| --- | --- | --- |
| Apple Team ID | `7Q9H58KYFT` | App Store Connect → Membership |
| iOS bundle | `com.carrymart` | `PRODUCT_BUNDLE_IDENTIFIER` in the Xcode project |
| Android package | `com.carrymart` | `applicationId` in `android/app/build.gradle` |
| Android SHA-256 | debug keystore | cert that signed the *installed* APK |
| Verified paths | `/@*`, `/l/*` | `pathPattern`s in `AndroidManifest.xml` |

## Two known gaps

- **Play App Signing.** The app's `release` build type still signs with the debug
  keystore, so the debug cert's SHA-256 is what is listed. When the app is
  uploaded to Play, Play re-signs it: add the SHA-256 from Play Console → Test
  and release → App integrity to `ANDROID_SHA256_FINGERPRINTS` (keep both), or
  verified links break for every store install.
- **`/p/{id}` is web-only.** The API emits post share URLs and this repo renders
  them, but `/p/*` is not in the verified path list, so those links stay in the
  browser even with the app installed. Closing it takes three coordinated
  changes in one release: `/p/.*` in the Android manifest, `/p/*` in
  `DEEP_LINK_PATHS` here, and nothing in the app — it already parses
  `carrymartgh.com/p/{id}`.

## Verify after deploying

```bash
curl -sSI https://www.carrymartgh.com/.well-known/apple-app-site-association   # 200, application/json, no 30x
curl -sS  https://www.carrymartgh.com/.well-known/assetlinks.json

# Google's own verifier — the same statement list Play Services fetches
curl -sS "https://digitalassetlinks.googleapis.com/v1/statements:list?source.web.site=https://www.carrymartgh.com&relation=delegate_permission/common.handle_all_urls"
```

On device: `adb shell pm get-app-links com.carrymart` (Android, after reinstall)
and tapping a link in Notes or Messages (iOS — a URL typed into Safari's address
bar deliberately does not hand off to an app).
