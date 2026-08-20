import JsonLd from "@/components/seo/json-ld";
import {
  breadcrumbNode,
  graph,
  webPageNode,
  type Crumb,
  type Faq,
} from "@/lib/schema";

type PageGraphProps = {
  path: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  /** Must be FAQs that are visibly rendered on this page. */
  faqs?: Faq[];
  /** Anything page-specific: HowTo, ItemList, a Place for a campus page. */
  nodes?: Record<string, unknown>[];
  /** The entity the page is primarily about. Defaults to the organisation. */
  about?: Record<string, unknown> | { "@id": string };
  dateModified?: string;
};

/**
 * Per-page half of the entity graph. The site-wide half (Organization, WebSite,
 * SoftwareApplication, Service) comes from the root layout, and these nodes
 * reference it by @id, so a consumer merging both blocks gets one connected
 * graph for the URL it fetched.
 */
export default function PageGraph({
  path,
  title,
  description,
  crumbs,
  faqs,
  nodes = [],
  about,
  dateModified,
}: PageGraphProps) {
  return (
    <JsonLd
      id="carrymart-page-graph"
      data={graph([
        webPageNode({ path, title, description, crumbs, faqs, about, dateModified }),
        breadcrumbNode(path, crumbs),
        ...nodes,
      ])}
    />
  );
}
