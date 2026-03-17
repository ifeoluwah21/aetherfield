import { jobRoles } from "@/dal/careers";
import { type NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = searchParams.get("limit") || 5;
  const offset = searchParams.get("offset") || 0;
  const page = searchParams.get("page") || 1;

  console.log(limit, offset, page);
  return Response.json(jobRoles, { status: 200, statusText: "successful" });
}
