import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
 * so on a phone with CarryMart installed this code never runs.
 */

type Props = { params: Promise<{ handle: string }> };

/** `%40ama_styles` and `@ama_styles` both arrive here; neither keeps the `@`. */
function usernameFrom(rawSegment: string): string | null {
  const segment = decodeURIComponent(rawSegment);
  if (!segment.startsWith("@")) return null;
  const username = segment.slice(1).toLowerCase();
  return USERNAME_PATTERN.test(username) ? username : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const username = usernameFrom((await params).handle);
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
  const username = usernameFrom((await params).handle);
  if (!username) notFound();

  const profile = await getProfile(username);

  /**
   * A handle that resolves to nothing is a real 404 — a deleted account, or a
   * mistyped link. That is different from the API being unreachable, but from
   * here they are indistinguishable, and "we could not find that page" is the
   * honest answer in both cases.
   */
  if (!profile) notFound();

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
