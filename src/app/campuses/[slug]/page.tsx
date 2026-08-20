import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ContentPage, { type ContentSection } from "@/components/content/content-page";
import PageGraph from "@/components/seo/page-graph";
import { pageMetadata, absoluteUrl } from "@/lib/seo";
import type { Crumb, Faq } from "@/lib/schema";
import { CAMPUSES, asProse, getCampus, type Campus } from "@/lib/campuses";

/**
 * Campus pages, generated from `CAMPUSES`.
 *
 * These exist to catch the searches students actually run — "KNUST marketplace",
 * "buy and sell Legon", "UCC student market" — which no single national page can
 * rank for. The template is deliberately content-heavy and each page draws on
 * per-campus facts (city, region, halls, neighbourhoods, the categories that
 * move there, a line of local colour) so that no two pages are the same text
 * with a name swapped. That distinction is the line between a useful local page
 * and a doorway page, and Google treats the two very differently.
 *
 * Copy is written for a pre-launch product: it describes how the campus market
 * works and points at the launch list, and never claims the market is already
 * live or quotes a seller count.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return CAMPUSES.map((campus) => ({ slug: campus.slug }));
}

const pathFor = (campus: Campus) => `/campuses/${campus.slug}`;

/**
 * Two titles, deliberately different.
 *
 * `metaTitleFor` is the <title>: abbreviation plus city, which keeps it inside
 * the ~60 characters Google renders and still carries the two terms students
 * actually type. Templating the full university name in produced titles of 110+
 * characters that were truncated to a fragment in the result.
 *
 * `h1For` is the visible heading and carries the full official name, which is
 * where the long-form match belongs: it reads as a sentence rather than a
 * keyword string, and the H1 is not length-limited.
 */
const metaTitleFor = (campus: Campus) =>
  `${campus.shortName} marketplace: buy and sell on campus in ${campus.city}`;

const h1For = (campus: Campus) =>
  `Buying and selling on campus at ${campus.name}`;

/** The page's own name, used for OG, Twitter and the schema graph. */
const titleFor = (campus: Campus) =>
  `${campus.shortName} marketplace: buy and sell on campus at ${campus.name}`;

/**
 * Built from `shortName` and `city`, not `name`. Templating the full university
 * name in pushed the longest of them ("Kwame Nkrumah University of Science and
 * Technology") to 281 characters, which Google truncates around 160 — so the
 * clause a student needed to read was the one being cut. The full name is still
 * in the H1, the title and the schema.
 */
const descriptionFor = (campus: Campus) =>
  `Buying and selling at ${campus.shortName}, ${campus.city}. Free listings, handovers on campus, and every payment held in CarryPay escrow until you confirm delivery.`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const campus = getCampus(slug);
  if (!campus) return {};

  return pageMetadata({
    title: titleFor(campus),
    metaTitle: metaTitleFor(campus),
    description: descriptionFor(campus),
    path: pathFor(campus),
    keywords: [
      `${campus.shortName} marketplace`,
      `buy and sell ${campus.shortName}`,
      `${campus.shortName} student market`,
      `${campus.city} student marketplace`,
      ...campus.aka.map((name) => `${name} marketplace`),
      "campus marketplace Ghana",
    ],
  });
}

