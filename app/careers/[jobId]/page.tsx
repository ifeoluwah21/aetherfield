import { JobRole } from "@/dal/careers";
import { FC } from "react";
import AnimatedJobIdPage from "./_components/AnimatedJobIdPage";

const JobDetailsPage: FC<{ params: Promise<{ jobId: string }> }> = async ({
  params,
}) => {
  const { jobId } = await params;
  const response = await fetch(`http://localhost:3000/api/careers/${jobId}`);
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
