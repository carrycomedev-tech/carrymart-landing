import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { ContactPanel } from '@/components/contact-panel';
import { SUPPORT_EMAIL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Help & FAQs',
  description:
    'Answers to common questions about buying, selling, and paying on CarryMart, the campus marketplace, and the CarryPay escrow wallet.',
  alternates: { canonical: '/support' },
};

const faqCategories = [
  {
    id: "getting-started",
    title: "Getting Started",
    questions: [
      {
        q: "What is CarryMart?",
        a: "CarryMart is the campus marketplace, an app where students buy and sell with each other on their own campus. Browse listings in fashion, beauty, food, deals, events, and delivery; discover items through reels and stories; chat with sellers in real time; and pay safely with the CarryPay escrow wallet."
      },
      {
        q: "Which campuses does CarryMart work on?",
        a: "CarryMart runs campus by campus across Ghana. Pick your campus when you set up your account, and everything you see (listings, reels, sellers) is from students near you. You can switch campuses anytime from the home screen to browse other markets."
      },
      {
        q: "How much does it cost to use?",
        a: "The app is free, browsing is free, and posting a standard listing is free. The only optional costs are listing boosts (if you want extra reach as a seller) and the items you choose to buy."
      },
      {
        q: "Do I need a student ID to join?",
        a: "You sign up with your phone number and choose your campus. Seller profiles are public, with QR codes and transaction history, so the community can see who they're dealing with."
      }
    ]
  },
  {
    id: "buying",
    title: "Buying",
    questions: [
      {
        q: "How do I buy something?",
        a: "Find an item through the feed, search, or reels, then chat with the seller to agree on the details. When you're ready, pay through the app. Your money is held in CarryPay escrow, and you arrange the handover with the seller right in the chat."
      },
      {
        q: "When does the seller get my money?",
        a: "Only after you confirm delivery. Your payment sits safely in CarryPay escrow until you've received the item and confirmed it in the app. Then it's released to the seller. That's the whole point: no paying first and praying later."
      },
      {
        q: "What if the item never arrives or isn't as described?",
        a: "Don't confirm the delivery. If the deal falls through, contact support from the app and we'll investigate. Your money stays in escrow while we do. Every deal has a digital receipt you can fall back on."
      },
      {
        q: "How do I pay?",
        a: "Top up your CarryPay wallet with mobile money (MTN MoMo and other networks), or pay with a saved payment method at checkout. Every wallet action is protected by your PIN."
      }
    ]
  },
  {
    id: "selling",
    title: "Selling",
    questions: [
      {
        q: "How do I post a listing?",
        a: "Tap the + button, choose 'Sell an item', add photos, a price, a category, and where on campus you're based. Your listing goes live on your campus feed instantly, and it's free."
      },
      {
        q: "How do I get paid?",
        a: "When a buyer pays, the money is held in CarryPay escrow. Once they confirm delivery, it lands in your CarryPay wallet. Withdraw it to mobile money whenever you like, protected by your PIN."
      },
      {
        q: "What are boosts and how do they work?",
        a: "Boosts push your listing to the top of your campus feed for extra visibility. Choose a 7-day or 30-day boost when you post (or later), and pay from your CarryPay wallet. Standard listings stay free forever."
      },
      {
        q: "Can I promote my shop outside the app?",
        a: "Yes. Every seller has a public profile with a QR code. Print it, share it on WhatsApp or Instagram, and anyone who scans it lands straight on your listings."
      },
      {
        q: "What can I sell?",
        a: "Fashion, beauty products, food, tickets and events, deals, and delivery services, anything legal that fits campus life. Listings that break our guidelines (counterfeits, prohibited items) are removed."
      }
    ]
  },
  {
    id: "carrypay-wallet",
    title: "CarryPay Wallet",
    questions: [
      {
        q: "What is CarryPay?",
        a: "CarryPay is the wallet built into CarryMart. It holds your balance, powers escrow payments, and lets you top up and withdraw with mobile money, all secured with your PIN."
      },
      {
        q: "How do I top up?",
        a: "Open CarryPay from your profile, tap 'Top Up', choose your amount and mobile money method, and approve the prompt on your phone. Your balance updates as soon as the payment lands."
      },
      {
        q: "How do I withdraw my earnings?",
        a: "Open CarryPay, tap 'Withdraw', enter the amount, and choose your mobile money account. Withdrawals are protected by your wallet PIN."
      },
      {
        q: "Is my money safe?",
        a: "Wallet access and every transaction are locked behind your PIN, payments run through licensed mobile money providers, and each deal produces a digital receipt. We never store your mobile money PIN."
      }
    ]
  },
  {
    id: "trust-and-safety",
    title: "Trust & Safety",
    questions: [
      {
        q: "How do I know a seller is legit?",
        a: "Check their public profile: listings, activity, and history are visible to everyone. Because payments run through escrow, a seller only gets paid when you confirm the deal, which removes most of the risk from meeting someone new."
      },
      {
        q: "How do I report a problem or a user?",
        a: `Every listing and profile has a report option. For payment issues, contact support directly from the app or email us at ${SUPPORT_EMAIL}. Include the receipt from the deal if you have one.`
      },
      {
        q: "Where should I meet for handovers?",
        a: "Somewhere public on campus: the library, a hall entrance, the night market. Agree on the spot in chat so there's a record, and only confirm the delivery once you have the item in hand."
      },
      {
        q: "How do I delete my account?",
        a: "Go to your profile settings, select 'Delete Account', and follow the prompts. This is permanent. Withdraw your CarryPay balance first. Your data is removed within 30 days as per our privacy policy."
      }
    ]
  }
];

const SupportPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="inline-flex items-center gap-2 rounded-full bg-muted border border-border px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-sm font-medium text-secondary/80">Help Center</span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-black tracking-[-0.02em] text-secondary">
          How can we help?
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
          Answers to the questions students ask most about buying, selling, and
          getting paid on CarryMart.
        </p>

        {/* Table of contents */}
        <nav className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">
            On this page
          </p>
          <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
            {faqCategories.map((category, i) => (
              <li key={category.id}>
                <Link
                  href={`#${category.id}`}
                  className="group flex items-baseline gap-2 text-sm text-secondary/80 hover:text-primary transition-colors"
                >
                  <span className="text-primary font-semibold tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="group-hover:underline underline-offset-4">
                    {category.title}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        {/* Categories */}
        <div className="mt-4">
          {faqCategories.map((category, i) => (
            <section key={category.id} id={category.id} className="mt-12 scroll-mt-28">
              <h2 className="font-display text-2xl font-bold tracking-tight text-secondary mb-4">
                <span className="text-primary mr-2 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {category.title}
              </h2>

              <div className="space-y-3">
                {category.questions.map((faq) => (
                  <details
                    key={faq.q}
                    className="group rounded-3xl border border-border bg-muted/50 px-6 open:bg-muted transition-colors"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 font-semibold text-secondary list-none [&::-webkit-details-marker]:hidden">
                      {faq.q}
                      <ChevronDown className="size-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-180" />
                    </summary>
                    <p className="pb-5 -mt-1 text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Contact */}
        <ContactPanel
          title="Still need help?"
          description="If your question is not answered here, send us a message. We read every one and reply as quickly as we can."
          showHelpCenterLink={false}
        />
      </div>
    </div>
  );
};

export default SupportPage;
