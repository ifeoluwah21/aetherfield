import React, { FC } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

import energyConsumption from "../public/Image.svg";

const Features: FC = () => {
  return (
    <section className="flex w-full flex-col gap-6 px-5 py-10">
      <h3 className="font-radio-canada-big mx-auto max-w-153 text-center text-2xl font-medium -tracking-[0.72px] md:text-[32px] md:-tracking-[0.96px] xl:text-[40px] xl:-tracking-[1.2px]">
        Everything you need to measure, model, and act on sustainability
      </h3>
      <div className="flex flex-col gap-6 md:gap-10 xl:flex-row">
        <div>
          <Image
            src={energyConsumption}
            width={693}
            height={506}
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
          <Button className="h-auto self-start rounded-none p-4 font-mono text-[14px] leading-[100%] font-medium">
            Explore features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
