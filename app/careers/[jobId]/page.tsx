import { JobRole } from "@/dal/careers";
import { FC } from "react";
import AnimatedJobIdPage from "./_components/AnimatedJobIdPage";
import { BASE_API_URL } from "@/lib/utils";

const JobDetailsPage: FC<{ params: Promise<{ jobId: string }> }> = async ({
  params,
}) => {
  const { jobId } = await params;
  const response = await fetch(`${BASE_API_URL}/api/careers/${jobId}`);
  if (!response.ok) {
    throw new Error("Could not find the role");
  }
  const data = (await response.json()) as JobRole;
  return (
    <main className="from-theme-400 to-theme-500 flex grow flex-col gap-6 bg-linear-to-b from-0% to-100% px-5 py-30">
      <AnimatedJobIdPage jobRole={data} />
    </main>
  );
};

export default JobDetailsPage;
