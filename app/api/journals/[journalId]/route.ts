import { journals } from "@/dal/journal";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ journalId: string }> },
) {
  const { journalId } = await params;
  const journal = journals.find((journal) => {
    return journal.slug === journalId;
  });

  return Response.json(journal, { status: 200, statusText: "successful" });
}
