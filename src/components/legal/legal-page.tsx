import Link from "next/link";
import { ContactPanel } from "@/components/contact-panel";

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] };

export type LegalSection = {
  id: string;
  heading: string;
  blocks: LegalBlock[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

const renderBlock = (block: LegalBlock, i: number) => {
  if (block.type === "list") {
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
  }
  return (
    <p key={i} className="mb-4 text-muted-foreground leading-relaxed">
      {block.text}
    </p>
  );
};

export const LegalPage = ({
  eyebrow,
  title,
  subtitle,
  lastUpdated,
  intro,
  sections,
}: LegalPageProps) => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
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
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: <span className="font-semibold text-secondary">{lastUpdated}</span>
        </p>

        {/* Intro */}
        <div className="mt-10 rounded-3xl border border-border bg-muted/50 p-6">
          <p className="text-muted-foreground leading-relaxed">{intro}</p>
        </div>

        {/* Table of contents */}
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

        {/* Sections */}
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

        {/* Contact */}
        <ContactPanel
          title="Questions about this policy?"
          description="We are happy to explain anything here in plain language. Reach our team and we will get back to you."
        />
      </div>
    </div>
  );
};

export default LegalPage;
