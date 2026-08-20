import React from "react";
import ContentPage, { type ContentSection } from "@/components/content/content-page";
import PageGraph from "@/components/seo/page-graph";
import { pageMetadata, absoluteUrl } from "@/lib/seo";
import type { Crumb, Faq } from "@/lib/schema";
import { CAMPUSES } from "@/lib/campuses";

const PATH = "/campuses";
const TITLE = "CarryMart campuses in Ghana";
const DESCRIPTION = `The ${CAMPUSES.length} Ghanaian university campuses in the CarryMart rollout, from Legon and KNUST to UCC and UDS. Find yours and see how it works there.`;

export const metadata = pageMetadata({
  title: TITLE,
  metaTitle: `CarryMart campuses: ${CAMPUSES.length} universities in Ghana`,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "CarryMart campuses",
    "university marketplace Ghana",
    "campus marketplace Legon",
    "KNUST marketplace",
    "student marketplace by campus",
  ],
});

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Campuses", path: PATH },
];

const faqs: Faq[] = [
  {
    q: "How does CarryMart choose which campus to open next?",
    a: "Density, not size. A marketplace is only worth browsing if there are enough sellers on it the day it opens, so campuses open one at a time rather than all at once. Signing up from a campus that is not open yet is the clearest signal we have about where to go next.",
  },
  {
    q: "My campus is not on this list. Can I still sign up?",
    a: "Yes. Join the launch list and tell us where you study. You will be first to hear when your campus market opens, and your interest counts towards the order we open them in.",
  },
  {
    q: "Can I browse a campus other than my own?",
    a: "Yes. You choose a home campus when you set up your account, and you can switch campuses from the home screen at any time to browse another market. Handovers still happen in person, so buying from a campus you can reach is the practical limit.",
  },
];

const sections: ContentSection[] = [
  {
    id: "all-campuses",
    heading: "Every campus in the rollout",
    blocks: [
      {
        type: "p",
        text: "Each campus gets its own market: its own feed, its own reels, its own sellers. Pick yours to see what tends to move there and how handovers work on that campus.",
      },
      {
        type: "links",
        items: CAMPUSES.map((campus) => ({
          title: `${campus.shortName}: ${campus.name}`,
          href: `/campuses/${campus.slug}`,
          text: `${campus.city}, ${campus.region} Region.`,
        })),
      },
    ],
  },
  {
    id: "how-rollout-works",
    heading: "How the campus rollout works",
    blocks: [
      {
        type: "p",
        text: "CarryMart opens one campus at a time. A marketplace with ten sellers on it is not a marketplace, so rather than launching nationally and hoping, each campus market opens once there are enough students on it for the feed to be worth opening twice a day.",
      },
      {
        type: "list",
        items: [
          "Every listing is scoped to a campus, so what you see is what you can walk to.",
          "You pick your home campus at sign-up and can switch at any time.",
          "Escrow, chat, reels and free listings work identically on every campus.",
        ],
      },
      {
        type: "cta",
        label: "Join the launch list",
        href: "/#download",
        note: "Tell us your campus and we will let you know the day it opens.",
      },
    ],
  },
  {
    id: "faqs",
    heading: "Questions about campus coverage",
    blocks: [{ type: "faq", items: faqs }],
  },
];

export default function CampusesPage() {
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
            "@type": "ItemList",
            "@id": `${absoluteUrl(PATH)}#campus-list`,
            name: "CarryMart campuses in Ghana",
            numberOfItems: CAMPUSES.length,
            itemListElement: CAMPUSES.map((campus, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: campus.name,
              url: absoluteUrl(`/campuses/${campus.slug}`),
            })),
          },
        ]}
      />
      <ContentPage
        eyebrow="Campuses"
        title={TITLE}
        subtitle="CarryMart opens one campus at a time, so every market is worth browsing on the day it launches. Find yours below."
        answer={`CarryMart is rolling out across ${CAMPUSES.length} Ghanaian university campuses, including the University of Ghana at Legon, KNUST in Kumasi, the University of Cape Coast, UPSA, GIMPA and UDS in Tamale. Every listing is scoped to a single campus, so anything you see is a walk away rather than a courier away.`}
        crumbs={crumbs}
        sections={sections}
        contact={{
          title: "Want your campus opened next?",
          description:
            "Send us your university and we will add it to the rollout list. Interest from a campus is how we decide the order.",
        }}
      />
    </>
  );
}
