import type { ReactNode } from "react";
import LatestArticlesSidebar from "@/components/articles/Sidebar";
import { getLatestNewsArticles } from "@/lib/news";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const latest = getLatestNewsArticles(6);

  return (
    <main className="pb-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pt-10 md:grid-cols-[1fr_320px]">
        <section>{children}</section>

        <aside className="md:sticky md:top-24 md:self-start">
          <LatestArticlesSidebar latest={latest} />
        </aside>
      </div>
    </main>
  );
}