import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LinkLanding from "@/components/deep-link/link-landing";
import { BRAND } from "@/lib/seo";
import { GUID_PATTERN, formatCedis, getListing } from "@/lib/link-targets";

/**
 * `/l/{id}` — the web face of a shared listing.
 *
 * This exact URL is what the API puts in `ListingDto.shareUrl` (built from
 * `Platform:WebBaseUrl`), so it is the link every share sheet in the app sends.
 * On a phone with CarryMart installed the OS routes it into the app and this
 * page is never fetched; everywhere else it is the preview, and the reason a
 * forwarded listing shows a photo and a price in WhatsApp instead of a bare URL.
 */

type Props = { params: Promise<{ id: string }> };

const soldNote =
  "This item is marked sold. Sellers usually have more — open their profile in the app to see what else is listed.";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  if (!GUID_PATTERN.test(id)) {
    return { title: "Page not found", robots: { index: false, follow: true } };
  }

  const listing = await getListing(id);
  if (!listing) return { title: "Listing not found", robots: { index: false, follow: true } };

  const title = `${listing.title} — ${formatCedis(listing.price)}`;
  const description =
    listing.description?.slice(0, 160) ??
    `${listing.title} for ${formatCedis(listing.price)} on ${BRAND.name}, the campus marketplace for students in Ghana.`;

  return {
    title,
    description,
    alternates: { canonical: `/l/${listing.id}` },
    /**
     * Not indexed, for the same reason as profiles plus one of its own: a
     * listing is gone the day it sells, and filling the index with URLs that
     * become dead ends is a liability rather than long-tail traffic. The campus
     * pages are what this site ranks with.
     */
    robots: { index: false, follow: true },
    openGraph: {
      title,
      description,
      url: `/l/${listing.id}`,
      type: "website",
      images: [{ url: listing.imageUrl ?? BRAND.ogImage, alt: listing.title }],
    },
  };
}

export default async function ListingLinkPage({ params }: Props) {
  const { id } = await params;
  if (!GUID_PATTERN.test(id)) notFound();

  const listing = await getListing(id);
  if (!listing) notFound();

  const isSold = listing.status?.toLowerCase() === "sold" || listing.soldAt !== null;
  const sellerName = listing.seller.name ?? listing.seller.username ?? "A CarryMart seller";

  return (
    <LinkLanding
      kind={isSold ? "Listing · sold" : "Listing"}
      title={listing.title}
      subtitle={listing.description ?? `Listed by ${sellerName}.`}
      image={
        listing.imageUrl ? { url: listing.imageUrl, alt: listing.title } : null
      }
      facts={[
        { label: "Price", value: formatCedis(listing.price) },
        { label: "Condition", value: listing.condition },
        { label: "Seller", value: listing.seller.username ? `@${listing.seller.username}` : sellerName },
        ...(listing.location?.name
          ? [{ label: "Pickup", value: listing.location.name }]
          : []),
      ]}
      appPath={`listing/${listing.id}`}
      note={isSold ? soldNote : undefined}
    />
  );
}
