"use client";

import Image from "next/image";
import React, { FC, useRef } from "react";
import { Button } from "./ui/button";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, CustomEase, ScrollTrigger);

const AnimatedAboutSection: FC = () => {
  const articleRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.defaults({
      duration: 0.6,
      ease: CustomEase.create("custom", "M0,0 C0,0 0,1 1,1 "),
    });

    gsap.from(articleRef.current, {
      scrollTrigger: {
        trigger: articleRef.current,
        start: "top 80%",
      },
      autoAlpha: 0,
      y: "150px",
    });
  });
  return (
    <section className="mx-auto max-w-245 px-5 py-10 md:py-20">
      <article
        ref={articleRef}
        className="bg-theme-300 invisible flex flex-col gap-6 rounded-3xl p-5 md:flex-row md:gap-10"
      >
        <Image
          src={"/Image-1.svg"}
          alt="Group of colleagues greeting each other in a stylized blue duotone treatment"
          width={498}
          height={280}
          className="w-full"
        />
        <div className="flex flex-col gap-6 md:justify-center">
          <div className="flex flex-col gap-3 md:gap-4">
            <h4 className="font-radio-canada-big text-[18px] font-medium -tracking-[0.36px] md:text-[20px] md:-tracking-[0.4px]">
              Why Acme Inc chose Aetherfield
            </h4>
            <p className="font-source-serif-pro text-[18px] leading-[120%] font-normal -tracking-[0.54px] md:text-[20px] md:-tracking-[0.8px]">
              With fragmented data and growing reporting pressure, Acme turned
              to Aetherfield to streamline their ESG workflows. The result?
              Faster decisions, fewer spreadsheets, and 34% more coverage.
            </p>
          </div>
          <Button className="h-auto rounded-none p-3 md:w-max">
            Read case study
          </Button>
        </div>
      </article>
    </section>
  );
};

export default AnimatedAboutSection;
