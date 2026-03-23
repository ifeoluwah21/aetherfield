"use client";
import React, { type FC, useRef } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

import energyConsumption from "../public/Image.png";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, CustomEase, ScrollTrigger);

const Features: FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.defaults({
      duration: 0.6,
      ease: CustomEase.create("custom", "M0,0 C0,0 0,1 1,1 "),
    });

    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 70%",
      },
      y: "50px",
      delay: 0.3,
      autoAlpha: 0,
    });
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
      y: "150px",
      autoAlpha: 0,
      delay: "0.6",
    });
  });
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-10 md:gap-10">
      <h3
        ref={titleRef}
        className="font-radio-canada-big invisible mx-auto max-w-153 text-center text-2xl font-medium -tracking-[0.72px] md:text-[32px] md:-tracking-[0.96px] xl:text-[40px] xl:-tracking-[1.2px]"
      >
        Everything you need to measure, model, and act on sustainability
      </h3>
      <div
        ref={containerRef}
        className="invisible flex flex-col gap-6 md:gap-10 xl:flex-row"
      >
        <div>
          <Image
            src={energyConsumption}
            width={1340}
            height={968}
            className="w-full xl:w-173.25"
            alt="UI card displaying energy consumption data on a light fabric background"
          />
        </div>
        <div className="flex flex-col justify-end gap-6 md:grow">
          <div className="divide-y-theme-200 border-t-theme-200 flex grow flex-col divide-y border-t border-b">
            <article className="flex flex-col justify-center gap-3 py-5 md:gap-4 md:py-6">
              <div className="flex justify-between">
                <h4 className="font-radio-canada-big text-[18px] leading-[100%] font-medium -tracking-[0.36px] md:text-xl md:-tracking-[0.4px]">
                  Track
                </h4>
                <span className="text-theme-100 font-mono text-[14px] leading-[100%] font-normal">
                  001
                </span>
              </div>
              <p className="font-source-serif-pro text-[18px] leading-[120%] font-normal -tracking-[0.54px] md:text-xl md:-tracking-[0.8px]">
                Emissions, energy, and waste across your value chain
              </p>
            </article>
            <article className="flex flex-col justify-center gap-3 py-5 md:gap-4 md:py-6">
              <div className="flex justify-between">
                <h4 className="font-radio-canada-big text-[18px] leading-[100%] font-medium -tracking-[0.36px] md:text-xl md:-tracking-[0.4px]">
                  Model
                </h4>
                <span className="text-theme-100 font-mono text-[14px] leading-[100%] font-normal">
                  002
                </span>
              </div>
              <p className="font-source-serif-pro text-[18px] leading-[120%] font-normal -tracking-[0.54px] md:text-xl md:-tracking-[0.8px]">
                Forecast performance and goal alignment
              </p>
            </article>
            <article className="flex flex-col justify-center gap-3 py-5 md:gap-4 md:py-6">
              <div className="flex justify-between">
                <h4 className="font-radio-canada-big text-[18px] leading-[100%] font-medium -tracking-[0.36px] md:text-xl md:-tracking-[0.4px]">
                  Report
                </h4>
                <span className="text-theme-100 font-mono text-[14px] leading-[100%] font-normal">
                  003
                </span>
              </div>
              <p className="font-source-serif-pro text-[18px] leading-[120%] font-normal -tracking-[0.54px] md:text-xl md:-tracking-[0.8px]">
                Generate ESG disclosures, automate frameworks
              </p>
            </article>
            <article className="flex flex-col justify-center gap-3 py-5 md:gap-4 md:py-6">
              <div className="flex justify-between">
                <h4 className="font-radio-canada-big text-[18px] leading-[100%] font-medium -tracking-[0.36px] md:text-xl md:-tracking-[0.4px]">
                  Act
                </h4>
                <span className="text-theme-100 font-mono text-[14px] leading-[100%] font-normal">
                  004
                </span>
              </div>
              <p className="font-source-serif-pro text-[18px] leading-[120%] font-normal -tracking-[0.54px] md:text-xl md:-tracking-[0.8px]">
                Surface insights and operational next steps
              </p>
            </article>
          </div>
          <Button className="h-auto rounded-none p-4 font-mono text-[14px] leading-[100%] font-medium xl:self-start">
            Explore features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
