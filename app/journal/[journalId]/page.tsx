import React, { FC } from "react";
import ArticleCard from "./_components/ArticleCard";
import ArticleHeader from "./_components/ArticleHeader";
import ArticleContent from "./_components/ArticleContent";
import { journals } from "@/dal/journal";
import Link from "next/link";
import JournalCard from "../_components/JournalCard";

const JournalDetailPage: FC<{
  params: Promise<{ journalId: string }>;
}> = async ({ params }) => {
  const { journalId } = await params;
  const journal = journals.find((journal) => journal.slug === journalId);
  if (!journal) {
    throw new Error("Journal not found");
  }
  const articles = journal.article_content;
  return (
    <main className="grow">
      <header className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 pt-15 pb-10 md:pt-20">
        <p className="text-theme-100 flex items-center gap-2 font-mono text-sm font-normal md:text-[20px] md:-tracking-[0.8px]">
          <span>{journal.category} </span>
          <span>. </span>
          <span>{journal.time_to_read}</span>
        </p>
        <h1 className="font-radio-canada-big text-center text-4xl font-normal -tracking-[0.72px] md:text-[64px] md:-tracking-[1.92px] xl:text-[80px] xl:-tracking-[4px]">
          {journal.title}
        </h1>
      </header>
      <article className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 md:gap-10 md:p-20 xl:flex-row xl:px-25 xl:pt-20">
        <div className="flex w-full max-w-185 justify-between md:mx-auto xl:flex-col xl:gap-10">
          <div className="flex flex-col gap-1">
            <span className="font-source-serif-pro text-theme-100 text-[18px] leading-[120%] font-normal -tracking-[0.54px] md:text-[20px] md:-tracking-[0.8px]">
              Published
            </span>
            <span className="font-radio-canada-big text-[18px] font-normal -tracking-[0.36px] md:text-[20px] md:-tracking-[0.4px]">
              May 7, 2026
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-source-serif-pro text-theme-100 text-[18px] leading-[120%] font-normal -tracking-[0.54px] md:text-[20px] md:-tracking-[0.8px]">
              Author
            </span>
            <span className="font-radio-canada-big text-[18px] font-normal -tracking-[0.36px] md:text-[20px] md:-tracking-[0.4px]">
              {journal.author}
            </span>
          </div>
        </div>
        <p className="font-source-serif-pro max-w-185 text-[18px] leading-[140%] font-normal -tracking-[0.54px] md:mx-auto xl:ml-auto">
          {journal.article_into}
        </p>
      </article>
      <section className="mx-auto max-w-7xl px-5 md:px-20 xl:px-25">
        <div className="border-theme-200 flex max-w-185 flex-col gap-10 border-t py-10 md:mx-auto md:pt-12 md:pb-20 xl:mx-0 xl:ml-auto">
          {articles.map((article, index) => (
            <ArticleCard key={`${index}`}>
              <ArticleHeader>{article.header}</ArticleHeader>
              <ArticleContent>{article.content}</ArticleContent>
            </ArticleCard>
          ))}
        </div>
      </section>
      <section className="bg-theme-300 flex flex-col">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <h2 className="font-radio-canada-big text-[32px] font-medium -tracking-[0.96px] md:text-[48px] md:-tracking-[1.44px] xl:text-[56px] xl:-tracking-[1.68px]">
              Recent articles
            </h2>
            <Link
              href={"/journal"}
              className="font-source-serif-pro text-[18px] leading-[1.2] font-normal -tracking-[0.54px] underline md:text-[20px] md:-tracking-[0.8px]"
            >
              View all articles
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:gap-10 xl:grid-cols-3 xl:gap-4">
            {journals.slice(0, 3).map((journal, index) => (
              <JournalCard
                key={`${journal.slug}-${index}`}
                title={journal.title}
                slug={journal.slug}
                thumbnail_src={journal.article_thumbnail.src}
                thumbnail_alt={journal.article_thumbnail.alt}
                description={journal.description}
                time_to_read={journal.time_to_read}
                category={journal.category}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default JournalDetailPage;
