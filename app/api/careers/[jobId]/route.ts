import { jobRoles } from "@/dal/careers";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ jobId: string }> },
) {
  const { jobId } = await params;
  const jobRole = jobRoles.find((jobRole) => jobRole.slug === jobId);
  return Response.json(jobRole, { status: 200, statusText: "successful" });
}
