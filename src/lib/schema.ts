/**
 * JSON-LD builders.
 *
 * Two deliberate choices here:
 *
 * 1. Everything ships as ONE `@graph` per page rather than a pile of separate
 *    <script> blocks. Nodes carry stable `@id`s and reference each other, so a
 *    crawler reads a single connected entity ("this WebPage is part of this
 *    WebSite, published by this Organization, which makes this app") instead of
 *    five disconnected islands it has to guess are related. Entity resolution is
 *    the whole game for getting named in an AI answer.
 *
 * 2. No `aggregateRating`, `Review` or `ratingValue` anywhere. The testimonials
 *    on the site are placeholders and the app is not published, so any rating
 *    markup would be fabricated — which is a manual-action risk with Google and
 *    poisons the trust signal we are trying to build. Add it when there are real
 *    store reviews to point at, and not before.
 */
import { BRAND, CATEGORIES, SITE_URL, SOCIAL_PROFILES, absoluteUrl } from "@/lib/seo";

export const ORG_ID = `${SITE_URL}/#organization`;
export const SITE_ID = `${SITE_URL}/#website`;
export const APP_ID = `${SITE_URL}/#app`;
export const LOGO_ID = `${SITE_URL}/#logo`;

type Node = Record<string, unknown>;

/** Wraps nodes in the single @graph envelope that every page emits. */
export const graph = (nodes: Node[]) => ({
  "@context": "https://schema.org",
  "@graph": nodes,
});

export const organizationNode = (): Node => ({
  "@type": "Organization",
  "@id": ORG_ID,
  name: BRAND.name,
  legalName: BRAND.legalName,
  alternateName: BRAND.alternateNames,
  description: BRAND.description,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    "@id": LOGO_ID,
    url: BRAND.logo,
    contentUrl: BRAND.logo,
    width: 512,
    height: 512,
    caption: BRAND.name,
  },
  image: { "@id": LOGO_ID },
  foundingDate: BRAND.foundingDate,
  foundingLocation: {
    "@type": "Place",
    address: { "@type": "PostalAddress", addressCountry: BRAND.foundingCountry },
  },
  /** Names the thing we want to be the answer to, in the entity itself. */
  knowsAbout: [
    "campus marketplace",
    "student marketplace",
    "peer-to-peer commerce",
    "escrow payments",
    "mobile money",
    "social commerce",
    "university student commerce in Ghana",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: BRAND.email,
      telephone: BRAND.phone,
      areaServed: "GH",
      availableLanguage: ["en"],
    },
  ],
  sameAs: SOCIAL_PROFILES,
  areaServed: { "@type": "Country", name: "Ghana" },
});

export const webSiteNode = (): Node => ({
  "@type": "WebSite",
  "@id": SITE_ID,
  name: BRAND.name,
  alternateName: BRAND.alternateNames,
  description: BRAND.description,
  url: SITE_URL,
  publisher: { "@id": ORG_ID },
  inLanguage: "en-GH",
});

/**
 * The product itself. Modelled as SoftwareApplication with no store URLs and no
 * rating: the app is pre-launch, and pointing `downloadUrl` at a listing that
 * does not resolve yet would be a broken claim. Add `downloadUrl`/`installUrl`
 * on the day the store listings go live.
 */
export const appNode = (): Node => ({
  "@type": "SoftwareApplication",
  "@id": APP_ID,
  name: BRAND.name,
  alternateName: `${BRAND.name}: ${BRAND.tagline}`,
  description: BRAND.description,
  applicationCategory: "ShoppingApplication",
  applicationSubCategory: "Campus Marketplace",
  operatingSystem: "Android, iOS",
  url: SITE_URL,
  author: { "@id": ORG_ID },
  publisher: { "@id": ORG_ID },
  featureList: [
    "Campus-scoped marketplace feed",
    "Product discovery through reels and stories",
    "Real-time buyer and seller chat",
    "CarryPay escrow wallet",
    "Mobile money top-ups and withdrawals",
    "Free standard listings",
    "Public seller profiles with QR codes",
    "Digital receipts on every deal",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GHS",
    description: "Free to download, free to browse, and free to post a standard listing.",
  },
  inLanguage: "en-GH",
});

