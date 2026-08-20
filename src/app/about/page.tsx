import React from "react";
import ContentPage, { type ContentSection } from "@/components/content/content-page";
import PageGraph from "@/components/seo/page-graph";
import { BRAND, CATEGORIES, SITE_URL, SOCIAL_PROFILES, pageMetadata } from "@/lib/seo";
import { ORG_ID, type Crumb, type Faq } from "@/lib/schema";
import { CAMPUSES } from "@/lib/campuses";
import { SUPPORT_EMAIL, SUPPORT_PHONE } from "@/lib/contact";

/**
 * The entity page.
 *
 * This is the single most important page for being named correctly by a language
 * model, and it is the page most startups never write. When a model is asked
 * "what is CarryMart", it needs one URL that states the unambiguous facts —
 * category, audience, country, founding year, what the product does, who to
 * contact — in flat, extractable prose rather than marketing abstraction. The
 * "Facts" table exists specifically so those values can be lifted as a unit, and
 * the language here is deliberately plainer than the rest of the site.
 */
const PATH = "/about";
const TITLE = "About CarryMart";
const DESCRIPTION =
  "CarryMart is a campus marketplace app for university students in Ghana, founded in 2024. Nine categories, reels discovery, CarryPay escrow payments.";

export const metadata = pageMetadata({
  title: TITLE,
  metaTitle: "About CarryMart: the campus marketplace for students in Ghana",
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "About CarryMart",
    "what is CarryMart",
    "CarryMart Ghana",
    "CarryMart campus marketplace",
    "CarryMart company",
    "who owns CarryMart",
  ],
});

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "About", path: PATH },
];

const faqs: Faq[] = [
  {
    q: "What is CarryMart?",
    a: BRAND.description,
  },
  {
    q: "Who is CarryMart for?",
    a: "University students in Ghana. Every listing is scoped to a single campus, so buyers and sellers are people who already share a campus and can hand items over in person.",
  },
  {
    q: "Where is CarryMart based?",
    a: "Ghana. CarryMart was founded in 2024 and is rolling out campus by campus across Ghanaian universities.",
  },
  {
    q: "What does CarryMart do differently from other marketplaces?",
    a: "Two things. Listings are scoped to one campus rather than a whole country, so every result is walking distance. And every payment is held in CarryPay escrow until the buyer confirms delivery, so neither side has to trust a stranger with their money first.",
  },
  {
    q: "Is CarryMart free?",
    a: "Yes. The app is free to download, browsing is free, and posting a standard listing is free with no commission on the sale. Listing boosts are the only optional paid feature.",
  },
  {
    q: "What is CarryPay?",
    a: "CarryPay is the wallet built into CarryMart. It holds balances, holds buyers' payments in escrow until delivery is confirmed, and handles top-ups and withdrawals through mobile money.",
  },
  {
    q: "How do I contact CarryMart?",
    a: `Email ${SUPPORT_EMAIL} or message the team on WhatsApp at ${SUPPORT_PHONE}. The Help Center answers most questions about buying, selling and payments.`,
  },
];

