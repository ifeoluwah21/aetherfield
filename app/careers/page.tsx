import React, { FC } from "react";
import { JobRole } from "@/dal/careers";
import AnimatedCareersPage from "./_components/AnimatedCareersPage";

const CareersPage: FC = async () => {
  const response = await fetch("http://localhost:3000/api/careers?limit=10", {
    method: "GET",
  });
  if (!response.ok) return null;
  const data = (await response.json()) as JobRole[];

  return (
    <main className="from-theme-400 to-theme-500 relative grow bg-linear-to-b from-0% to-100%">
      <AnimatedCareersPage jobRoles={data} />
    </main>
  );
};

export default CareersPage;
