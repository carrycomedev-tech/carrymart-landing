import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import LinkLanding from "@/components/deep-link/link-landing";
import { BRAND } from "@/lib/seo";
import { USERNAME_PATTERN, getProfile } from "@/lib/link-targets";

/**
 * `/@handle` — the web face of a shared CarryMart profile link.
 *
 * This has to be a root-level dynamic segment rather than a folder literally
 * named `@handle`, because a directory starting with `@` is how the App Router
 * declares a *parallel route slot*: `app/@handle/` would never be a URL at all.
 * So the segment catches every single-part path and this page decides, which
 * means it is also responsible for handing anything that is not a handle back to
 * the 404 — `notFound()` below, or `/typo` would silently render as a profile.
 *
 * `/@handle` is one of the two path shapes the app claims (see `@/lib/app-links`),
 * so on a phone with CarryMart installed this code never runs. A bare
 * `/handle` is accepted too and 308s to the `@` form — the app does not claim
 * the bare shape, so that hop is what puts a hand-typed URL back on the only
 * path that can hand off to the app.
 */

type Props = { params: Promise<{ handle: string }> };

/**
 * `%40ama_styles`, `@ama_styles`, `AMA_STYLES` and a bare `ama_styles` all
 * arrive here. None of them keeps the `@`, and `canonical` says whether the URL
 * that was requested is already the one this profile should live at.
 *
 * The bare form is accepted because people type it. `/@handle` is what the app
 * and the API share, what the QR code encodes and what `/.well-known/*` claims,
 * but nobody reading a handle out loud says "at" — they hear "yaa_designs on
 * carrymartgh" and type `carrymartgh.com/yaa_designs`, which until now was a
 * flat 404 with nothing to suggest the `@` was the missing piece.
 *
 * Case is folded for the same reason: a handle written with a capital in a bio
 * or a WhatsApp message is the same person, and 404ing it teaches people the
 * link is broken.
 */
function parseSegment(rawSegment: string): { username: string; canonical: boolean } | null {
  const segment = decodeURIComponent(rawSegment);
  const username = (segment.startsWith("@") ? segment.slice(1) : segment).toLowerCase();
  if (!USERNAME_PATTERN.test(username)) return null;
  // Exact match, so a missing `@` and a stray capital are both non-canonical.
  return { username, canonical: segment === `@${username}` };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const username = parseSegment((await params).handle)?.username;
  if (!username) return { title: "Page not found", robots: { index: false, follow: true } };

  const profile = await getProfile(username);
  const displayName = profile?.name ?? `@${username}`;
  // No brand name here: the root layout's title template already appends it.
  const title = profile?.name ? `${profile.name} (@${username})` : `@${username}`;
  const description =
    profile?.bio ??
    `See what @${username} is selling on ${BRAND.name}, the campus marketplace for students in Ghana.`;

  return {
    title,
    description,
    alternates: { canonical: `/@${username}` },
    /**
     * Student profiles are not marketing pages: they are personal, they change
     * constantly, and nobody searches for them. Indexing them would put a
     * student's photo and bio into Google results they never asked to be in.
     * `follow` stays on so the links out of here still carry.
     */
    robots: { index: false, follow: true },
    openGraph: {
      title,
      description,
      url: `/@${username}`,
      type: "profile",
      // Never no image: a link with no card image reads as broken in a chat,
      // even when the page behind it is fine.
      images: [
        {
          url: profile?.profilePhotoUrl ?? BRAND.ogImage,
          alt: displayName,
        },
      ],
    },
  };
}

export default async function ProfileLinkPage({ params }: Props) {
  const parsed = parseSegment((await params).handle);
  if (!parsed) notFound();

  const { username, canonical } = parsed;
  const profile = await getProfile(username);

  /**
   * A handle that resolves to nothing is a real 404 — a deleted account, or a
   * mistyped link. That is different from the API being unreachable, but from
   * here they are indistinguishable, and "we could not find that page" is the
   * honest answer in both cases.
   *
   * Resolved *before* the redirect below on purpose: this segment catches every
   * single-part path, so `/abuot` is far more likely to be a fumbled `/about`
   * than a person. Redirecting first would answer it with a hop to `/@abuot`
   * and a 404 there, turning one honest miss into two.
   */
  if (!profile) notFound();

  /**
   * A real person, reached by a URL that is not their canonical one. Redirect
   * rather than render: `/@handle` is the only shape `/.well-known/*` claims, so
   * it is the form that opens the app instead of this page, and the only one
   * worth having in someone's history or pasted into a chat. Permanent (308)
   * rather than temporary: the mapping from a bare or capitalised handle to its
   * `@` form is a normalisation that cannot change meaning later, which is the
   * same reason Next itself 308s trailing slashes. It is also what stops the
   * variants being duplicate URLs serving identical content.
   */
  if (!canonical) permanentRedirect(`/@${username}`);

  const displayName = profile.name ?? `@${username}`;

  return (
    <LinkLanding
      kind={profile.isMerchant ? "Seller profile" : "Profile"}
      title={displayName}
      subtitle={profile.bio ?? `@${username} is on ${BRAND.name}.`}
      verified={profile.isVerified}
      image={
        profile.profilePhotoUrl
          ? { url: profile.profilePhotoUrl, alt: displayName, rounded: true }
          : null
      }
      facts={[
        { label: "Handle", value: `@${username}` },
        { label: "Followers", value: profile.stats.followers.toLocaleString("en-GH") },
        { label: "Following", value: profile.stats.following.toLocaleString("en-GH") },
      ]}
      appPath={`user/@${username}`}
    />
  );
}