const faqsFor = (campus: Campus): Faq[] => [
  {
    q: `How do I buy something from another student at ${campus.shortName}?`,
    a: `Open CarryMart, set your campus to ${campus.name}, and browse the feed, search or reels. Message the seller to agree the price and a spot to meet, then pay in the app. Your money sits in CarryPay escrow until you have the item in hand and confirm delivery, so the seller is only paid once you are satisfied.`,
  },
  {
    q: `Does it cost anything to sell at ${campus.shortName}?`,
    a: "No. Downloading the app, browsing and posting a standard listing are all free, and CarryMart takes no commission on the sale. The only optional cost is a listing boost, which pushes your item to the top of your campus feed for 7 or 30 days.",
  },
  {
    q: `Where should I meet for a handover at ${campus.shortName}?`,
    a: `Somewhere public and busy on campus: ${
      campus.halls
        ? `outside ${campus.halls[0]}, the library, or anywhere with people around`
        : "the library, a lecture block entrance, or anywhere with people around"
    }. Agree the spot in chat so there is a record of it, and only confirm the delivery once the item is actually in your hands.`,
  },
  {
    q: `What sells fastest at ${campus.shortName}?`,
    a: `${asProse(campus.popularCategories)} tend to move fastest on a campus of this shape. All nine CarryMart categories are open on every campus, so anything legal that fits campus life can be listed.`,
  },
  {
    q: `Is CarryMart live at ${campus.name} yet?`,
    a: `CarryMart is rolling out one campus at a time so that each market is dense enough to be worth browsing on day one. Join the launch list and tell us you are at ${campus.shortName}. Interest from a campus is how the order is decided, and you will be told the day it opens.`,
  },
];

const sectionsFor = (campus: Campus): ContentSection[] => [
  {
    id: "on-this-campus",
    heading: `Why a campus market works at ${campus.shortName}`,
    blocks: [
      { type: "p", text: campus.colour },
      {
        type: "p",
        text: `CarryMart scopes every listing to a single campus. Set yours to ${campus.name} and the feed, the search results and the reels are all students in ${campus.city}. That means there is no delivery fee, no courier wait, and the person you are buying from is somebody your hall can vouch for.`,
      },
      {
        type: "list",
        items: [
          `Listings from students around ${asProse(campus.neighbourhoods)}.`,
          "Free to post, no commission on the sale.",
          "Every payment held in CarryPay escrow until you confirm delivery.",
          "Public seller profiles, so you can see who you are dealing with.",
        ],
      },
    ],
  },
  {
    id: "what-moves",
    heading: `What students at ${campus.shortName} buy and sell`,
    blocks: [
      {
        type: "p",
        text: `All nine categories are open on every campus. These are the ones that tend to move fastest at ${campus.shortName}:`,
      },
      {
        type: "table",
        head: ["Category", "Typical listings"],
        rows: campus.popularCategories.map((category) => [
          category,
          CATEGORY_EXAMPLES[category] ?? "Anything legal that fits campus life.",
        ]),
      },
      {
        type: "p",
        text: "Beyond those, students list electronics, books and stationery, food, beauty, services, furniture, tickets and rentals. If your campus wants it, it can be listed.",
      },
    ],
  },
  {
    id: "handovers",
    heading: `Where to meet for a handover at ${campus.shortName}`,
    blocks: [
      {
        type: "p",
        text: campus.halls
          ? `Agree a public, busy spot in chat before you go. Around ${campus.name} that usually means the library, a lecture block entrance, or the area outside a hall like ${asProse(
              campus.halls.slice(0, 4)
            )}.`
          : `Agree a public, busy spot in chat before you go. Around ${campus.name} that usually means the library, a lecture block entrance, or the main gate.`,
      },
      {
        type: "p",
        text: `Off campus, most ${campus.shortName} students are around ${asProse(
          campus.neighbourhoods
        )}, so a seller's location in a listing tells you immediately whether a deal is a five-minute walk or a trotro ride.`,
      },
      {
        type: "callout",
        title: "The one rule that matters",
        text: "Confirm the delivery in the app only once the item is physically in your hands. That confirmation is what releases the money out of escrow, and it is the whole reason you are not the one carrying the risk.",
      },
    ],
  },
  {
    id: "escrow",
    heading: "How you get paid, and how you avoid getting scammed",
    blocks: [
      {
        type: "p",
        text: "CarryPay is the wallet built into CarryMart, and it is what makes buying from a stranger on your own campus a reasonable thing to do.",
      },
      {
        type: "steps",
        items: [
          {
            name: "The buyer pays into escrow",
            text: "Money leaves the buyer's CarryPay wallet but does not reach the seller. It is held.",
          },
          {
            name: "The handover happens on campus",
            text: "The seller can see the payment is committed before handing anything over, so neither side is going first on trust.",
          },
          {
            name: "The buyer confirms delivery",
            text: "Only this releases the money. If the item never arrives or is not as described, the buyer does not confirm and the money stays in escrow while support investigates.",
          },
          {
            name: "The seller withdraws to mobile money",
            text: "Funds land in the seller's CarryPay wallet and can be withdrawn to MTN MoMo or another network, protected by their wallet PIN.",
          },
        ],
      },
      {
        type: "cta",
        label: "How CarryPay escrow works",
        href: "/carrypay",
      },
    ],
  },
  {
    id: "faqs",
    heading: `${campus.shortName} questions`,
    blocks: [{ type: "faq", items: faqsFor(campus) }],
  },
  {
    id: "other-campuses",
    heading: "Other campuses on CarryMart",
    blocks: [
      {
        type: "links",
        items: CAMPUSES.filter((c) => c.slug !== campus.slug)
          .slice(0, 6)
          .map((c) => ({
            title: `${c.shortName}, ${c.city}`,
            href: pathFor(c),
            text: `Buying and selling at ${c.name}.`,
          })),
      },
      { type: "cta", label: "See all campuses", href: "/campuses" },
    ],
  },
];

