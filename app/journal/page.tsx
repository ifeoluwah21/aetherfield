import React, { FC } from "react";
import Header from "./_components/Header";

import { journals } from "@/dal/journal";
import { Button } from "@/components/ui/button";
import JournalCard from "./_components/JournalCard";
const page: FC = () => {
  return (
    <>
      <main className="flex w-full grow flex-col items-center bg-white">
        <Header />
        <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 pt-6 pb-4 md:pt-10 md:pb-6 xl:pt-20 xl:pb-10">
          <h1 className="font-radio-canada-big text-center text-2xl leading-[100%] font-medium -tracking-[0.72px] md:text-[32px] md:-tracking-[0.96px] xl:text-[40px] xl:-tracking-[1.2px]">
            Latest articles
          </h1>
          <div className="grid grid-cols-1 gap-20 pb-10 md:gap-x-10 md:gap-y-20 md:pb-20 xl:grid-cols-2 xl:gap-x-4 xl:gap-y-20 xl:pb-30">
            {journals.map((journal, index) => (
              <JournalCard
                key={`${journal.author}-${index}`}
                title={journal.title}
                category={journal.category}
                thumbnail_alt={journal.article_thumbnail.alt}
                thumbnail_src={journal.article_thumbnail.src}
                description={journal.description}
                time_to_read={journal.time_to_read}
                slug={journal.slug}
              />
            ))}
          </div>
        </section>
        <section className="bg-theme-300 mb:py-20 w-full px-5 py-10 xl:py-30">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8">
            <h3 className="font-radio-canada-big text-center text-2xl leading-[100%] font-medium -tracking-[0.72px] md:text-[32px] md:-tracking-[0.96px] xl:text-[40px] xl:-tracking-[1.2px]">
              Subscribe to Aetherfield Journal
            </h3>
            <Button className="h-auto rounded-none p-4 font-mono text-sm font-medium">
              Sign up to newsletter
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
