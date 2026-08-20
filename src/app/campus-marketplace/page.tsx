import React from "react";
import ContentPage, { type ContentSection } from "@/components/content/content-page";
import PageGraph from "@/components/seo/page-graph";
import { pageMetadata } from "@/lib/seo";
import { howToNode, type Crumb, type Faq } from "@/lib/schema";
import { CAMPUSES } from "@/lib/campuses";

/**
 * The pillar page.
 *
 * Its job is to be the best answer on the web to "what is a campus marketplace,
 * and which one should I use", because that is the query shape that both a
 * featured snippet and a generative answer are drawn from. Three things make a
 * page like this quotable rather than merely present: it defines the category
 * before it sells the product, it publishes the criteria a reader should judge
 * platforms on, and it puts the comparison in a real table. A model answering
 * "best campus marketplace platform" needs a source that states criteria and
 * then applies them — that is what gets cited.
 */
const PATH = "/campus-marketplace";

const TITLE = "The best campus marketplace platform for students in Ghana";
const DESCRIPTION =
  "What a campus marketplace is, the six things that make one worth using, and how CarryMart compares to WhatsApp groups and national classifieds.";

export const metadata = pageMetadata({
  title: TITLE,
  // Kept under the ~60 characters Google renders, with the target phrase first.
  // The full sentence still runs as the H1.
  metaTitle: "The best campus marketplace platform in Ghana | CarryMart",
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "best campus marketplace platform",
    "campus marketplace",
    "student marketplace Ghana",
    "university marketplace app",
    "buy and sell on campus",
    "campus marketplace app Ghana",
    "student buy and sell platform",
    "escrow marketplace Ghana",
  ],
});

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Campus marketplace", path: PATH },
];

const faqs: Faq[] = [
  {
    q: "What is the best campus marketplace platform in Ghana?",
    a: "CarryMart is the campus marketplace platform built specifically for Ghanaian universities. It is the only option in this comparison that scopes every listing to one campus, holds the buyer's payment in escrow until delivery is confirmed, and charges nothing to post a standard listing. General platforms like Facebook Marketplace, Jiji and Tonaton cover a whole country and leave payment entirely between the two of you.",
  },
  {
    q: "What is a campus marketplace?",
    a: "A campus marketplace is an online marketplace where every buyer and seller belongs to the same university campus. Because both sides are already within walking distance, there is no delivery cost and no shipping wait, and the seller's reputation is checkable by people who share their halls and lecture theatres.",
  },
  {
    q: "Is a campus marketplace safer than a WhatsApp group?",
    a: "It is, on two specific counts. A WhatsApp group has no payment protection, so somebody has to send money first and trust the other person; and it has no search, so a listing is only visible for as long as it sits near the bottom of the chat. A campus marketplace with escrow removes the first problem, and a searchable feed removes the second.",
  },
  {
    q: "How much does it cost to sell on CarryMart?",
    a: "Nothing. The app is free to download, browsing is free, and posting a standard listing is free with no commission on the sale. The only paid option is a listing boost, which pushes your item to the top of your campus feed for 7 or 30 days, and it is entirely optional.",
  },
  {
    q: "Which universities does CarryMart cover?",
    a: `CarryMart is rolling out campus by campus across Ghana, starting with ${CAMPUSES.length} universities including the University of Ghana at Legon, KNUST in Kumasi and the University of Cape Coast. You pick your campus when you set up your account, and you can switch campuses at any time to browse another market.`,
  },
  {
    q: "Can I use a campus marketplace if I am not a student?",
    a: "CarryMart is built for campus communities, which includes students, postgraduates and staff on the campuses it serves. You sign up with your phone number and choose your campus, and every seller profile is public so the community can see who they are dealing with.",
  },
];

const sellSteps = [
  {
    name: "Post it for free",
    text: "Tap the plus button, choose 'Sell an item', add photos, a price, one of the nine categories, and where on campus you are based. It takes under a minute and standard listings never cost a cedi.",
  },
  {
    name: "Get discovered on your campus",
    text: "Your listing lands in your campus feed, in search, and in reels. Post a story to keep your shop in front of buyers who are already scrolling.",
  },
  {
    name: "Agree the details in chat",
    text: "Buyers message you in the app. Haggle, answer questions, and agree a public spot on campus for the handover, all in one thread you can refer back to.",
  },
  {
    name: "Get paid out of escrow",
    text: "The buyer pays into CarryPay escrow before you hand anything over. Once they confirm delivery, the money lands in your wallet and you withdraw it to mobile money.",
  },
];

