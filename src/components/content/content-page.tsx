import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactPanel } from "@/components/contact-panel";
import type { Crumb } from "@/lib/schema";

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: { name: string; text: string }[] }
  | { type: "faq"; items: { q: string; a: string }[] }
  // `head` is optional: a key-value facts table has no meaningful column
  // headings, and rendering an empty <thead> is both odd markup and a row of
  // blank space in the layout.
  | { type: "table"; head?: string[]; rows: string[][] }
  | { type: "callout"; title: string; text: string }
  | { type: "links"; items: { title: string; href: string; text: string }[] }
  | { type: "cta"; label: string; href: string; note?: string };

export type ContentSection = {
  id: string;
  /** Phrase these as the question a student would actually type. */
  heading: string;
  blocks: ContentBlock[];
};

type ContentPageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  /**
   * The direct answer, rendered immediately under the H1 in a bordered box.
   *
   * This block does the heavy lifting for both featured snippets and generative
   * answers: it is a single self-contained passage, under ~50 words, that names
   * the entity and answers the page's title question without needing any
   * surrounding context. Extraction engines lift passages, not pages.
   */
  answer: string;
  crumbs: Crumb[];
  sections: ContentSection[];
  updated?: string;
  contact?: { title: string; description: string };
};

const Breadcrumbs = ({ crumbs }: { crumbs: Crumb[] }) => (
  <nav aria-label="Breadcrumb" className="mb-6">
    <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
      {crumbs.map((crumb, i) => {
        const isLast = i === crumbs.length - 1;
        return (
          <li key={crumb.path} className="flex items-center gap-1">
            {i > 0 && <ChevronRight aria-hidden className="size-3.5 shrink-0" />}
            {isLast ? (
              <span className="font-medium text-secondary" aria-current="page">
                {crumb.name}
              </span>
            ) : (
              <Link href={crumb.path} className="hover:text-primary transition-colors">
                {crumb.name}
              </Link>
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);

const renderBlock = (block: ContentBlock, i: number) => {
  switch (block.type) {
    case "h3":
      return (
        <h3
          key={i}
          className="font-display text-lg md:text-xl font-bold tracking-tight text-secondary mt-8 mb-3"
        >
          {block.text}
        </h3>
      );

    case "list":
      return (
        <ul
          key={i}
          className="mb-4 space-y-2 pl-5 list-disc marker:text-primary text-muted-foreground leading-relaxed"
        >
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );

    case "steps":
      return (
        <ol key={i} className="mb-4 space-y-4">
          {block.items.map((item, j) => (
            <li
              key={j}
              id={`step-${j + 1}`}
              className="flex gap-4 scroll-mt-28 rounded-3xl border border-border bg-muted/50 p-5"
            >
              <span className="font-display flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-extrabold text-primary-foreground tabular-nums">
                {j + 1}
              </span>
              <div>
                <p className="font-semibold text-secondary">{item.name}</p>
                <p className="mt-1 text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      );

    case "faq":
      return (
        <div key={i} className="mb-4 space-y-3">
          {block.items.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-3xl border border-border bg-muted/50 px-6 open:bg-muted transition-colors"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 font-semibold text-secondary list-none [&::-webkit-details-marker]:hidden">
                {faq.q}
                <ChevronDown className="size-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="pb-5 -mt-1 text-muted-foreground leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      );

    case "table":
      return (
        // Tables are the format extraction engines quote most reliably for
        // comparisons, so the markup stays a real <table> with a <thead> rather
        // than a grid of divs.
        <div key={i} className="mb-4 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            {block.head && (
              <thead>
                <tr className="border-b border-border">
                  {block.head.map((cell) => (
                    <th
                      key={cell}
                      scope="col"
                      className="py-3 pr-4 font-display font-bold text-secondary"
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {block.rows.map((row, j) => (
                <tr key={j} className="border-b border-border/60 align-top">
                  {row.map((cell, k) =>
                    // With no header row the first column is what labels each
                    // row, so it is a real <th scope="row"> rather than a bolded
                    // <td>. `scope` is only valid on a <th>, and it is what lets
                    // a screen reader and a parser read the table as key-value
                    // pairs instead of an untitled grid.
                    k === 0 && !block.head ? (
                      <th
                        key={k}
                        scope="row"
                        className="py-3 pr-4 text-left font-semibold text-secondary"
                      >
                        {cell}
                      </th>
                    ) : (
                      <td
                        key={k}
                        className={
                          k === 0
                            ? "py-3 pr-4 font-semibold text-secondary"
                            : "py-3 pr-4 text-muted-foreground"
                        }
                      >
                        {cell}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "callout":
      return (
        <div key={i} className="mb-4 rounded-3xl border border-primary/20 bg-primary/5 p-6">
          <p className="font-display font-bold text-secondary">{block.title}</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">{block.text}</p>
        </div>
      );

    case "links":
      return (
        <ul key={i} className="mb-4 grid gap-3 sm:grid-cols-2">
          {block.items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group block h-full rounded-3xl border border-border bg-muted/50 p-5 transition-colors hover:border-primary/40 hover:bg-muted"
              >
                <p className="font-display font-bold text-secondary group-hover:text-primary transition-colors">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      );

    case "cta":
      return (
        <div key={i} className="mb-4 mt-8">
          <Button asChild size="lg">
            <Link href={block.href}>
              {block.label}
              <ChevronRight className="size-5" />
            </Link>
          </Button>
          {block.note && (
            <p className="mt-3 text-sm text-muted-foreground">{block.note}</p>
          )}
        </div>
      );

    default:
      return (
        <p key={i} className="mb-4 text-muted-foreground leading-relaxed">
          {(block as { text: string }).text}
        </p>
      );
  }
};

/**
 * Prose page shell shared by every editorial route. Matches the gutter, reading
 * width and header treatment of the legal and support pages so the whole site
 * reads as one document set.
 */
export const ContentPage = ({
  eyebrow,
  title,
  subtitle,
  answer,
  crumbs,
  sections,
  updated,
  contact,
}: ContentPageProps) => (
  <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-3xl">
      <Breadcrumbs crumbs={crumbs} />

      <div className="inline-flex items-center gap-2 rounded-full bg-muted border border-border px-4 py-1.5 mb-6">
        <span className="w-2 h-2 rounded-full bg-primary" />
        <span className="text-sm font-medium text-secondary/80">{eyebrow}</span>
      </div>

      <h1 className="font-display text-4xl md:text-5xl font-black tracking-[-0.02em] text-secondary">
        {title}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
        {subtitle}
      </p>

      <div className="mt-10 rounded-3xl border border-border bg-muted/50 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
          The short answer
        </p>
        <p className="text-secondary leading-relaxed">{answer}</p>
      </div>

      {updated && (
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: <span className="font-semibold text-secondary">{updated}</span>
        </p>
      )}

      <nav className="mt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">
          On this page
        </p>
        <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
          {sections.map((section, i) => (
            <li key={section.id}>
              <Link
                href={`#${section.id}`}
                className="group flex items-baseline gap-2 text-sm text-secondary/80 hover:text-primary transition-colors"
              >
                <span className="text-primary font-semibold tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="group-hover:underline underline-offset-4">
                  {section.heading}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-4">
        {sections.map((section, i) => (
          <section key={section.id} id={section.id} className="mt-12 scroll-mt-28">
            <h2 className="font-display text-2xl font-bold tracking-tight text-secondary mb-4">
              <span className="text-primary mr-2 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              {section.heading}
            </h2>
            {section.blocks.map(renderBlock)}
          </section>
        ))}
      </div>

      <ContactPanel
        title={contact?.title ?? "Still have a question?"}
        description={
          contact?.description ??
          "Send us a message and a real person on the CarryMart team will get back to you."
        }
      />
    </div>
  </div>
);

export default ContentPage;
