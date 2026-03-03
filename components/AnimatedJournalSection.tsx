"use client";
import Image from "next/image";
import React, { FC, useRef } from "react";
import { Button } from "./ui/button";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, CustomEase, ScrollTrigger);
const AnimatedJournalSection: FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.defaults({
      duration: 0.6,
      ease: CustomEase.create("custom", "M0,0 C0,0 0,1 1,1 "),
    });

    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
      autoAlpha: 0,
      y: "150px",
    });
  });

  return (
    <section
      ref={containerRef}
      className="invisible relative flex w-full flex-col gap-6 px-5 md:gap-10"
    >
      <h3 className="font-radio-canada-big text-center text-2xl -tracking-[0.72px] md:text-[32px] md:-tracking-[0.96px] xl:text-[40px] xl:-tracking-[1.2px]">
        From the journal
      </h3>
      {/* <Image
          src={"/Sticker 2.svg"}
          alt=""
          height={154}
          width={400}
          className="absolute -top-27.25 -left-71.75"
        /> */}
      <div className="divide-theme-200 border-theme-200 mx-auto flex max-w-155 flex-col gap-6 divide-y border-t">
        <article className="flex flex-col gap-4 py-6 md:flex-row">
          <Image
            src={"/floating-fabric-blue-sky.svg"}
            width={335}
            height={203}
            alt="Sheer white fabric billowing gently in a bright blue sky"
            className="aspect-[1.65] w-full object-cover md:w-41.25"
          />
          <div className="flex grow flex-col gap-2">
            <h4 className="font-radio-canada-big text-[18px] font-medium -tracking-[0.36px] md:text-[20px] md:-tracking-[0.4px]">
              How to Build a Climate-Ready Data Stack
            </h4>
            <p className="text-theme-100 flex items-center gap-2 font-mono text-sm font-normal">
              <span>Insights </span>
              <span>. </span>
              <span>4 mins</span>
            </p>
          </div>
        </article>
        <article className="flex flex-col gap-4 py-6 md:flex-row">
          <Image
            src={"/ferns-mossy-rock-closeup.svg"}
            width={335}
            height={203}
            alt="Sheer white fabric billowing gently in a bright blue sky"
            className="aspect-[1.65] w-full object-cover md:w-41.25"
          />
          <div className="flex grow flex-col gap-2">
            <h4 className="font-radio-canada-big text-[18px] font-medium -tracking-[0.36px] md:text-[20px] md:-tracking-[0.4px]">
              Sustainability Isn&apos;t a Side Project: Making Impact
              Operational
            </h4>
            <p className="text-theme-100 flex items-center gap-2 font-mono text-sm font-normal">
              <span>Strategy </span>
              <span>. </span>
              <span>7 mins</span>
            </p>
          </div>
        </article>
        <article className="flex flex-col gap-4 py-6 md:flex-row">
          <Image
            src={"/blue-glacier-texture-swirls.svg"}
            width={335}
            height={203}
            alt="Sheer white fabric billowing gently in a bright blue sky"
            className="aspect-[1.65] w-full object-cover md:w-41.25"
          />
          <div className="flex grow flex-col gap-2">
            <h4 className="font-radio-canada-big text-[18px] font-medium -tracking-[0.36px] md:text-[20px] md:-tracking-[0.4px]">
              Inside the Aetherfield Model: How We Turn Data Into Action
            </h4>
            <p className="text-theme-100 flex items-center gap-2 font-mono text-sm font-normal">
              <span>Insights </span>
              <span>. </span>
              <span>5 mins</span>
            </p>
          </div>
        </article>
        <Button className="h-auto rounded-none p-3 md:mx-auto md:w-max">
          View all articles
        </Button>
      </div>
    </section>
  );
};

export default AnimatedJournalSection;
