import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { CAMPUSES } from "@/lib/campuses";

/**
 * Sitemap.
 *
 * Priorities are set relative to each other rather than sprinkled at random:
 * the homepage and the pillar page are the two URLs we most want crawled and
 * recrawled, campus pages sit above the legal pages because they are the
 * long-tail surface, and the legal pages are indexable but unimportant.
 *
 * `lastModified` is the build time. That is honest for a statically generated
 * marketing site — every page is regenerated on deploy — and it avoids the
 * common mistake of hardcoding a date that then rots.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/campus-marketplace`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/carrypay`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/sell-on-campus`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/campuses`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/support`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const campuses: MetadataRoute.Sitemap = CAMPUSES.map((campus) => ({
    url: `${SITE_URL}/campuses/${campus.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...core, ...campuses].map((entry) => ({ ...entry, lastModified }));
}
