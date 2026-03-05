import { jobRoles } from "@/dal/careers";
import { FC } from "react";
import AnimatedJobIdPage from "./_components/AnimatedJobIdPage";

const JobDetailsPage: FC<{ params: Promise<{ jobId: string }> }> = async ({
  params,
}) => {
  const { jobId } = await params;
  const jobRole = jobRoles.find((jobRole) => jobRole.slug === jobId);
  if (!jobRole) {
    throw new Error("Could not find the role");
  }
  return (
    <main className="from-theme-400 to-theme-500 flex grow flex-col gap-6 bg-linear-to-b from-0% to-100% px-5 py-30">
      <AnimatedJobIdPage jobRole={jobRole} />
    </main>
  );
};

export default JobDetailsPage;
