import React, { FC } from "react";
import JobRoleCard from "./_components/JobRoleCard";
import { Button } from "@/components/ui/button";
import { jobRoles } from "@/dal/careers";

const AboutPage: FC = () => {
  return (
    <main className="from-theme-400 to-theme-500 relative grow bg-linear-to-b from-0% to-100%">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-30">
        <div className="flex w-full flex-col gap-2">
          <h1 className="font-source-serif-pro text-center text-[36px] font-normal -tracking-[1.44px] md:text-[64px] md:-tracking-[2.56px] xl:text-[80px] xl:-tracking-[3.2px]">
            Careers at
          </h1>
          <h2 className="font-radio-canada-big -tracking-[0.72px text-center text-[36px] font-normal md:text-[64px] md:-tracking-[1.92px] xl:text-[80px] xl:-tracking-[4px]">
            Aetherfield
          </h2>
        </div>
        <div className="mx-auto flex w-full max-w-205 flex-col gap-4">
          <div className="flex flex-col gap-4">
            {jobRoles.map(
              ({ title, short_description, location, role_type }, index) => (
                <JobRoleCard
                  key={`${title}-${index}`}
                  title={title}
                  short_description={short_description}
                  location={location}
                  role_type={role_type}
                />
              ),
            )}
          </div>
          <article className="flex flex-col gap-6 rounded-3xl border border-dashed border-black p-6 md:flex-row md:items-start md:justify-between md:p-10">
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="flex flex-col gap-2">
                <h4 className="font-radio-canada-big text-[18px] font-medium -tracking-[0.36px] md:text-[20px] md:-tracking-[0.4px]">
                  Open application
                </h4>
                <p className="text-theme-100 flex flex-row gap-2 font-mono text-sm">
                  <span>Full-time </span>
                  <span>. </span>
                  <span>San Franciso, CA</span>
                </p>
              </div>
              <p className="font-source-serif-pro text-[18px] leading-[120%] font-normal -tracking-[0.54px] md:text-[20px] md:-tracking-[0.8px]">
                Don&apos;t see your role available? Apply for an open
                application!
              </p>
            </div>
            <Button className="h-auto w-max rounded-none bg-black p-3">
              Apply now
            </Button>
          </article>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
