export type NewsArticle = {
  slug: string;
  title: string;
  date: string; // ISO (YYYY-MM-DD) so sorting is reliable
  imgSrc?: string;
  excerpt: string;
  content: string; // for now: plain text/HTML-ish string
  youtubeVideoId?: string;
};

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    slug: "johnford",
    title: "Johnford Manufacturing Solutions",
    date: "2026-03-10",
    imgSrc: "/images/Johnford-DMC-5axis.png",
    excerpt: "Johnford’s heavy casting, poured in their own foundry, delivers unsurpassed rigidity and longevity.",
    content:
        "Johnford machines are used in shops that need dependable performance for large-part machining, heavy-duty cutting, and precision work. Their product range includes moving-table and fixed-table bridge mills, slant-bed lathes in multiple configurations, and vertical machining centers for mold, die, and general machining applications",
    youtubeVideoId: "ZGoB9PkKJ_E?si=8t8VZobQInMaYEuU"},
  {
    slug: "excetek",
    title: "Spark Your Innovation",
    date: "2026-02-22",
    imgSrc: "/images/Excetek_Innovation.png",
    excerpt: "Discover Excetek: high-performance EDM solutions designed for precision work, faster turnaround, and dependable results",
    content:
        "Excetek is globally recognized for advanced EDM and high-precision CNC machining solutions—built for accuracy, reliability, and performance.\n" +
        "From wire EDM and die-sinker EDM systems to high-speed machining centers, Excetek equipment is engineered to meet the demands of today’s precision manufacturers.\n" +
        "\nWith intelligent controls, energy-efficient operation, and automation-ready platforms, Excetek helps shops increase throughput while maintaining exceptional surface finish and tight tolerances.\n" +
        "We’re proud to bring these world-class machining solutions to our customers, and we look forward to driving productivity, precision, and performance together.",
    youtubeVideoId: "ZGoB9PkKJ_E?si=8t8VZobQInMaYEuU"},
  {
    slug: "new-cnc-service",
    title: "New CNC Lineup",
    date: "2026-02-01",
    imgSrc: "/images/TPICNC_Vendors.png",
    excerpt: "We’ve expanded our CNC Vendor lineup to reduce lead times.",
    content:
        "We’re excited to share an update: TPI CNC has expanded our CNC vendor lineup to help you source the right equipment faster and with more confidence.\n" +
        "\n" +
        "What’s new\n" +
        "• More qualified vendors across common CNC categories\n" +
        "• Better availability on popular configurations\n" +
        "• Additional options for automation-ready and production-focused setups\n" +
        "\n" +
        "Why we did it\n" +
        "Many customers are balancing tighter schedules and longer lead times. By broadening our vendor network, we can:\n" +
        "• Reduce delays caused by limited availability\n" +
        "• Offer multiple comparable options when a preferred model is backordered\n" +
        "• Match budget, footprint, and capability requirements more precisely\n" +
        "\n" +
        "What this means for you\n" +
        "If you’re quoting a new machine, replacing an aging asset, or scaling capacity, we can help you compare options quickly and make a confident decision based on:\n" +
        "• Application fit\n" +
        "• Lead time and logistics\n" +
        "• Serviceability and long-term support\n"},
  {
    slug: "shop-upgrade",
    title: "Shop Upgrade Completed",
    date: "2025-12-20",
    imgSrc: "/images/NewLocation.jpg",
    excerpt: "We've Moved to Oldcastle!",
    content: "We’ve moved! TPI CNC is now operating from our new location.\n" +
        "\n" +
        "Why the move\n" +
        "The new space gives us more room to support customers, coordinate projects, and stay responsive as demand grows.\n" +
        "\n" +
        "What’s staying the same\n" +
        "• The same team and support\n" +
        "• The same focus on CNC service, troubleshooting, and solutions\n" +
        "• The same commitment to quick communication and reliable follow-through\n" +
        "\n" +
        "What’s improving\n" +
        "• Better space for organizing equipment, parts, and project workflows\n" +
        "• More efficient shipping/receiving and staging\n" +
        "• A smoother experience for ongoing work and new requests\n" +
        "\n",
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