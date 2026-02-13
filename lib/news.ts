export type NewsArticle = {
  slug: string;
  title: string;
  date: string; // ISO (YYYY-MM-DD) so sorting is reliable
  imgSrc?: string;
  excerpt: string;
  content: string; // for now: plain text/HTML-ish string
};

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    slug: "new-cnc-service",
    title: "New CNC Vendors",
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
    slug: "machining-tips-winter",
    title: "Cold-Weather Tooling: A Guide to Winter Precision",
    date: "2026-01-15",
    imgSrc: "/images/Winter_Machining.png",
    excerpt: "A quick checklist to keep equipment happy during cold months.",
    content: "Cold weather can quietly impact accuracy, tool life, and surface finish—especially when machines and material start the day much colder than your normal baseline. Here’s a practical checklist to keep winter machining consistent." +
        "  1) Warm up for repeatability" +
        "  • Run spindle and axis warm-up routines before chasing tight tolerances" +
        "  • Let the machine stabilize before final passes" +
        "  • If your control supports it, use the same warm-up program each morning" +
        "  2) Coolant behaves differently in the cold." +
        "  • Verify concentration and maintenance schedule (refractometer checks help)" +
        "  • Watch for reduced flow/pressure as viscosity changes" +
        "  • Keep an eye on foaming, tramp oil, and filtration performance" +
        "  3) Material temperature affects size" +
        "  • Let stock acclimate to shop temperature when possible" +
        "  • Measure parts at a consistent temperature (especially for tight fits)" +
        "  • Expect more variation early in the day if the shop warms up over time" +
        "  4) Tooling, holders, and runout" +
        "  • Inspect tapers/contact surfaces—condensation can lead to rust and poor seating" +
        "  • Confirm runout and tool balance (small issues become chatter fast)" +
        "  • Re-check offsets if you’re seeing drift between first article and later parts" +
        "  5) Air and lubrication systems" +
        "  • Drain air system water traps more often as humidity swings" +
        "  • Confirm auto-lube is flowing correctly at lower temperatures" +
        "  • Check for sticky valves or sluggish pneumatics in tool changers and fixtures" +
        "  Quick takeaway" +
        "  If accuracy seems to “move” during winter, it’s often thermal stability—not your program. A consistent warm-up + measurement routine typically solves most cold-weather variation."
  },
  {
    slug: "shop-upgrade",
    title: "Shop Upgrade Completed",
    date: "2025-12-20",
    imgSrc: "/images/NewLocation.jpg",
    excerpt: "New tooling and process improvements are now live.",
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