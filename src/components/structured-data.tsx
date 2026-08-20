import JsonLd from "@/components/seo/json-ld";
import { baseNodes, graph } from "@/lib/schema";

/**
 * Site-wide entity graph, rendered once from the root layout. Describes who
 * CarryMart is, what the site is, and what the product is — the three nodes a
 * crawler needs to treat "CarryMart" as a resolvable entity rather than a
 * string. Per-page nodes (WebPage, BreadcrumbList, visible FAQs) are emitted by
 * the pages themselves and reference these by @id.
 */
export default function StructuredData() {
  return <JsonLd id="carrymart-graph" data={graph(baseNodes())} />;
}
