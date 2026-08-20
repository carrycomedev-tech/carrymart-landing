import React from "react";
import ContentPage, { type ContentSection } from "@/components/content/content-page";
import PageGraph from "@/components/seo/page-graph";
import { pageMetadata, absoluteUrl } from "@/lib/seo";
import { APP_ID, ORG_ID, howToNode, type Crumb, type Faq } from "@/lib/schema";

/**
 * The CarryPay page.
 *
 * "Escrow" is the differentiator, so it gets its own indexable URL rather than
 * living only as a section of the homepage. It also targets a distinct query set
 * ("escrow app Ghana", "safe way to pay a stranger mobile money") that the
 * marketplace pillar page cannot rank for without diluting itself.
 */
const PATH = "/carrypay";
const TITLE = "CarryPay: the escrow wallet inside CarryMart";
const DESCRIPTION =
  "CarryPay is the wallet inside CarryMart. It holds a buyer's payment in escrow until they confirm delivery, and moves money in and out via mobile money.";

export const metadata = pageMetadata({
  title: TITLE,
  metaTitle: "CarryPay: the escrow wallet inside CarryMart",
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "CarryPay",
    "escrow wallet Ghana",
    "escrow payment app",
    "safe mobile money payment",
    "student wallet Ghana",
    "buyer protection Ghana",
    "MoMo escrow",
  ],
});

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "CarryPay", path: PATH },
];

const faqs: Faq[] = [
  {
    q: "What is CarryPay?",
    a: "CarryPay is the wallet built into the CarryMart app. It holds your balance, powers escrow on every purchase, and lets you top up and withdraw with mobile money. Wallet access and every transaction are protected by a PIN you set.",
  },
  {
    q: "What does escrow actually mean?",
    a: "It means the money is held by a third party instead of going straight to the seller. When you buy on CarryMart, your payment leaves your wallet but does not reach the seller. CarryPay holds it. It is released only when you confirm in the app that you have received the item.",
  },
  {
    q: "When does the seller get paid?",
    a: "Only after the buyer confirms delivery. That confirmation is the trigger. Until it happens, the money sits in escrow, which is what removes the pay-first-and-pray problem from buying off a stranger.",
  },
  {
    q: "What happens if the item never arrives, or is not as described?",
    a: "Do not confirm the delivery. Contact support from the app and the money stays in escrow while we investigate. Every deal produces a digital receipt, so there is a record of what was agreed and paid.",
  },
  {
    q: "How do I top up my CarryPay wallet?",
    a: "Open CarryPay from your profile, tap Top Up, choose an amount and a mobile money method, and approve the prompt on your phone. Your balance updates as soon as the payment lands.",
  },
  {
    q: "How do I withdraw my earnings?",
    a: "Open CarryPay, tap Withdraw, enter the amount and choose your mobile money account. Withdrawals are protected by your wallet PIN.",
  },
  {
    q: "Is my money safe in CarryPay?",
    a: "Wallet access and every transaction are locked behind your PIN, top-ups and withdrawals run through licensed mobile money providers, and each deal produces a digital receipt. CarryMart never stores your mobile money PIN.",
  },
  {
    q: "Does CarryPay cost anything to use?",
    a: "There is no charge to hold a balance, and no commission on a sale. Standard listings are free. The only optional paid feature in the app is a listing boost, which you pay for from your wallet.",
  },
];

const escrowSteps = [
  {
    name: "Agree the deal in chat",
    text: "Buyer and seller settle the price, the condition and a public spot on campus to meet, in one thread they can both refer back to.",
  },
  {
    name: "The buyer pays into escrow",
    text: "The payment leaves the buyer's CarryPay wallet and is held. It does not reach the seller yet, and the seller can see that it is committed.",
  },
  {
    name: "The handover happens",
    text: "They meet on campus. Neither side is going first on trust: the goods are in hand and the money is already locked in.",
  },
  {
    name: "The buyer confirms delivery",
    text: "This is the only thing that releases the funds. If something is wrong, the buyer does not confirm and support steps in with the receipt as evidence.",
  },
  {
    name: "The seller withdraws to mobile money",
    text: "The money lands in the seller's CarryPay wallet, ready to withdraw to MTN MoMo or another network, protected by their PIN.",
  },
];

