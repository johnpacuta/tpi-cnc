
import Link from "next/link";
import { getAllNewsArticles } from "@/lib/news";

export default function News() {
  const articles = getAllNewsArticles();

  return (
      <div>
          <h1 className="text-2xl font-semibold text-gray-900"><Link href="/news" className="hover:underline">
              News
          </Link></h1>

          <div className="mt-6 space-y-6">
              {articles.map((a) => (
                  <article key={a.slug} className="rounded-lg border border-black bg-white p-5">
                      <div className="text-xs text-gray-500">{a.date}</div>
                      <h1 className="mt-1 mb-1 text-2xl font-semibold text-gray-900">
                          <Link href={`/news/${a.slug}`} className="hover:underline">
                              {a.title}
                          </Link>
                      </h1>
                      <img src={a.imgSrc} alt={a.title} style={{ border: "2px solid #e5e7eb", borderRadius: 8 }}/>
                      <h2 className="mt-2 text-xl text-gray-700">{a.excerpt}</h2>
                  </article>
              ))}
          </div>
      </div>
  );
}