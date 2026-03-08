
import { notFound } from "next/navigation";
import { getNewsArticleBySlug } from "@/lib/news";
import Link from "next/link";
import ShareModalButton from "@/components/articles/ShareModalButton";
import ContentSection from "@/components/ContentSection";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Home({ params }: PageProps) {
  const { slug } = await params;

  const article = getNewsArticleBySlug(slug);
  if (!article) notFound();

  return (
      <ContentSection
          title={
              <Link href="/news">
                  News
              </Link>
          }
      >
              <div>
          <div className="mt-6 space-y-6">
          <article key={article.slug} className="rounded-lg border border-black bg-white p-5">
              <div className="mt-2 mb-2">
                  <ShareModalButton
                      url={`https://tpicnc.com/news/${article.slug}`}
                      title={article.title}
                  />
              </div>
              <div className="text-xs text-gray-500">{article.date}</div>
              <h1 className="mt-1 mb-1 text-2xl font-semibold text-gray-900">
                  <Link href={`/news/${article.slug}`} className="hover:underline">
                      {article.title}
                  </Link>
              </h1>
              <img src={article.imgSrc} alt={article.title} style={{ border: "2px solid #e5e7eb", borderRadius: 8 }}/>
              {article.youtubeVideoId ? (
                  <div className="mt-6 overflow-hidden rounded-lg border border-gray-200">
                      <div className="aspect-video w-full">
                          <iframe
                              className="h-full w-full"
                              src={`https://www.youtube-nocookie.com/embed/${article.youtubeVideoId}`}
                              title={`${article.title} video`}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                          />
                      </div>
                  </div>
              ) : null}
              <h2 className="mt-2 text-xl text-gray-700 whitespace-pre-line">
                {article.content}
              </h2>
            </article>
          </div>
        </div>
      </ContentSection>
      );
}