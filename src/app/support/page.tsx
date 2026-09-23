import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { ContactPanel } from '@/components/contact-panel';
import { SUPPORT_EMAIL } from '@/lib/contact';
import PageGraph from '@/components/seo/page-graph';
import type { Crumb } from '@/lib/schema';

const PATH = '/support';
const TITLE = 'Help & FAQs';
const DESCRIPTION =
  'Answers to common questions about buying, selling, and staying safe on CarryMart, the campus marketplace for students in Ghana.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

const crumbs: Crumb[] = [
  { name: 'Home', path: '/' },
  { name: 'Help & FAQs', path: PATH },
];

const faqCategories = [
  {
    id: "getting-started",
    title: "Getting Started",
    questions: [
      {
        q: "What is CarryMart?",
        a: "CarryMart is the campus marketplace, an app where students buy and sell with each other on their own campus. Browse listings in electronics, fashion, books, food, beauty, services, furniture, tickets, and rentals; discover items through reels and stories; and chat with sellers in real time."
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
        a: "You sign up with your phone number and choose your campus. Seller profiles are public, with QR codes and a visible selling history, so the community can see who they're dealing with."
      }
    ]
  },
  {
    id: "buying",
    title: "Buying",
    questions: [
      {
        q: "How do I buy something?",
        a: "Find an item through the feed, search, or reels, then chat with the seller to agree on the details. You arrange the handover with them right in the chat, and you settle up when you meet."
      },
      {
        q: "What if the item never arrives or isn't as described?",
        a: "Check the item over before you settle up, and do not pay for something that is not what was described. If a deal goes wrong, report the listing or the user from the app and contact support. Keep the conversation in the chat, because that is your record of what was agreed."
      },
      {
        q: "How do I pay?",
        a: "You pay the seller directly when you meet for the handover. Agree how you are settling in the chat beforehand so there are no surprises. CarryMart does not take the payment or hold it for either side."
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
        a: "You and the buyer agree the price in the chat and settle it between yourselves when you meet to hand the item over. CarryMart takes no commission, so what you agree is what you keep."
      },
      {
        q: "What are boosts and how do they work?",
        a: "Boosts push your listing to the top of your campus feed for extra visibility. Choose a 7-day or 30-day boost when you post, or add one later. Standard listings stay free forever."
      },
      {
        q: "Can I promote my shop outside the app?",
        a: "Yes. Every seller has a public profile with a QR code. Print it, share it on WhatsApp or Instagram, and anyone who scans it lands straight on your listings."
      },
      {
        q: "What can I sell?",
        a: "Electronics, fashion, books and stationery, food, beauty, services, furniture, tickets, and rentals, anything legal that fits campus life. Listings that break our guidelines (counterfeits, prohibited items) are removed."
      }
    ]
  },
  {
    id: "trust-and-safety",
    title: "Trust & Safety",
    questions: [
      {
        q: "How do I know a seller is legit?",
        a: "Check their public profile: listings, activity, and history are visible to everyone. Beyond that, keep the conversation in the app, meet somewhere public on campus, and look the item over before you settle up."
      },
      {
        q: "How do I report a problem or a user?",
        a: `Every listing and profile has a report option. For anything urgent, contact support directly from the app or email us at ${SUPPORT_EMAIL}. Include the chat from the deal if you have it.`
      },
      {
        q: "Where should I meet for handovers?",
        a: "Somewhere public on campus: the library, a hall entrance, the night market. Agree on the spot in chat so there's a record, and look the item over before you settle up."
      },
      {
        q: "How do I delete my account?",
        a: "Go to your profile settings, select 'Delete Account', and follow the prompts. This is permanent. Your data is removed within 30 days as per our privacy policy."
      }
    ]
  }
];

const SupportPage = () => {
  // Every question below is rendered as visible text on this page, which is the
  // condition for marking it up as an FAQPage. This is where the site's FAQ
  // schema belongs; it used to sit on the homepage, describing answers that were
  // only ever displayed here.
  const faqs = faqCategories.flatMap((category) =>
    category.questions.map((faq) => ({ q: faq.q, a: faq.a }))
  );

  return (
    // Gutter matches the navbar, footer and every landing section, so the
    // three share one content edge. The reading width comes from max-w-3xl
    // below, not from the gutter.
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <PageGraph
        path={PATH}
        title={TITLE}
        description={DESCRIPTION}
        crumbs={crumbs}
        faqs={faqs}
      />
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
          staying safe on CarryMart.
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