export const serviceNode = (): Node => ({
  "@type": "Service",
  "@id": `${SITE_URL}/#service`,
  name: "Campus marketplace",
  serviceType: "Online marketplace",
  description:
    "A student-to-student marketplace scoped to a single university campus, with escrow-protected payments through the CarryPay wallet.",
  provider: { "@id": ORG_ID },
  areaServed: { "@type": "Country", name: "Ghana" },
  audience: { "@type": "EducationalAudience", educationalRole: "student" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Campus marketplace categories",
    itemListElement: CATEGORIES.map((name) => ({
      "@type": "OfferCatalog",
      name,
    })),
  },
});

export type Crumb = { name: string; path: string };

export const breadcrumbNode = (path: string, crumbs: Crumb[]): Node => ({
  "@type": "BreadcrumbList",
  "@id": `${absoluteUrl(path)}#breadcrumb`,
  itemListElement: crumbs.map((crumb, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: crumb.name,
    item: absoluteUrl(crumb.path),
  })),
});

export type Faq = { q: string; a: string };

const questionNodes = (path: string, faqs: Faq[]): Node[] =>
  faqs.map((faq, i) => ({
    "@type": "Question",
    "@id": `${absoluteUrl(path)}#faq-${i + 1}`,
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  }));

type WebPageInput = {
  path: string;
  title: string;
  description: string;
  crumbs?: Crumb[];
  /**
   * FAQs that are rendered as visible text on this same page. Passing them
   * promotes the node to `["WebPage", "FAQPage"]` and attaches them as
   * `mainEntity`. Never pass FAQs that a reader cannot see on the page:
   * describing invisible content is a structured-data violation and the fastest
   * way to lose rich-result eligibility for the whole domain.
   */
  faqs?: Faq[];
  datePublished?: string;
  dateModified?: string;
  /** The single entity the page is about, e.g. the app or a campus Place. */
  about?: Node | { "@id": string };
  mentions?: Node[];
};

export const webPageNode = ({
  path,
  title,
  description,
  crumbs,
  faqs,
  datePublished,
  dateModified,
  about,
  mentions,
}: WebPageInput): Node => ({
  "@type": faqs?.length ? ["WebPage", "FAQPage"] : "WebPage",
  "@id": `${absoluteUrl(path)}#webpage`,
  url: absoluteUrl(path),
  name: title,
  description,
  isPartOf: { "@id": SITE_ID },
  ...(about ? { about } : { about: { "@id": ORG_ID } }),
  ...(mentions ? { mentions } : {}),
  ...(crumbs ? { breadcrumb: { "@id": `${absoluteUrl(path)}#breadcrumb` } } : {}),
  ...(faqs?.length ? { mainEntity: questionNodes(path, faqs) } : {}),
  primaryImageOfPage: { "@id": LOGO_ID },
  inLanguage: "en-GH",
  ...(datePublished ? { datePublished } : {}),
  ...(dateModified ? { dateModified } : {}),
});

export type HowToStep = { name: string; text: string };

export const howToNode = (
  path: string,
  name: string,
  description: string,
  steps: HowToStep[]
): Node => ({
  "@type": "HowTo",
  "@id": `${absoluteUrl(path)}#howto`,
  name,
  description,
  totalTime: "PT2M",
  estimatedCost: { "@type": "MonetaryAmount", currency: "GHS", value: "0" },
  step: steps.map((step, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: step.name,
    text: step.text,
    url: `${absoluteUrl(path)}#step-${i + 1}`,
  })),
});

/**
 * The site-wide nodes, emitted once from the root layout so they are present on
 * every URL. Page-level graphs then reference them by `@id` rather than
 * restating them; consumers merge every ld+json block on a page into one graph,
 * so `{ "@id": ORG_ID }` on a WebPage resolves against the node below.
 */
export const baseNodes = (): Node[] => [
  organizationNode(),
  webSiteNode(),
  appNode(),
  serviceNode(),
];
