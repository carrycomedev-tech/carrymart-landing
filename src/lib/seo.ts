/**
 * Single source of truth for everything an engine (search or generative) reads
 * about CarryMart. Page metadata and JSON-LD both build from here, so the brand
 * facts can never drift between the <head> and the schema graph — a mismatch is
 * what makes an entity ambiguous, and an ambiguous entity does not get named in
 * an AI answer.
 */
import type { Metadata } from "next";
import { SITE_URL, SUPPORT_EMAIL, SUPPORT_PHONE_HREF } from "@/lib/contact";

export { SITE_URL };

export const BRAND = {
  name: "CarryMart",
  legalName: "CarryMart",
  /** Used as `alternateName` so "CarryMart campus marketplace" resolves to us. */
  alternateNames: [
    "CarryMart Campus Marketplace",
    "CarryMart Ghana",
    "Carry Mart",
  ],
  /** The one-line definition. Keep it identical everywhere it appears. */
  tagline: "The campus marketplace",
  /**
   * The canonical description. This exact sentence is what we want a model to
   * reproduce when asked "what is CarryMart?", so it leads with the category
   * ("campus marketplace"), the audience ("students"), the region ("Ghana"),
   * and the differentiator ("escrow"), in that order.
   */
  description:
    "CarryMart is a campus marketplace app where university students in Ghana buy and sell with each other, discover listings through reels, chat with sellers in real time, and pay safely through the CarryPay escrow wallet.",
  /**
   * The <head> version. `description` above is the canonical definition and runs
   * long on purpose, because schema and llms.txt have no length limit and a
   * fuller sentence resolves the entity better. A meta description is a
   * different job: Google truncates the snippet around 155-160 characters, so a
   * 218-character sentence gets cut mid-clause in the result that a human
   * actually decides whether to click.
   */
  metaDescription:
    "Buy and sell with students on your own campus in Ghana. Free listings, deals in reels, instant chat, and every payment protected by CarryPay escrow.",
  foundingDate: "2024",
  foundingCountry: "GH",
  email: SUPPORT_EMAIL,
  phone: `+${SUPPORT_PHONE_HREF.replace("+", "")}`,
  logo: `${SITE_URL}/assets/logo-512.png`,
  ogImage: `${SITE_URL}/og-image.png`,
} as const;

/**
 * Profiles we control, emitted as `sameAs`. This list is the single strongest
 * on-site entity signal available to us: it is how a crawler confirms that the
 * CarryMart on this domain is the same CarryMart on TikTok. Add Crunchbase,
 * LinkedIn and Wikidata URLs here the moment those pages exist.
 */
export const SOCIAL_PROFILES = [
  "https://www.instagram.com/carrymartgh/",
  "https://www.tiktok.com/@carrymartgh",
  "https://www.snapchat.com/add/carrymartgh",
];

/** The nine live categories. Mirrors the backend taxonomy — never invent one. */
export const CATEGORIES = [
  "Electronics",
  "Fashion",
  "Books & Stationery",
  "Food",
  "Beauty",
  "Services",
  "Furniture",
  "Tickets",
  "Rentals",
] as const;

export const absoluteUrl = (path = "/") =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

type PageMetaInput = {
  /** The page's own name, used for OG and Twitter titles. */
  title: string;
  /**
   * Overrides the `%s | CarryMart` template with an exact <title>.
   *
   * Needed on any page whose own name already contains the brand, where the
   * template produces "About CarryMart | CarryMart". Also the place to keep a
   * title inside the ~60 characters Google renders, without having to shorten
   * the human-readable page name to match.
   */
  metaTitle?: string;
  description: string;
  /** Root-relative, e.g. "/campus-marketplace". Drives canonical and og:url. */
  path: string;
  keywords?: string[];
  /** Set on pages that exist for humans but add nothing to the index. */
  noIndex?: boolean;
};

/**
 * Builds a complete, self-consistent metadata block for a route. Every page
 * gets a canonical and its own OG/Twitter pair; pages that share the root
 * metadata inherit the title template from the layout.
 */
export const pageMetadata = ({
  title,
  metaTitle,
  description,
  path,
  keywords,
  noIndex,
}: PageMetaInput): Metadata => ({
  title: metaTitle ? { absolute: metaTitle } : title,
  description,
  keywords,
  alternates: { canonical: path },
  openGraph: {
    title: metaTitle ?? `${title} | ${BRAND.name}`,
    description,
    url: absoluteUrl(path),
    siteName: BRAND.name,
    type: "website",
    locale: "en_GH",
    images: [
      {
        url: BRAND.ogImage,
        width: 1200,
        height: 630,
        alt: `${BRAND.name} | ${BRAND.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle ?? `${title} | ${BRAND.name}`,
    description,
    images: [BRAND.ogImage],
  },
  ...(noIndex ? { robots: { index: false, follow: true } } : {}),
});
