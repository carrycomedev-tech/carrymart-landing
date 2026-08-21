import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LinkLanding from "@/components/deep-link/link-landing";
import { BRAND } from "@/lib/seo";
import { GUID_PATTERN, formatCedis, getPost } from "@/lib/link-targets";

/**
 * `/p/{id}` — the web face of a shared post (a feed image, or a reel).
 *
 * Included because the API emits this URL as `PostDto.shareUrl`, so it is
 * already out in the world and had nowhere to land. Note the difference from the
 * other two: `/p/*` is **not** in the verified path list the app claims, so this
 * page renders even on a phone that has CarryMart installed. Closing that gap is
 * a three-line change and is written up in `DEEP_LINKING.md` at the repo root — it needs the
 * app's manifest and the AASA to add the path in the same release, and doing it
 * on one platform only would make the same link behave differently per device.
 */

type Props = { params: Promise<{ id: string }> };

/** The still to show for a reel; posts carry a thumb per media item. */
const posterFor = (post: Awaited<ReturnType<typeof getPost>>) => {
  const first = post?.media[0];
  if (!first) return null;
  return post?.kind === "video" ? first.thumbUrl : first.thumbUrl ?? first.url;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  if (!GUID_PATTERN.test(id)) {
    return { title: "Page not found", robots: { index: false, follow: true } };
  }

  const post = await getPost(id);
  if (!post) return { title: "Post not found", robots: { index: false, follow: true } };

  const author = post.author.name ?? post.author.username ?? "A CarryMart seller";
  // Brand-free: the root layout's title template appends "| CarryMart".
  const title = post.listing?.title ?? `A post by ${author}`;
  const description =
    post.caption?.slice(0, 160) ??
    `${author} posted this on ${BRAND.name}, the campus marketplace for students in Ghana.`;
  const poster = posterFor(post);

  return {
    title,
    description,
    alternates: { canonical: `/p/${post.id}` },
    robots: { index: false, follow: true },
    openGraph: {
      title,
      description,
      url: `/p/${post.id}`,
      type: "website",
      // A reel with no generated thumbnail yet falls back to the site card.
      images: [{ url: poster ?? BRAND.ogImage, alt: title }],
    },
  };
}

export default async function PostLinkPage({ params }: Props) {
  const { id } = await params;
  if (!GUID_PATTERN.test(id)) notFound();

  const post = await getPost(id);
  if (!post) notFound();

  const author = post.author.name ?? post.author.username ?? "A CarryMart seller";
  const poster = posterFor(post);

  return (
    <LinkLanding
      kind={post.kind === "video" ? "Reel" : "Post"}
      title={post.listing?.title ?? `${author} on ${BRAND.name}`}
      subtitle={post.caption ?? `Posted by ${author}.`}
      verified={post.author.isVerified}
      image={poster ? { url: poster, alt: post.caption ?? author } : null}
      facts={[
        { label: "Posted by", value: post.author.username ? `@${post.author.username}` : author },
        { label: "Likes", value: post.likeCount.toLocaleString("en-GH") },
        ...(post.listing
          ? [{ label: "Item", value: formatCedis(post.listing.price) }]
          : []),
      ]}
      appPath={`post/${post.id}`}
    />
  );
}
