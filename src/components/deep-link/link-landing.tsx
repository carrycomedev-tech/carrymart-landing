import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_SCHEME } from "@/lib/app-links";

/**
 * The page a shared CarryMart link renders when it did *not* open the app.
 *
 * One component for profiles, listings and posts, because the job is identical
 * in all three cases and the difference is only which nouns are on screen: show
 * enough of the thing that the visitor recognises it and can tell the link
 * worked, then give them the one action that gets them the rest of it. Sending
 * them to the homepage instead — the tempting shortcut — loses the context they
 * arrived with, which is the entire value of the link.
 *
 * Deliberately server-rendered with no client JavaScript. The reflex here is a
 * script that fires `carrymart://…` on mount to "try the app first", and it is
 * the wrong reflex: the OS already tried, and lost that race — an installed app
 * would have intercepted the URL before this page was ever fetched. So the app
 * hand-off is a plain link the visitor can choose, which also cannot produce the
 * "Safari cannot open the page because the address is invalid" dialog that an
 * automatic scheme redirect shows on every device without the app.
 */

export type LinkFact = { label: string; value: string };

type LinkLandingProps = {
  /** Small pill above the title — "Profile", "Listing", "Post". */
  kind: string;
  title: string;
  /** One line under the title: a bio, a price, a caption. */
  subtitle?: string | null;
  /** Photo of the thing itself; `rounded` for an avatar, square for media. */
  image?: { url: string; alt: string; rounded?: boolean } | null;
  /** Verified tick next to the title, mirroring the app's profile header. */
  verified?: boolean;
  /** Up to four short label/value pairs — followers, condition, campus. */
  facts?: LinkFact[];
  /** `carrymart://` path that opens this exact thing in the app. */
  appPath: string;
  /** Trailing note, e.g. why a sold listing still renders. */
  note?: string;
};

const StoreLinks = () => (
  <div className="flex flex-wrap items-center gap-3">
    <Button asChild size="lg">
      <Link href="/#download">
        Get the app <ArrowRight aria-hidden />
      </Link>
    </Button>
    <Button asChild size="lg" variant="outline">
      <Link href="/campus-marketplace">How CarryMart works</Link>
    </Button>
  </div>
);

export default function LinkLanding({
  kind,
  title,
  subtitle,
  image,
  verified,
  facts,
  appPath,
  note,
}: LinkLandingProps) {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-muted border border-border px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-sm font-medium text-secondary/80">{kind}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-start gap-6">
          {image && (
            /* `unoptimized` because these are user photos on a CDN that already
               serves derived sizes; running them through the Next optimizer
               would bill per unique image for no gain. */
            <Image
              src={image.url}
              alt={image.alt}
              width={160}
              height={160}
              unoptimized
              className={`w-28 h-28 sm:w-40 sm:h-40 shrink-0 object-cover border border-border ${
                image.rounded ? "rounded-full" : "rounded-3xl"
              }`}
            />
          )}

          <div className="min-w-0">
            <h1 className="font-display text-3xl md:text-4xl font-black tracking-[-0.02em] text-secondary flex items-center gap-2 flex-wrap">
              <span className="break-words">{title}</span>
              {verified && (
                <BadgeCheck
                  aria-label="Verified"
                  className="size-6 text-primary shrink-0"
                />
              )}
            </h1>

            {subtitle && (
              <p className="mt-3 text-lg text-muted-foreground leading-relaxed text-pretty">
                {subtitle}
              </p>
            )}

            {facts && facts.length > 0 && (
              <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                      {fact.label}
                    </dt>
                    <dd className="text-base font-semibold text-secondary">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-muted/40 p-6 sm:p-8">
          <p className="text-secondary font-semibold">
            Open this in the CarryMart app
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed text-pretty">
            The app is where you chat with the seller, agree a price and pay
            through CarryPay escrow, so the money is only released once you have
            the item. This page is the preview.
          </p>
          <div className="mt-6">
            <StoreLinks />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Already have it?{" "}
            <a
              href={`${APP_SCHEME}://${appPath}`}
              className="font-medium text-primary underline underline-offset-4"
            >
              Open in the app
            </a>
            .
          </p>
        </div>

        {note && <p className="mt-6 text-sm text-muted-foreground">{note}</p>}
      </div>
    </div>
  );
}
