import React, { FC } from "react";
import { jobRoles } from "@/dal/careers";
import AnimatedCareersPage from "./_components/AnimatedCareersPage";

const AboutPage: FC = () => {
  return (
    <main className="from-theme-400 to-theme-500 relative grow bg-linear-to-b from-0% to-100%">
      <AnimatedCareersPage jobRoles={jobRoles} />
    </main>
  );
};

export default AboutPage;
