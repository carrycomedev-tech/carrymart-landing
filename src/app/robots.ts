import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * robots.txt, generated so it can never drift from SITE_URL.
 *
 * The AI crawlers are listed explicitly rather than left to the wildcard, for
 * two reasons. First, being cited in ChatGPT, Claude, Perplexity or an AI
 * Overview requires those specific user-agents to be able to fetch the page, and
 * several of them are separate agents with separate jobs: GPTBot builds the
 * training corpus, OAI-SearchBot builds the index ChatGPT search queries, and
 * ChatGPT-User fetches a URL live when a user's question needs it. Blocking any
 * one of them removes a different route to being named. Second, an explicit
 * allow is documentation: the next person to touch this file can see the
 * decision was deliberate rather than inherited from a default.
 *
 * Google-Extended and Applebot-Extended are opt-out-only tokens that control AI
 * training and grounding, not crawling. Listing them with an allow is a no-op
 * today; it is here so that a future "block AI" change has to be made
 * deliberately on this line rather than by silently adding a wildcard disallow.
 *
 * The previous static public/robots.txt carried `Crawl-delay: 1`. That is gone
 * on purpose: Google ignores it outright, and Bing honours it by throttling to
 * one page per second, which slows a full recrawl of the site for no benefit.
 */
const AI_CRAWLERS = [
  // OpenAI
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google, Apple, Microsoft AI surfaces
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "BingBot",
  // Others that drive answer surfaces
  "DuckAssistBot",
  "meta-externalagent",
  "Meta-ExternalAgent",
  "Amazonbot",
  "YouBot",
  "cohere-ai",
  "Diffbot",
  "Bytespider",
  "MistralAI-User",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // The subscribe endpoint has nothing to index and accepts POSTs.
        disallow: ["/api/"],
      },
      {
        userAgent: AI_CRAWLERS,
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
