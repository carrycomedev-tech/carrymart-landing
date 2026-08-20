import React from "react";
import ContentPage, { type ContentSection } from "@/components/content/content-page";
import PageGraph from "@/components/seo/page-graph";
import { pageMetadata } from "@/lib/seo";
import { howToNode, type Crumb, type Faq } from "@/lib/schema";
import { CAMPUSES } from "@/lib/campuses";

/**
 * Seller-intent page. Separate from the marketplace pillar because seller
 * queries ("how to sell on campus", "how to make money as a student in Ghana")
 * and buyer queries want different answers, and a page that tries to serve both
 * ranks for neither.
 */
const PATH = "/sell-on-campus";
const TITLE = "How to sell on campus: a student seller's guide";
const DESCRIPTION =
  "What sells on a Ghanaian campus, how to list it so it moves, and how sellers get paid out of CarryPay escrow. Free listings, no commission.";

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "how to sell on campus",
    "sell to students Ghana",
    "student business ideas Ghana",
    "make money as a student Ghana",
    "campus selling app",
    "free online store for students",
  ],
});

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Sell on campus", path: PATH },
];

const faqs: Faq[] = [
  {
    q: "How do I start selling on campus?",
    a: "Download CarryMart, choose your campus, and tap the plus button to post your first listing. Add clear photos, a price, one of the nine categories and where on campus you are based. It takes under a minute and posting is free.",
  },
  {
    q: "Does it cost anything to sell?",
    a: "No. Standard listings are free and CarryMart takes no commission on your sale. The only optional cost is a listing boost, which pushes your item to the top of your campus feed for 7 or 30 days and is paid from your CarryPay wallet.",
  },
  {
    q: "How do I get paid?",
    a: "When a buyer pays, the money is held in CarryPay escrow. Once they confirm delivery, it lands in your CarryPay wallet, and you withdraw it to mobile money whenever you like, protected by your PIN.",
  },
  {
    q: "How do I avoid getting scammed as a seller?",
    a: "Escrow does most of the work: you can see the buyer's payment is already committed before you hand anything over, so you are never trading on a promise. Beyond that, keep the whole conversation in the app so there is a record, meet somewhere public on campus, and never accept a request to complete the payment outside CarryMart.",
  },
  {
    q: "What can I sell on campus?",
    a: "Electronics, fashion, books and stationery, food, beauty, services, furniture, tickets and rentals. Anything legal that fits campus life can be listed. Services count too: repairs, braiding, barbering, printing, tutoring and design are among the fastest-moving listings on a campus. Counterfeits and prohibited items are removed.",
  },
  {
    q: "How do I get more buyers to see my listing?",
    a: "Three things move the needle, in order: post reels and stories rather than static photos only, keep your listings current so your profile looks active, and share your seller QR code in the WhatsApp and Instagram groups you are already in. Boosts help on top of that, but they will not fix a listing with bad photos.",
  },
];

const postSteps = [
  {
    name: "Photograph it in daylight",
    text: "Three or four photos, natural light, plain background, and one honest shot of any damage. Nothing kills a campus deal faster than a buyer feeling surprised at the handover.",
  },
  {
    name: "Price it against your own campus",
    text: "Search your category and see what comparable items are actually listed at on your campus, not on a national classifieds site. Campus buyers are price-sensitive and they can see your competition too.",
  },
  {
    name: "Write the description a buyer would ask for",
    text: "Size, condition, age, what is included, and why you are selling. Answering the obvious questions up front is the difference between a chat and a sale.",
  },
  {
    name: "Set your category and campus location",
    text: "Pick one of the nine categories and say where on campus you are based. Location is what tells a buyer this is a five-minute walk rather than a trip across town.",
  },
  {
    name: "Post reels and a story",
    text: "Students scroll before they search. A ten-second clip of the item in your hand outperforms a gallery of stills, and stories keep your shop in front of people who already follow you.",
  },
  {
    name: "Reply fast, meet in public, get paid",
    text: "First reply wins most campus deals. Agree a public spot, hand over the item, and the buyer's confirmation releases the escrow into your wallet.",
  },
];

