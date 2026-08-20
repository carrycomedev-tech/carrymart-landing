import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Custom 404.
 *
 * Two reasons this exists rather than the Next.js default. The response already
 * carries a 404 status, but it was also inheriting the root layout's canonical,
 * which pointed every dead URL at the homepage — `noindex` here removes any
 * ambiguity about whether these should be in the index. And a 404 that offers
 * the pages a visitor was probably looking for recovers the visit instead of
 * ending it, which is the only thing a 404 can usefully do.
 */
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const suggestions = [
  { title: "The campus marketplace, explained", href: "/campus-marketplace" },
  { title: "How CarryPay escrow works", href: "/carrypay" },
  { title: "Selling on your campus", href: "/sell-on-campus" },
  { title: "Find your campus", href: "/campuses" },
  { title: "Help & FAQs", href: "/support" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-muted border border-border px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-sm font-medium text-secondary/80">404</span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-black tracking-[-0.02em] text-secondary">
          We could not find that page
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
          The link may be old, or the page may have moved. Here is where most
          people were heading.
        </p>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {suggestions.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group block h-full rounded-3xl border border-border bg-muted/50 p-5 transition-colors hover:border-primary/40 hover:bg-muted"
              >
                <p className="font-display font-bold text-secondary group-hover:text-primary transition-colors">
                  {item.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Button asChild size="lg">
            <Link href="/">
              Back to the homepage
              <ArrowRight className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
