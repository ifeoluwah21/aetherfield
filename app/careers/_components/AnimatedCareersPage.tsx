"use client";

import React, { FC, useRef } from "react";
import JobRoleCard from "./JobRoleCard";
import { Button } from "@/components/ui/button";
import { JobRole } from "@/dal/careers";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, CustomEase, ScrollTrigger);

type CareersPageProps = {
  jobRoles: JobRole[];
};

const AnimatedCareersPage: FC<CareersPageProps> = ({ jobRoles }) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 0.6,
        ease: CustomEase.create("custom", "M0,0 C0,0 0,1 1,1 "),
      },
    });

    tl.from(titleRef.current, {
      autoAlpha: 0,
      y: "80px",
    }).from(
      containerRef.current,
      {
        autoAlpha: 0,
        y: "80px",
      },
      "+=0.2",
    );
  });
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-30">
      <div ref={titleRef} className="invisible flex w-full flex-col gap-2">
        <h1 className="font-source-serif-pro text-center text-[36px] font-normal -tracking-[1.44px] md:text-[64px] md:-tracking-[2.56px] xl:text-[80px] xl:-tracking-[3.2px]">
          Careers at
        </h1>
        <h2 className="font-radio-canada-big -tracking-[0.72px text-center text-[36px] font-normal md:text-[64px] md:-tracking-[1.92px] xl:text-[80px] xl:-tracking-[4px]">
          Aetherfield
        </h2>
      </div>
      <div
        ref={containerRef}
        className="invisible mx-auto flex w-full max-w-205 flex-col gap-4"
      >
        <div className="flex flex-col gap-4">
          {jobRoles.map(
            (
              { title, short_description, location, role_type, slug },
              index,
            ) => (
              <JobRoleCard
                key={`${title}-${index}`}
                title={title}
                short_description={short_description}
                location={location}
                role_type={role_type}
                slug={slug}
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
              Don&apos;t see your role available? Apply for an open application!
            </p>
          </div>
          <Button className="h-auto w-max rounded-none bg-black p-3">
            Apply now
          </Button>
        </article>
      </div>
    </section>
  );
};

export default AnimatedCareersPage;
