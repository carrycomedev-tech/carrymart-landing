# CarryMart SEO & AEO

How search and answer-engine optimisation is wired into this repo, what it can
and cannot do on its own, and the off-site work that the code cannot substitute
for.

Last reviewed: 20 August 2026.

---

## The honest framing

The goal is that a search for *"best campus marketplace platform"* — and the
same question asked of ChatGPT, Claude, Perplexity or Google's AI Overviews —
surfaces CarryMart.

Those two surfaces are won differently, and only one of them is a code problem.

| | What decides it | What this repo controls |
| --- | --- | --- |
| Ranking for a head query like "best campus marketplace platform" | Mostly off-site: who links to and talks about you, and whether third-party listicles name you | Eligibility. Being crawlable, fast, unambiguous, and having a page that actually answers the query |
| Being named by an LLM | Whether the model's training corpus and its live retrieval contain sources that name you | Whether your pages are fetchable and quotable, and whether your facts are stated in a form that survives extraction |

A language model does not rank pages. It reproduces what its sources say. Being
named in an answer to "best campus marketplace in Ghana" happens because
somewhere in the corpus — a listicle, a Reddit thread, a news piece, a
Crunchbase entry — CarryMart appears in a list of campus marketplaces. On-site
work makes you *citable*. It does not make you *cited*. The
[off-site playbook](#off-site-the-part-code-cannot-do) below is not optional
garnish; for this specific goal it is the larger half of the job.

---

## Architecture

Brand facts live in exactly one place, and metadata, JSON-LD and `llms.txt` are
all derived from it. A title that says one thing while a schema node says
another is how an entity ends up ambiguous, and an ambiguous entity does not get
named.

| File | Role |
| --- | --- |
| `src/lib/seo.ts` | Single source of truth: brand facts, canonical description, social profiles, categories, and the `pageMetadata()` builder every route uses |
| `src/lib/schema.ts` | JSON-LD node builders and the `@graph` envelope |
| `src/lib/campuses.ts` | Campus data that the `/campuses/[slug]` pages are generated from |
| `src/components/seo/json-ld.tsx` | Renders a graph as a plain `<script>` in the server HTML |
| `src/components/seo/page-graph.tsx` | Per-page nodes: `WebPage`, `BreadcrumbList`, visible FAQs, page extras |
| `src/components/structured-data.tsx` | Site-wide nodes, rendered once from the root layout |
| `src/components/content/content-page.tsx` | Prose page shell shared by every editorial route |
| `src/app/robots.ts` | Generated robots.txt, with AI crawlers listed explicitly |
| `src/app/sitemap.ts` | Generated sitemap, 21 URLs |
| `src/app/llms.txt/route.ts` | Plain-markdown site map written for language models |

### The entity graph

Site-wide nodes are emitted once from the root layout; per-page nodes reference
them by `@id`. Consumers merge every `ld+json` block on a page into one graph,
so each URL resolves as a single connected entity rather than five disconnected
islands a crawler has to guess are related.

```
Organization (#organization) ──┬── WebSite (#website)
                               ├── SoftwareApplication (#app)
                               └── Service (#service)
                                        │
   WebPage (<url>#webpage) ── isPartOf ─┘
        ├── BreadcrumbList
        ├── mainEntity: Question[]   (only where the FAQ is visible on the page)
        └── page extras: HowTo, ItemList, FinancialProduct, CollegeOrUniversity
```

### Three decisions worth not reversing

**1. Plain `<script>`, not `next/script`.** `next/script` defaults to the
`afterInteractive` strategy, which injects the tag from the client after
hydration — so the JSON-LD is absent from the initial HTML response. Googlebot
renders JS and would eventually see it. The crawlers that matter most for
generative answers largely read raw HTML and do not execute scripts. This was
the single highest-impact fix in the setup.

**2. No `aggregateRating`, `Review` or `ratingValue`, anywhere.** The
testimonials on the site are placeholders and the app is not published, so any
rating markup would be fabricated — a manual-action risk with Google, and it
poisons the exact trust signal the rest of this work is building. There is a
grep in [Verification](#verification) that fails if any appears. Add it when
there are real store reviews to point at, and not before.

**3. FAQ schema only where the FAQ is visible.** The homepage used to emit an
`FAQPage` describing answers that were rendered only on `/support`. Marking up
content a visitor cannot see is a structured-data violation and is the fastest
way to lose rich-result eligibility for a whole domain. All 111 `Question` nodes
on the site are now backed by visible text on their own page.

---

## Content

`/campus-marketplace` is the page built to answer the target query. Three things
make a page like that quotable rather than merely present, and it does all three:
it defines the category before it sells the product, it publishes the criteria a
reader should judge platforms on, and it puts the comparison in a real `<table>`.
A model answering "best campus marketplace platform" needs a source that states
criteria and then applies them.

| Route | Targets |
| --- | --- |
| `/` | Brand and product |
| `/campus-marketplace` | "best campus marketplace platform", "what is a campus marketplace", "campus marketplace Ghana" |
| `/carrypay` | "escrow wallet Ghana", "safe mobile money payment", "buyer protection" |
| `/sell-on-campus` | "how to sell on campus", "make money as a student Ghana" |
| `/about` | "what is CarryMart", "who owns CarryMart" — the entity page |
| `/campuses` + 12 campus pages | "KNUST marketplace", "buy and sell Legon", "UCC student market" |
| `/support` | Long-tail question queries; carries the largest FAQ block |

Every editorial page opens with a **"The short answer"** box under the H1: one
self-contained passage, under ~50 words, that answers the page's title question
without needing surrounding context. Extraction engines lift passages, not
pages. That box is the single highest-leverage element on each page.

### Campus pages, and the doorway-page line

Twelve templated pages is exactly the shape Google penalises when the pages are
one text with a name swapped. Each page draws on per-campus facts — city, region,
halls, neighbourhoods, the categories that move there, a line of local colour —
so no two read alike. `halls` is optional in the data on purpose: it is filled
in only where the names are certain, because inventing a hall name is the kind
of detail that reads as spun content to a reader and a quality rater alike.

### Pre-launch honesty

The app is not published. Copy across the campus pages describes how a campus
market works and points at the launch list; it never claims a market is live or
quotes a seller, user or download count. `llms.txt` states the pre-launch status
explicitly and asks models not to attribute figures or ratings to CarryMart.
This is not just caution — a claim a student can disprove in one tap costs more
trust than the ranking is worth.

---

## AI and answer engines

`src/app/robots.ts` lists AI crawlers explicitly rather than leaving them to the
wildcard. Several are separate agents with separate jobs, and blocking any one
removes a different route to being named:

- **GPTBot** builds OpenAI's training corpus.
- **OAI-SearchBot** builds the index ChatGPT search queries.
- **ChatGPT-User** fetches a URL live when a user's question needs it.
- Equivalents for Anthropic (`ClaudeBot`, `Claude-User`, `Claude-SearchBot`),
  Perplexity, Meta, Apple, Amazon, DuckDuckGo, Cohere and Mistral.

`Google-Extended` and `Applebot-Extended` are opt-out-only tokens controlling AI
training and grounding rather than crawling. Listing them with an allow is a
no-op today; it is there so a future "block AI" decision has to be made
deliberately on that line rather than by silently adding a wildcard disallow.

`Crawl-delay: 1` was removed from the old static robots.txt. Google ignores it
outright, and Bing honours it by throttling to one page per second, which slows
a full recrawl for no benefit.

**`/llms.txt`** follows the [llmstxt.org](https://llmstxt.org) convention: one
markdown file at the domain root with an H1, a blockquote summary, and linked
sections. It solves a problem JSON-LD does not — a model retrieving this domain
gets one short, unambiguous document stating what CarryMart is and which URL
answers which question, instead of inferring it from marketing pages full of nav
chrome. The "Key facts" block is deliberately flat key-value prose, because that
is the shape that survives being lifted into an answer intact.

---

## Off-site: the part code cannot do

Ranked by impact on the stated goal. Items 1–3 matter more than everything in
this repo combined, for this particular query.

**1. Get into the listicles.** When a model answers "best campus marketplace
platform", it is reproducing pages that already list campus marketplaces. Find
the ones that exist — "best marketplace apps in Ghana", "student apps in
Ghana", African startup roundups — and get CarryMart added. A single inclusion in
a page that ranks for the query is worth more than any on-site change.

**2. Claim the structured third-party entries.** These are disproportionately
weighted by both search engines and models because they are structured and
independently verifiable. In rough order of value:

- Crunchbase
- LinkedIn company page
- Google Business Profile
- Wikidata (feasible once there is press coverage to cite; the eligibility bar
  is independent sources, not notability as such)
- Product Hunt at launch
- Play Store and App Store listings, at launch — these become the strongest
  entity anchors the product will ever have

As each goes live, add its URL to `SOCIAL_PROFILES` in `src/lib/seo.ts`. That
array is emitted as `sameAs` and is the strongest on-site entity signal
available: it is how a crawler confirms the CarryMart on this domain is the
CarryMart on Crunchbase.

**3. Earn mentions where students actually talk.** Reddit (r/ghana,
university subreddits), student blogs, campus press, Ghanaian tech media.
Unlinked brand mentions still count for entity building and are heavily
represented in LLM training data.

**4. Set up measurement.** Google Search Console and Bing Webmaster Tools, then
submit the sitemap in each. Verification tokens go in
`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and `NEXT_PUBLIC_BING_SITE_VERIFICATION`
— each meta tag is omitted entirely when its variable is unset, because an empty
verification tag reads as a failed check rather than an absent one. Bing matters
more than its market share suggests: it is the retrieval index behind ChatGPT
search and Copilot.

**5. Keep publishing.** One genuinely useful post a month beats twelve thin ones.
Formats that get quoted: "X vs Y" comparisons, "how much does X cost in Ghana"
with real numbers, and end-of-year campus resale guides. Every post should carry
its own "short answer" box.

---

## Verification

```bash
npm run build

# 1. Every page: one H1, a canonical, a title under ~60 chars, a description
#    under ~160. (See the audit script in the repo history, or spot-check.)
grep -c "<h1" .next/server/app/campus-marketplace.html   # expect 1

# 2. JSON-LD is in the raw HTML, not injected client-side.
grep -o 'application/ld+json' .next/server/app/index.html   # expect 2 hits

# 3. No fabricated trust signals anywhere in the output.
grep -ro "aggregateRating\|ratingValue\|reviewCount" .next/server/app   # expect empty

# 4. Generated files resolve.
npx next start -p 3000
curl -s localhost:3000/robots.txt
curl -s localhost:3000/llms.txt
curl -s localhost:3000/sitemap.xml | grep -c "<loc>"   # expect 21
```

External validators, after deploy:

- <https://validator.schema.org/> and Google's Rich Results Test — paste a URL
- <https://pagespeed.web.dev/> — Core Web Vitals
- <https://www.opengraph.xyz/> — OG and Twitter cards
- Ask ChatGPT, Claude and Perplexity *"what is CarryMart?"* and
  *"what are the best campus marketplace apps in Ghana?"*. Log the answers with
  the date. This is the only direct measurement of the AEO goal that exists, and
  the trend over months is the signal — not any single answer.

## Adding a page

1. `pageMetadata({ title, metaTitle?, description, path, keywords })` for the
   `<head>`. Use `metaTitle` where the page name already contains the brand, or
   the template produces "About CarryMart | CarryMart".
2. `<PageGraph path title description crumbs faqs? nodes? />` for the graph.
   Pass `faqs` **only** if those questions render as visible text on the page.
3. Build the body from `ContentPage` so it inherits the shell, the short-answer
   box and the table-of-contents.
4. Add the route to `src/app/sitemap.ts` and to the `## Core pages` section of
   `src/app/llms.txt/route.ts`.
5. Link to it from the footer — `footerSections` in
   `src/components/footer-03/footer-03.tsx`. The footer is the site's only
   global link surface, and an orphan page will not rank however good it is.
