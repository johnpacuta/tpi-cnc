"use client";
import Link from "next/link";
import { getAllNewsArticles } from "@/lib/news";
import ShareModalButton from "@/components/articles/ShareModalButton";
import ContentSection from "@/components/ContentSection";

export default function News() {
  const articles = getAllNewsArticles();

  return (
      <ContentSection
          title={
              <Link href="/news">
                  News
              </Link>
          }
      >
      <div>
          <div>
              {articles.map((a) => (
                  <article key={a.slug} className="rounded-lg border border-black bg-white p-5 mb-4">
                      <div className="mt-2 mb-2">
                      <ShareModalButton
                          url={`https://tpicnc.com/news/${a.slug}`}
                          title={a.title}
                      />
                      </div>
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
      </ContentSection>
  );
}