
import Link from "next/link";
import LatestArticlesSidebar from "@/components/articles/Sidebar";
import { getAllNewsArticles, getLatestNewsArticles } from "@/lib/news";

export default function News() {
  const articles = getAllNewsArticles();
  const latest = getLatestNewsArticles(6);

  return (
    <main className="pb-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pt-10 md:grid-cols-[1fr_320px]">
        <section>
          <h1 className="text-2xl font-semibold text-gray-900">News</h1>

          <div className="mt-6 space-y-6">
            {articles.map((a) => (
              <article key={a.slug} className="rounded-lg border border-gray-200 bg-white p-5">
                <div className="text-xs text-gray-500">{a.date}</div>
                <h2 className="mt-1 text-lg font-semibold text-gray-900">
                  <Link href={`/news/${a.slug}`} className="hover:underline">
                    {a.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-gray-700">{a.excerpt}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="md:sticky md:top-24 md:self-start">
          <LatestArticlesSidebar latest={latest} />
        </div>
      </div>
    </main>
  );
}