const sections: ContentSection[] = [
  {
    id: "why-sell-on-campus",
    heading: "Why your campus is the best place to start selling",
    blocks: [
      {
        type: "p",
        text: "A campus is an unusually good market. A few thousand people with similar needs, similar budgets and similar timetables, all within a ten-minute walk. There is no delivery cost, no courier to trust, and your reputation travels a hall in an afternoon.",
      },
      {
        type: "list",
        items: [
          "No overheads. No shop rent, no delivery fees, no commission on your sale.",
          "Built-in demand. Every semester brings the same needs: textbooks, fans, phone repairs, food, hair.",
          "Reputation compounds. Sell well twice on the same campus and the third sale finds you.",
          "It fits around lectures. Post at night, hand over between classes.",
        ],
      },
    ],
  },
  {
    id: "what-sells",
    heading: "What actually sells on a Ghanaian campus",
    blocks: [
      {
        type: "p",
        text: "Across the nine CarryMart categories, these are the listings students look for most, and roughly when demand peaks:",
      },
      {
        type: "table",
        head: ["Category", "What to sell", "When demand spikes"],
        rows: [
          ["Fashion", "Thrift drops, sneakers, corporate wear, bags", "Start of semester, hall week, graduations"],
          ["Electronics", "Phones, laptops, chargers, earbuds, calculators", "Start of semester and exam season"],
          ["Books & Stationery", "Course texts, past papers, lab coats, drawing sets", "First weeks of a semester"],
          ["Food", "Home cooking, snacks, drinks, weekend meal plans", "Evenings, weekends, exam weeks"],
          ["Beauty", "Braids, barbering, nails, lashes, skincare", "Weekends and event weeks"],
          ["Services", "Phone and laptop repair, printing, design, tutoring", "Coursework deadlines and exams"],
          ["Furniture", "Fridges, fans, mattresses, desks, kettles", "End of academic year"],
          ["Tickets", "Hall week, concerts, sports, bus seats home", "Event announcements and vacations"],
          ["Rentals", "Hostel rooms, gowns and suits, cameras, equipment", "Semester start and graduation season"],
        ],
      },
      {
        type: "callout",
        title: "The most underrated category",
        text: "Services. Every campus has students who can fix a screen, cut hair, print and bind, design a flyer or teach a course they aced last year. Those listings need no stock, no capital and no risk, and they are repeatable in a way a one-off item sale is not.",
      },
    ],
  },
  {
    id: "how-to-post",
    heading: "How to post a listing that sells",
    blocks: [
      {
        type: "p",
        text: "The mechanics take under a minute. Doing them well is what separates a listing that sells in a day from one that sits for a month.",
      },
      { type: "steps", items: postSteps },
    ],
  },
  {
    id: "getting-paid",
    heading: "How you get paid, and why you cannot be stiffed",
    blocks: [
      {
        type: "p",
        text: "You are never handing over goods on a promise. The buyer pays into CarryPay escrow before the handover, so the money is committed and visible to you before you give anything up. Their confirmation of delivery releases it into your wallet, and you withdraw to mobile money whenever you like.",
      },
      {
        type: "list",
        items: [
          "Escrow means the payment exists before you hand over the item.",
          "Withdrawals go to mobile money, protected by your wallet PIN.",
          "Every deal produces a digital receipt, so a dispute has evidence attached.",
          "No commission is taken from your sale.",
        ],
      },
      { type: "cta", label: "How CarryPay escrow works", href: "/carrypay" },
    ],
  },
  {
    id: "grow-your-shop",
    heading: "Turning a few sales into a repeat business",
    blocks: [
      {
        type: "list",
        items: [
          "Share your seller QR code. Every CarryMart seller has a public profile with a QR code. Print it, put it on your status, paste it in the group chats you are already in, and anyone who scans it lands on your listings.",
          "Post stories on the days you have stock. Presence beats perfection; a shop that posts weekly gets browsed weekly.",
          "Keep sold items off your profile. An active, accurate profile reads as a real shop rather than an abandoned one.",
          "Answer within the hour. On a campus, the first seller to reply usually gets the sale.",
          "Use a boost when it is worth it. Boosts put you at the top of the campus feed for 7 or 30 days. They are worth it on a high-value item, and a waste on a GHS 20 one.",
        ],
      },
    ],
  },
  {
    id: "faqs",
    heading: "Seller questions",
    blocks: [{ type: "faq", items: faqs }],
  },
  {
    id: "your-campus",
    heading: "Start on your campus",
    blocks: [
      {
        type: "links",
        items: CAMPUSES.slice(0, 6).map((campus) => ({
          title: `Selling at ${campus.shortName}`,
          href: `/campuses/${campus.slug}`,
          text: `${campus.name}, ${campus.city}.`,
        })),
      },
      { type: "cta", label: "See all campuses", href: "/campuses" },
    ],
  },
];

export default function SellOnCampusPage() {
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
            "How to post a listing that sells on campus",
            "Six steps from photographing an item to getting paid out of escrow.",
            postSteps
          ),
        ]}
      />
      <ContentPage
        eyebrow="For sellers"
        title={TITLE}
        subtitle="No shop rent, no delivery fees, no commission. What to sell on a Ghanaian campus, how to list it so it moves, and how the money reaches your mobile money account."
        answer="To sell on campus, download CarryMart, choose your university, and post your item with photos, a price, a category and your campus location. Standard listings are free and CarryMart takes no commission. When a buyer pays, the money is held in CarryPay escrow until they confirm delivery, then it lands in your wallet to withdraw to mobile money."
        crumbs={crumbs}
        sections={sections}
        contact={{
          title: "Selling something unusual?",
          description:
            "If you are not sure whether your item or service fits a category, message us and we will tell you where to list it.",
        }}
      />
    </>
  );
}
