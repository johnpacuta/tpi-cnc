export type NewsArticle = {
  slug: string;
  title: string;
  date: string; // ISO (YYYY-MM-DD) so sorting is reliable
  excerpt: string;
  content: string; // for now: plain text/HTML-ish string
};

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    slug: "new-cnc-service",
    title: "New CNC Service Offering",
    date: "2026-02-01",
    excerpt: "We’ve expanded our CNC service lineup to reduce lead times.",
    content:
      "Full article content goes here. You can later swap this for MDX/markdown or rich components.",
  },
  {
    slug: "maintenance-tips-winter",
    title: "Winter Maintenance Tips",
    date: "2026-01-15",
    excerpt: "A quick checklist to keep equipment happy during cold months.",
    content: "Full article content goes here.",
  },
  {
    slug: "shop-upgrade",
    title: "Shop Upgrade Completed",
    date: "2025-12-20",
    excerpt: "New tooling and process improvements are now live.",
    content: "Full article content goes here.",
  },
];

export function getAllNewsArticles() {
  return [...NEWS_ARTICLES].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getLatestNewsArticles(limit = 6, excludeSlug?: string) {
  const all = getAllNewsArticles();
  const filtered = excludeSlug ? all.filter((a) => a.slug !== excludeSlug) : all;
  return filtered.slice(0, limit);
}

export function getNewsArticleBySlug(slug: string) {
  return NEWS_ARTICLES.find((a) => a.slug === slug) ?? null;
}