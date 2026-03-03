import React, { FC } from "react";
import { journals } from "@/dal/journal";
import AnimatedJournalIdPage from "./_components/AnimatedJournalIdPage";

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
      <AnimatedJournalIdPage
        journal={journal}
        journals={journals}
        articles={articles}
      />
    </main>
  );
};

export default JournalDetailPage;
