import { MoveLeft } from "lucide-react";
import Link from "next/link";
import JobRoleCard from "./_components/JobRoleCard";
import { jobRoles } from "@/dal/careers";
import { FC } from "react";
import JobDescription from "./_components/JobDescription";
import JobDescriptionTitle from "./_components/JobDescriptionTitle";
import JobDescriptionValue from "./_components/JobDescriptionValue";
import { Button } from "@/components/ui/button";

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
      <Link
        href={"/careers"}
        className="font-source-serif-pro flex items-center justify-center gap-2 text-[20px] leading-[120%] font-normal -tracking-[0.8px] transition-colors duration-100 hover:text-black/50"
      >
        <MoveLeft />
        <span>Back to Careers</span>
      </Link>
      <section className="mx-auto flex max-w-205 flex-col gap-8 rounded-3xl bg-white p-6 pb-8 md:gap-12 md:p-10 md:pb-10">
        <JobRoleCard
          title={jobRole.title}
          location={jobRole.location}
          role_type={jobRole.role_type}
          short_description={jobRole.short_description}
        />
        <div className="border-t-theme-200 flex flex-col gap-10 border-t border-b py-8 md:py-12">
          <JobDescription>
            <JobDescriptionTitle title="Company Description" />
            <JobDescriptionValue
              jobDescription={jobRole.job_description.company_description}
            />
          </JobDescription>
          <JobDescription>
            <JobDescriptionTitle title="About the role" />
            <JobDescriptionValue
              jobDescription={jobRole.job_description.about_the_role}
            />
          </JobDescription>
          <JobDescription>
            <JobDescriptionTitle title="Requirements" />
            <JobDescriptionValue
              jobDescription={jobRole.job_description.requirements}
            />
          </JobDescription>
          <JobDescription>
            <JobDescriptionTitle title="Company benefits" />
            <JobDescriptionValue
              jobDescription={jobRole.job_description.benefits}
            />
          </JobDescription>
        </div>
        <section className="flex flex-col items-center gap-6">
          <h3 className="font-radio-canada-big text-center text-2xl font-medium -tracking-[0.72px] md:text-[32px] md:-tracking-[0.96px] xl:text-[40px] xl:-tracking-[1.2px]">
            Ready to help build the future of climate intelligence?
          </h3>
          <Button className="h-auto rounded-none p-4 text-sm">Apply now</Button>
        </section>
      </section>
    </main>
  );
};

export default JobDetailsPage;