/** Category examples, so the per-campus table says something concrete. */
const CATEGORY_EXAMPLES: Record<string, string> = {
  Electronics: "Phones, laptops, chargers, earbuds, calculators, ring lights",
  Fashion: "Thrift drops, sneakers, corporate wear, bags, jewellery",
  "Books & Stationery": "Course texts, past papers, lab coats, drawing sets",
  Food: "Home cooking, snacks, drinks, weekend meal plans",
  Beauty: "Braids and barbering, nails, lashes, skincare, makeup",
  Services: "Phone and laptop repair, printing, design, tutoring, tailoring",
  Furniture: "Fridges, fans, mattresses, desks, kettles at end of year",
  Tickets: "Hall week, concerts, sports fixtures, bus seats home",
  Rentals: "Hostel rooms, gowns and suits, cameras, event equipment",
};

export default async function CampusPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const campus = getCampus(slug);
  if (!campus) notFound();

  const path = pathFor(campus);
  const title = titleFor(campus);
  const description = descriptionFor(campus);
  const faqs = faqsFor(campus);

  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: "Campuses", path: "/campuses" },
    { name: campus.shortName, path },
  ];

  return (
    <>
      <PageGraph
        path={path}
        title={title}
        description={description}
        crumbs={crumbs}
        faqs={faqs}
        nodes={[
          // Naming the university as a real CollegeOrUniversity entity is what
          // ties this page to a place a crawler already knows about, rather than
          // leaving "KNUST" as a bare string in a heading.
          {
            "@type": "CollegeOrUniversity",
            "@id": `${absoluteUrl(path)}#campus`,
            name: campus.name,
            alternateName: campus.aka,
            address: {
              "@type": "PostalAddress",
              addressLocality: campus.city,
              addressRegion: campus.region,
              addressCountry: "GH",
            },
          },
        ]}
      />
      <ContentPage
        eyebrow={`${campus.city}, ${campus.region} Region`}
        title={h1For(campus)}
        subtitle={`Everything students at ${campus.shortName} need to know about buying and selling on their own campus: what moves, where to meet, and how the money is protected.`}
        answer={`Students at ${campus.name} can buy and sell with each other on CarryMart, the campus marketplace app. Listings are scoped to the ${campus.shortName} campus in ${campus.city}, posting is free, and every payment is held in CarryPay escrow until the buyer confirms delivery, so handovers happen on foot and nobody has to pay a stranger first.`}
        crumbs={crumbs}
        sections={sectionsFor(campus)}
        contact={{
          title: `Questions about CarryMart at ${campus.shortName}?`,
          description:
            "Message the team. We read every one, and telling us your campus moves it up the rollout list.",
        }}
      />
    </>
  );
}
