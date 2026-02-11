
import { notFound } from "next/navigation";
import { getLatestNewsArticles, getNewsArticleBySlug } from "@/lib/news";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Home({ params }: PageProps) {
  const { slug } = await params;

  const article = getNewsArticleBySlug(slug);
  if (!article) notFound();

  const latest = getLatestNewsArticles(6, slug);

  return (
      <div>
      <h1 className="text-2xl font-semibold text-gray-900">News</h1>
      <div className="mt-6 space-y-6">
      <article className="rounded-lg border border-gray-200 bg-white p-6">
        <div className="text-xs text-gray-500">{article.date}</div>
        <h1 className="mt-2 text-2xl font-semibold text-gray-900">{article.title}</h1>
        <p className="mt-4 whitespace-pre-wrap text-sm text-gray-700">{article.content}</p>
      </article>
      </div>
      </div>
  );
}