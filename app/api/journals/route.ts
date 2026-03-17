import { journals } from "@/dal/journal";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = searchParams.get("limit") || 5;
  const offset = searchParams.get("offset") || 0;
  const page = searchParams.get("page") || 1;
  console.log(searchParams, limit, offset, page);
  return Response.json(journals, { status: 200, statusText: "successful" });
}