const sections: ContentSection[] = [
  {
    id: "what-is-carrypay",
    heading: "What is CarryPay?",
    blocks: [
      {
        type: "p",
        text: "CarryPay is the wallet built into CarryMart. It does three jobs: it holds your balance, it holds a buyer's payment in escrow until a deal completes, and it moves money in and out through mobile money.",
      },
      {
        type: "p",
        text: "It is not a separate app or a separate account. You get it the moment you sign up, and you set a PIN that gates access to the wallet and every transaction inside it.",
      },
    ],
  },
  {
    id: "how-escrow-works",
    heading: "How escrow works, step by step",
    blocks: [
      {
        type: "p",
        text: "Escrow is the reason a marketplace can work between two students who have never met. Here is exactly what happens to the money:",
      },
      { type: "steps", items: escrowSteps },
      {
        type: "callout",
        title: "The short version",
        text: "The buyer never pays the seller directly, and the seller never hands over goods on a promise. The money is held by CarryPay in the middle, and the buyer's confirmation is the only key that unlocks it.",
      },
    ],
  },
  {
    id: "top-ups-and-withdrawals",
    heading: "Topping up and withdrawing",
    blocks: [
      {
        type: "h3",
        text: "To top up",
      },
      {
        type: "list",
        items: [
          "Open CarryPay from your profile and tap Top Up.",
          "Choose an amount and a mobile money method.",
          "Approve the prompt on your phone. Your balance updates as soon as the payment lands.",
        ],
      },
      {
        type: "h3",
        text: "To withdraw",
      },
      {
        type: "list",
        items: [
          "Open CarryPay and tap Withdraw.",
          "Enter the amount and choose your mobile money account.",
          "Confirm with your wallet PIN.",
        ],
      },
    ],
  },
  {
    id: "security",
    heading: "How your money and data are protected",
    blocks: [
      {
        type: "list",
        items: [
          "Wallet access and every transaction are locked behind a PIN you set.",
          "Top-ups and withdrawals run through licensed mobile money providers.",
          "CarryMart never stores your mobile money PIN.",
          "Every deal produces a digital receipt, so there is always a record of what was agreed and paid.",
          "Funds in escrow are not available to the seller, so a disputed deal cannot be quietly cashed out.",
        ],
      },
      {
        type: "p",
        text: "For the full detail on what is collected and why, see the privacy policy.",
      },
      { type: "cta", label: "Read the privacy policy", href: "/privacy" },
    ],
  },
  {
    id: "faqs",
    heading: "CarryPay questions",
    blocks: [{ type: "faq", items: faqs }],
  },
];

export default function CarryPayPage() {
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
            "@type": "FinancialProduct",
            "@id": `${absoluteUrl(PATH)}#carrypay`,
            name: "CarryPay",
            alternateName: "CarryPay escrow wallet",
            description: DESCRIPTION,
            category: "Digital wallet with escrow",
            provider: { "@id": ORG_ID },
            areaServed: { "@type": "Country", name: "Ghana" },
            isRelatedTo: { "@id": APP_ID },
            feesAndCommissionsSpecification:
              "No fee to hold a balance and no commission on a sale. Listing boosts are the only optional paid feature.",
          },
          howToNode(
            PATH,
            "How escrow works on CarryMart",
            "How a payment moves from a buyer's wallet, through CarryPay escrow, to a seller's mobile money.",
            escrowSteps
          ),
        ]}
      />
      <ContentPage
        eyebrow="CarryPay"
        title={TITLE}
        subtitle="The wallet that means neither the buyer nor the seller has to go first on trust. Here is exactly what happens to the money on a CarryMart deal."
        answer="CarryPay is the wallet built into the CarryMart app. When a buyer pays for an item, the money leaves their wallet but is held in escrow rather than sent to the seller, and it is released only when the buyer confirms in the app that they have received the item. Top-ups and withdrawals run through mobile money, and every transaction is locked behind your PIN."
        crumbs={crumbs}
        sections={sections}
        contact={{
          title: "A question about a payment?",
          description:
            "If a deal has gone wrong, do not confirm the delivery. Message support and the money stays in escrow while we look into it.",
        }}
      />
    </>
  );
}
