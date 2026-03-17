import React, { FC } from "react";
import { Journal, journals } from "@/dal/journal";
import AnimatedJournalIdPage from "./_components/AnimatedJournalIdPage";

const JournalDetailPage: FC<{
  params: Promise<{ journalId: string }>;
}> = async ({ params }) => {
  const { journalId } = await params;
  const response = await fetch(
    `http://localhost:3000/api/journals/${journalId}`,
    {
      method: "GET",
    },
  );

  if (!response.ok) return null;

  const journal = (await response.json()) as Journal;
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
