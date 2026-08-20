/**
 * Renders a JSON-LD graph as a plain <script> in the server-rendered HTML.
 *
 * This deliberately does not use next/script. next/script defaults to the
 * `afterInteractive` strategy, which injects the tag from the client after
 * hydration — so the JSON-LD is absent from the initial HTML response. Googlebot
 * renders JS and would eventually see it, but the crawlers that matter most for
 * generative answers (GPTBot, ClaudeBot, PerplexityBot and the on-demand
 * user-agents behind ChatGPT and Perplexity citations) largely read the raw HTML
 * and do not execute scripts. A plain tag is in the first byte of the response
 * for every one of them.
 */
export default function JsonLd({
  id,
  data,
}: {
  id: string;
  data: Record<string, unknown>;
}) {
  return (
    <script
      id={id}
      type="application/ld+json"
      // Schema is built from our own constants, never user input.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
