import Link from "next/link";
import type { NewsArticle } from "@/lib/news";

type Props = {
  latest: Pick<NewsArticle, "slug" | "title" | "date">[];
  title?: string;
};

export default function LatestArticlesSidebar({ latest, title = "Latest Articles" }: Props) {
  return (
    <aside className="w-full md:pt-32">
        <div className="pt-2"></div>
      <div className="rounded-lg border border-black bg-white p-4">
        <h2 className="text-sm font-semibold tracking-wide text-gray-900">{title}</h2>

        <ul className="mt-3 space-y-3">
          {latest.map((a) => (
            <li key={a.slug} className="leading-snug">
              <Link
                href={`/news/${a.slug}`}
                className="text-sm font-medium text-gray-900 hover:underline"
              >
                {a.title}
              </Link>
              <div className="text-xs text-gray-500">{a.date}</div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}