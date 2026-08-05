import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How CarryMart collects, uses, and protects your information as you buy and sell on your campus with the CarryPay escrow wallet.",
  alternates: { canonical: "/privacy" },
};

const sections: LegalSection[] = [
  {
    id: "information-we-collect",
    heading: "Information we collect",
    blocks: [
      {
        type: "p",
        text: "We only collect what we need to run the marketplace and keep payments safe. That falls into a few groups.",
      },
      {
        type: "list",
        items: [
          "Account details, such as your phone number, your chosen campus, and the profile information you add like a display name and photo.",
          "Listings and content you create, including item photos, descriptions, prices, reels, and stories.",
          "Transaction and CarryPay activity, such as top-ups, purchases, escrow holds, withdrawals, and the digital receipts each deal produces.",
          "Messages you send to other users and to our support team.",
          "Device and usage information, such as app version, general location by campus, and basic analytics that help us fix bugs and improve the app.",
        ],
      },
      {
        type: "p",
        text: "We never collect or store your mobile money PIN. Payments run through licensed mobile money providers, and your PIN stays with them.",
      },
    ],
  },
  {
    id: "how-we-use-it",
    heading: "How we use your information",
    blocks: [
      {
        type: "list",
        items: [
          "To create your account, show your listings on your campus feed, and connect buyers with sellers.",
          "To process payments through CarryPay, hold funds safely in escrow, and release them when a deal is confirmed.",
          "To keep the community safe, review reports, and act on listings or accounts that break our rules.",
          "To provide support, answer your questions, and resolve disputes.",
          "To improve the app, understand which features students use, and build new ones.",
        ],
      },
    ],
  },
  {
    id: "how-we-share",
    heading: "How we share information",
    blocks: [
      {
        type: "p",
        text: "We do not sell your personal information. We share it only in these situations.",
      },
      {
        type: "list",
        items: [
          "With other students, when it is part of how the marketplace works. Your public profile, listings, and seller history are visible so the community can see who they are dealing with.",
          "With service providers who help us operate, such as mobile money and payment partners, hosting, and analytics. They may only use your data to provide their service to us.",
          "For legal reasons, if we are required to respond to a valid legal request or to protect the safety of our users.",
        ],
      },
    ],
  },
  {
    id: "payments-and-carrypay",
    heading: "Payments and CarryPay",
    blocks: [
      {
        type: "p",
        text: "CarryPay is the wallet built into CarryMart. When a buyer pays, the money is held in escrow and released to the seller only after the buyer confirms delivery. Wallet access and every transaction are protected by your PIN, and each deal produces a digital receipt you can refer back to.",
      },
    ],
  },
  {
    id: "your-choices",
    heading: "Your choices and rights",
    blocks: [
      {
        type: "list",
        items: [
          "You can view and edit your profile information at any time from the app.",
          "You can control notifications and opt out of marketing messages while still receiving important account and transaction updates.",
          "You can request a copy of your data or ask us to correct information that is wrong.",
          "You can delete your account from your profile settings. Withdraw your CarryPay balance first, since deletion is permanent.",
        ],
      },
    ],
  },
  {
    id: "data-retention",
    heading: "Data retention",
    blocks: [
      {
        type: "p",
        text: "We keep your information for as long as your account is active. When you delete your account, we remove your personal data within 30 days, except for records we are required to keep for legal, tax, or fraud-prevention reasons.",
      },
    ],
  },
  {
    id: "security",
    heading: "How we keep your data safe",
    blocks: [
      {
        type: "p",
        text: "We use industry-standard measures to protect your information, lock wallet actions behind your PIN, and route payments through licensed providers. No system is perfectly secure, so we also ask you to protect your PIN and report anything that looks wrong.",
      },
    ],
  },
  {
    id: "childrens-privacy",
    heading: "Age and eligibility",
    blocks: [
      {
        type: "p",
        text: "CarryMart is built for students and is not intended for children under the age of 13. If we learn that we have collected information from a child under this age, we will delete it.",
      },
    ],
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    blocks: [
      {
        type: "p",
        text: "We may update this policy as CarryMart grows. When we make a meaningful change, we will update the date at the top and, where appropriate, let you know in the app.",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      subtitle="Your privacy matters to us. This page explains what we collect, why we collect it, and the control you have, in plain language."
      lastUpdated="July 27, 2026"
      intro="CarryMart is the campus marketplace where students buy and sell with each other and pay safely through the CarryPay escrow wallet. This policy covers the CarryMart app and this website."
      sections={sections}
    />
  );
}
