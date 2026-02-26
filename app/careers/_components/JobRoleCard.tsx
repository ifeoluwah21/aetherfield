"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

type JobRoleCardProps = {
  title: string;
  role_type: "contract" | "full-time" | "part-time";
  location: string;
  short_description: string;
  slug: string;
};
const JobRoleCard: FC<JobRoleCardProps> = ({
  title,
  role_type,
  location,
  short_description,
  slug,
}) => {
  const router = useRouter();
  return (
    <article className="flex flex-col gap-6 rounded-3xl bg-white p-6 md:flex-row md:items-start md:justify-between md:p-10">
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col gap-2">
          <h4 className="font-radio-canada-big text-[18px] font-medium -tracking-[0.36px] md:text-[20px] md:-tracking-[0.4px]">
            {title}
          </h4>
          <p className="text-theme-100 flex flex-row gap-2 font-mono text-sm">
            <span className="capitalize">{role_type} </span>
            <span>. </span>
            <span>{location}</span>
          </p>
        </div>
        <p className="font-source-serif-pro text-[18px] leading-[120%] font-normal -tracking-[0.54px] md:text-[20px] md:-tracking-[0.8px]">
          {short_description}
        </p>
      </div>
      <Button
        onClick={() => {
          router.push(`/careers/${slug}`);
        }}
        className="h-auto w-max rounded-none bg-black p-3"
      >
        View role
      </Button>
    </article>
  );
};

export default JobRoleCard;
