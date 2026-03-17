import React from "react";
import { JobRole } from "@/dal/careers";
import AnimatedCareersPage from "./_components/AnimatedCareersPage";
import { BASE_API_URL } from "@/lib/utils";

export default async function CareersPage() {
  const response = await fetch(`${BASE_API_URL}/api/careers?limit=10`, {
    method: "GET",
  });
  if (!response.ok) return null;
  const data = (await response.json()) as JobRole[];

  return (
    <main className="from-theme-400 to-theme-500 relative grow bg-linear-to-b from-0% to-100%">
      <AnimatedCareersPage jobRoles={data} />
    </main>
  );
}
