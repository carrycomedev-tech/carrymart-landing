import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/legal/legal-page";
import PageGraph from "@/components/seo/page-graph";
import type { Crumb } from "@/lib/schema";

const PATH = "/terms";
const TITLE = "Terms of Service";
const DESCRIPTION =
  "The terms that govern your use of CarryMart, the campus marketplace, and the CarryPay escrow wallet.";

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: TITLE, path: PATH },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

const sections: LegalSection[] = [
  {
    id: "acceptance",
    heading: "Agreement to these terms",
    blocks: [
      {
        type: "p",
        text: "These terms are an agreement between you and CarryMart. By creating an account or using the app, you agree to them. If you do not agree, please do not use CarryMart.",
      },
    ],
  },
  {
    id: "eligibility",
    heading: "Who can use CarryMart",
    blocks: [
      {
        type: "list",
        items: [
          "You need to be a student or part of a campus community and at least 13 years old to use CarryMart.",
          "You sign up with your phone number and choose your campus, and you agree to give accurate information.",
          "You are responsible for one account. Do not create accounts to impersonate others or to get around a suspension.",
        ],
      },
    ],
  },
  {
    id: "your-account",
    heading: "Your account and PIN",
    blocks: [
      {
        type: "p",
        text: "You are responsible for what happens on your account. Keep your PIN private, since it protects your wallet and every transaction. Tell us right away if you think someone else has access to your account.",
      },
    ],
  },
  {
    id: "the-marketplace",
    heading: "Listing and using the marketplace",
    blocks: [
      {
        type: "p",
        text: "CarryMart gives students a place to list items and connect with each other. When you post a listing, you agree that:",
      },
      {
        type: "list",
        items: [
          "The item is legal, real, and described honestly, with photos that are actually yours to use.",
          "You have the right to sell it and can hand it over as described.",
          "You will not list prohibited items such as counterfeits, weapons, illegal goods, or anything that breaks the law or our community guidelines.",
        ],
      },
      {
        type: "p",
        text: "We can remove listings and take action on accounts that break these rules.",
      },
    ],
  },
  {
    id: "buying-and-selling",
    heading: "Buying and selling",
    blocks: [
      {
        type: "p",
        text: "Buyers and sellers agree the details in chat, then pay through the app. Your money is held in CarryPay escrow and released to the seller only after you confirm delivery. Meet somewhere public on campus for handovers, agree the spot in chat so there is a record, and confirm only once the item is in your hands.",
      },
      {
        type: "p",
        text: "CarryMart provides the marketplace and the escrow tool, but the deal itself is between the buyer and the seller. If something goes wrong, do not confirm the delivery and contact support so we can help while your money stays in escrow.",
      },
    ],
  },
  {
    id: "carrypay-and-fees",
    heading: "CarryPay, payments, and fees",
    blocks: [
      {
        type: "list",
        items: [
          "CarryPay lets you top up and withdraw with mobile money, and it powers escrow payments. Every action is protected by your PIN.",
          "The app is free to use, browsing is free, and posting a standard listing is free.",
          "Optional listing boosts are the only seller cost, and you choose them when you post or later. Any current fees are shown before you confirm.",
          "Payments run through licensed mobile money providers, and their own terms apply to the mobile money side of a transaction.",
        ],
      },
    ],
  },
  {
    id: "conduct",
    heading: "Community conduct",
    blocks: [
      {
        type: "p",
        text: "Treat other students with respect. Do not harass, scam, or mislead people, do not spam the feed, and do not try to move payments off the platform to avoid escrow protection. Breaking these rules can lead to removed content, a suspended account, or a permanent ban.",
      },
    ],
  },
  {
    id: "content",
    heading: "Your content",
    blocks: [
      {
        type: "p",
        text: "You own the photos, listings, and posts you create. By sharing them on CarryMart, you give us permission to display and promote them within the app and our marketing so the marketplace can work. You are responsible for the content you post.",
      },
    ],
  },
  {
    id: "disclaimers",
    heading: "Disclaimers and liability",
    blocks: [
      {
        type: "p",
        text: "CarryMart is provided as is. While we work hard to keep the marketplace safe and reliable, we cannot guarantee every listing, user, or deal. To the extent the law allows, CarryMart is not liable for disputes between users or for indirect losses arising from your use of the app. Escrow is designed to protect your payment, so use it and confirm deals only when you are satisfied.",
      },
    ],
  },
  {
    id: "termination",
    heading: "Suspension and termination",
    blocks: [
      {
        type: "p",
        text: "You can delete your account at any time from your profile settings. We may suspend or close accounts that break these terms or put the community at risk. If your account is closed, withdraw any CarryPay balance first where possible.",
      },
    ],
  },
  {
    id: "changes-and-law",
    heading: "Changes and governing law",
    blocks: [
      {
        type: "p",
        text: "We may update these terms as CarryMart grows, and we will update the date at the top when we do. These terms are governed by the laws of Ghana. Continuing to use CarryMart after an update means you accept the new terms.",
      },
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <PageGraph
        path={PATH}
        title={TITLE}
        description={DESCRIPTION}
        crumbs={crumbs}
      />
      <LegalPage
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="The simple rules that keep CarryMart safe and fair for every student who buys and sells here."
        lastUpdated="July 27, 2026"
        intro="Welcome to CarryMart, the campus marketplace where students buy and sell with each other and pay safely through the CarryPay escrow wallet. These terms explain what you can expect from us and what we ask of you."
        sections={sections}
      />
    </>
  );
}