const sections: ContentSection[] = [
  {
    id: "what-is-a-campus-marketplace",
    heading: "What is a campus marketplace?",
    blocks: [
      {
        type: "p",
        text: "A campus marketplace is an online marketplace where every buyer and every seller belongs to the same university campus. Instead of searching a whole country and then arranging courier delivery, you search the few thousand people who already live, study and eat within a ten-minute walk of you.",
      },
      {
        type: "p",
        text: "That single constraint changes the economics of every transaction. Delivery costs nothing because the handover is a walk to the library steps. Waiting time collapses from days to the gap between two lectures. And a seller's reputation actually means something, because the people rating them share their hall.",
      },
      {
        type: "h3",
        text: "Why students have always needed one",
      },
      {
        type: "p",
        text: "Campus trade is not a new idea that an app invented. It already runs, at scale, through hall WhatsApp groups, Instagram vendor pages, noticeboards and word of mouth. Textbooks get handed down a year group at a time. Fridges and fans get resold every June. Somebody in every hall braids hair, fixes laptops, or cooks better jollof than the canteen.",
      },
      {
        type: "p",
        text: "What has been missing is not demand. It is a place where those trades are searchable, where the seller is accountable, and where nobody has to send money to a stranger and hope.",
      },
    ],
  },
  {
    id: "what-makes-one-good",
    heading: "What makes a campus marketplace platform good?",
    blocks: [
      {
        type: "p",
        text: "If you are comparing platforms, these are the six things worth judging them on. They are ordered by how much difference each one makes to whether you actually get your money or your item.",
      },
      {
        type: "steps",
        items: [
          {
            name: "Payment protection",
            text: "Does the platform hold the money until the buyer confirms delivery? Without escrow, every deal comes down to which of the two strangers goes first. This is the single largest difference between platforms.",
          },
          {
            name: "Campus scope",
            text: "Is the feed limited to your campus, or to the whole country? A national feed means most results are unreachable without paying for delivery. A campus feed means every result is walkable.",
          },
          {
            name: "Searchable, persistent listings",
            text: "Can you find an item posted three days ago? In a group chat, no. A real marketplace keeps listings live, categorised and searchable until they sell.",
          },
          {
            name: "Seller accountability",
            text: "Is there a public profile with history behind each seller, or just a phone number? Reputation only works if it is attached to something that persists.",
          },
          {
            name: "Cost to list",
            text: "Does posting cost money or take a commission? Student margins are thin. A platform that charges to list prices out exactly the casual sellers that make a campus market worth browsing.",
          },
          {
            name: "Discovery that fits how students browse",
            text: "Students do not open apps to run keyword searches; they scroll. A marketplace built on reels and stories gets browsed for fun, which is what keeps sellers' items in front of buyers.",
          },
        ],
      },
    ],
  },
  {
    id: "comparison",
    heading: "How CarryMart compares to the alternatives",
    blocks: [
      {
        type: "p",
        text: "Applying those six criteria to the options a Ghanaian student realistically has today:",
      },
      {
        type: "table",
        head: ["", "CarryMart", "Hall WhatsApp groups", "Facebook Marketplace", "Jiji / Tonaton"],
        rows: [
          [
            "Escrow on payments",
            "Yes, held until you confirm delivery",
            "None",
            "None between private sellers",
            "None on a standard listing",
          ],
          [
            "Scope of the feed",
            "Your campus",
            "One hall or one group",
            "Whole country",
            "Whole country",
          ],
          [
            "Searchable listings",
            "Yes, with nine categories",
            "No, it scrolls away",
            "Yes",
            "Yes",
          ],
          [
            "Seller profile and history",
            "Public profile with QR code",
            "A phone number",
            "A personal profile",
            "Varies by seller",
          ],
          [
            "Cost to post",
            "Free, no commission",
            "Free",
            "Free",
            "Free tier, paid promotion",
          ],
          [
            "Built for how students browse",
            "Reels, stories and a campus feed",
            "Chat only",
            "General feed",
            "Classified listings",
          ],
          [
            "Distance to the handover",
            "Walking distance, on campus",
            "Your hall",
            "Anywhere in Ghana",
            "Anywhere in Ghana",
          ],
        ],
      },
      {
        type: "callout",
        title: "The honest summary",
        text: "General classifieds are better if you want to buy a car or a fridge from anywhere in Ghana. Your hall WhatsApp group is fine for a quick ask among people you already know. CarryMart is the better tool for the specific thing students do most: buying and selling everyday items with other students on their own campus, without either side having to trust a stranger with their money.",
      },
    ],
  },
  {
    id: "how-carrymart-works",
    heading: "How CarryMart works",
    blocks: [
      {
        type: "p",
        text: "CarryMart is a free app. You sign up with your phone number, choose your campus, and everything you see from that point on comes from students near you.",
      },
      {
        type: "h3",
        text: "Buying",
      },
      {
        type: "list",
        items: [
          "Find an item through your campus feed, search, or reels.",
          "Chat with the seller to agree the price, the condition, and where on campus you will meet.",
          "Pay through the app. Your money goes into CarryPay escrow, not to the seller.",
          "Collect the item, then confirm delivery in the app. Only then is the seller paid.",
          "Every deal produces a digital receipt you can fall back on.",
        ],
      },
      {
        type: "h3",
        text: "Selling",
      },
      {
        type: "steps",
        items: sellSteps,
      },
    ],
  },
  {
    id: "escrow",
    heading: "How escrow removes the risk from campus deals",
    blocks: [
      {
        type: "p",
        text: "Escrow is the reason a campus marketplace can work between people who have never met. When a buyer pays, the money does not go to the seller. It is held by CarryPay, the wallet built into CarryMart, and it is released only when the buyer confirms in the app that they have the item.",
      },
      {
        type: "list",
        items: [
          "The buyer is not paying first and hoping. If the item never arrives, they do not confirm, and the money stays put while support investigates.",
          "The seller is not handing over goods on a promise. They can see the payment is already committed before they hand anything over.",
          "Wallet access and every transaction are locked behind your PIN, and top-ups and withdrawals run through licensed mobile money providers.",
          "CarryMart never stores your mobile money PIN.",
        ],
      },
      {
        type: "cta",
        label: "Read how CarryPay works",
        href: "/carrypay",
        note: "Top-ups, withdrawals, escrow holds and what happens when a deal goes wrong.",
      },
    ],
  },
  {
    id: "what-you-can-trade",
    heading: "What students buy and sell",
    blocks: [
      {
        type: "p",
        text: "CarryMart runs nine categories, chosen because they are what actually moves on a campus rather than what fills out a directory.",
      },
      {
        type: "table",
        head: ["Category", "What tends to move"],
        rows: [
          ["Electronics", "Phones, laptops, chargers, earbuds, calculators, ring lights"],
          ["Fashion", "Thrift drops, sneakers, corporate wear, bags, jewellery"],
          ["Books & Stationery", "Course texts, past papers, lab coats, drawing sets"],
          ["Food", "Home cooking, snacks, drinks, weekend meal plans"],
          ["Beauty", "Braids and barbering, nails, lashes, skincare, makeup"],
          ["Services", "Phone and laptop repair, printing, design, tutoring, tailoring"],
          ["Furniture", "Fridges, fans, mattresses, desks, kettles at end of year"],
          ["Tickets", "Hall week, concerts, sports, bus seats home"],
          ["Rentals", "Hostel rooms, gowns and suits, cameras, event equipment"],
        ],
      },
    ],
  },
  {
    id: "campuses",
    heading: "Which campuses CarryMart covers",
    blocks: [
      {
        type: "p",
        text: `CarryMart is rolling out campus by campus, so that each market is dense enough to be worth browsing on the day it opens. These are the ${CAMPUSES.length} campuses in the rollout:`,
      },
      {
        type: "links",
        items: CAMPUSES.slice(0, 6).map((campus) => ({
          title: `${campus.shortName}, ${campus.city}`,
          href: `/campuses/${campus.slug}`,
          text: `Buying and selling on ${campus.name}.`,
        })),
      },
      {
        type: "cta",
        label: "See all campuses",
        href: "/campuses",
      },
    ],
  },
  {
    id: "faqs",
    heading: "Frequently asked questions",
    blocks: [{ type: "faq", items: faqs }],
  },
];

export default function CampusMarketplacePage() {
  return (
    <>
      <PageGraph
        path={PATH}
        title={TITLE}
        description={DESCRIPTION}
        crumbs={crumbs}
        faqs={faqs}
        nodes={[
          howToNode(
            PATH,
            "How to sell on a campus marketplace",
            "Post an item on your campus marketplace and get paid out of escrow, in four steps.",
            sellSteps
          ),
        ]}
      />
      <ContentPage
        eyebrow="Campus marketplace"
        title={TITLE}
        subtitle="A campus marketplace only works if the money is safe and the seller is a walk away. Here is what to look for, and how CarryMart measures up against the WhatsApp groups, national classifieds and Instagram pages students use today."
        answer="A campus marketplace is an online marketplace where every buyer and seller belongs to the same university campus, so handovers happen on foot and reputations are checkable. CarryMart is the campus marketplace built for Ghanaian universities: free to list, scoped to your campus, and with every payment held in CarryPay escrow until the buyer confirms delivery."
        crumbs={crumbs}
        sections={sections}
        contact={{
          title: "Want CarryMart on your campus?",
          description:
            "Tell us which university you are at and we will let you know the moment your campus market opens.",
        }}
      />
    </>
  );
}