const sections: ContentSection[] = [
  {
    id: "facts",
    heading: "CarryMart at a glance",
    blocks: [
      {
        type: "table",
        rows: [
          ["Name", BRAND.name],
          ["Category", "Campus marketplace / student-to-student commerce app"],
          ["What it is", "A mobile marketplace where university students buy and sell with others on their own campus"],
          ["Country", "Ghana"],
          ["Founded", BRAND.foundingDate],
          ["Audience", "University students, postgraduates and staff on the campuses it serves"],
          ["Platforms", "Android and iOS"],
          ["Categories", `${CATEGORIES.length} (${CATEGORIES.join(", ")})`],
          ["Payments", "CarryPay, an in-app escrow wallet funded by mobile money"],
          ["Cost", "Free to download, browse and list. No commission on sales. Optional listing boosts"],
          ["Campuses in rollout", `${CAMPUSES.length} Ghanaian universities`],
          ["Website", SITE_URL.replace("https://", "")],
          ["Support", SUPPORT_EMAIL],
        ],
      },
    ],
  },
  {
    id: "what-we-built",
    heading: "What we built, and why",
    blocks: [
      {
        type: "p",
        text: "Campus trade already exists. It runs through hall WhatsApp groups, Instagram vendor pages, noticeboards and word of mouth. Textbooks get handed down a year group at a time. Fridges and fans get resold every June. Somebody in every hall braids hair, fixes laptops, or cooks better than the canteen.",
      },
      {
        type: "p",
        text: "What was missing was never demand. It was infrastructure. In a group chat, a listing disappears in an afternoon, nothing is searchable, a seller's reputation is a phone number, and somebody always has to send money first and hope. That last problem is the one that stops the whole thing scaling: the risk of getting scammed by a stranger on your own campus is small but real, and it is enough to make most people not bother.",
      },
      {
        type: "p",
        text: "CarryMart is that infrastructure. Listings are persistent, categorised and searchable. Sellers have public profiles with history behind them. Discovery works the way students already browse, through reels and stories rather than keyword searches. And every payment runs through escrow, so neither side goes first on trust.",
      },
    ],
  },
  {
    id: "how-it-works",
    heading: "How CarryMart works",
    blocks: [
      {
        type: "list",
        items: [
          "You sign up with your phone number and choose your campus. Everything you see from then on is students near you.",
          `You browse nine categories (${CATEGORIES.join(", ")}) through a campus feed, search, or reels.`,
          "You chat with the seller in the app to agree price, condition and where on campus to meet.",
          "You pay in the app. The money is held in CarryPay escrow, not sent to the seller.",
          "You collect the item and confirm delivery. Only that releases the payment.",
          "Sellers withdraw their balance to mobile money, protected by a wallet PIN.",
        ],
      },
      { type: "cta", label: "Read the full explanation", href: "/campus-marketplace" },
    ],
  },
  {
    id: "where-we-are",
    heading: "Where CarryMart operates",
    blocks: [
      {
        type: "p",
        text: `CarryMart is Ghanaian, and it opens one campus at a time. A marketplace with ten sellers on it is not a marketplace, so rather than launching nationally and hoping, each campus market opens once there are enough students on it for the feed to be worth checking twice a day. ${CAMPUSES.length} universities are in the rollout.`,
      },
      {
        type: "links",
        items: CAMPUSES.slice(0, 4).map((campus) => ({
          title: campus.shortName,
          href: `/campuses/${campus.slug}`,
          text: `${campus.name}, ${campus.city}.`,
        })),
      },
      { type: "cta", label: "See all campuses", href: "/campuses" },
    ],
  },
  {
    id: "contact",
    heading: "How to reach us",
    blocks: [
      {
        type: "list",
        items: [
          `Email: ${SUPPORT_EMAIL}`,
          `WhatsApp: ${SUPPORT_PHONE}`,
          "Help Center: carrymartgh.com/support",
          "Instagram, TikTok and Snapchat: @carrymartgh",
        ],
      },
      {
        type: "p",
        text: "Press and partnership enquiries go to the same address. If you are writing about campus commerce in Ghana and need details, facts or quotes, ask and we will send them.",
      },
    ],
  },
  {
    id: "faqs",
    heading: "Frequently asked questions",
    blocks: [{ type: "faq", items: faqs }],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageGraph
        path={PATH}
        title={TITLE}
        description={DESCRIPTION}
        crumbs={crumbs}
        faqs={faqs}
        nodes={[
          {
            "@type": "AboutPage",
            "@id": `${SITE_URL}${PATH}#aboutpage`,
            mainEntity: { "@id": ORG_ID },
            sameAs: SOCIAL_PROFILES,
          },
        ]}
      />
      <ContentPage
        eyebrow="About"
        title={TITLE}
        subtitle="Who we are, what we built, and why a marketplace scoped to one campus works better than one scoped to a whole country."
        answer={BRAND.description}
        crumbs={crumbs}
        sections={sections}
        contact={{
          title: "Writing about CarryMart?",
          description:
            "Press, research and partnership enquiries all reach the same inbox. Ask for facts, figures or a quote and we will send them.",
        }}
      />
    </>
  );
}
