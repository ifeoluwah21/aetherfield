"use client";

import Image from "next/image";
import React, { FC, useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, CustomEase, ScrollTrigger);

const AnimatedSection: FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.defaults({
      duration: 0.6,
      ease: CustomEase.create("custom", "M0,0 C0,0 0,1 1,1 "),
    });

    gsap.from(imgRef.current, {
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 70%",
        toggleActions: "play play play play",
      },
      y: "50px",
      autoAlpha: 0,
    });

    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        toggleActions: "play play play play",
      },
      autoAlpha: 0,
      y: "50px",
    });
  });
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-10 md:py-20 xl:py-30">
      <div className="flex flex-col gap-8 md:flex-row md:gap-4">
        <figure className="w-full flex-1">
          <Image
            ref={imgRef}
            src={"/Elliot Williams.png"}
            alt="Stylized blue duotone portrait of a person facing the camera with arms crossed"
            width={1488}
            height={1702}
            className="invisible w-full"
          />
        </figure>
        <div
          ref={containerRef}
          className="invisible flex flex-1 flex-col gap-6 md:justify-center md:gap-10 md:px-10 xl:gap-14 xl:px-26.25"
        >
          <span className="text-theme-200 text-5xl font-extrabold md:text-8xl">
            &quot;
          </span>
          <p className="font-radio-canada-big text-2xl leading-[100%] font-medium -tracking-[0.72px] md:text-[32px] md:-tracking-[0.96px] xl:text-[40px] xl:-tracking-[1.2px]">
            We finally moved past spreadsheets and guesswork. Now we have real
            data to guide real decisions.
          </p>
          <div className="flex flex-col gap-2">
            <p className="font-radio-canada-big text-[20px] leading-[100%] font-medium -tracking-[0.4px]">
              Elliot Williams
            </p>
            <p className="font-source-serif-pro text-theme-100 text-[18px] leading-[120%] font-normal -tracking-[0.54px] md:text-[20px] md:-tracking-[0.8px]">
              Head of Sustainability, Flux Materials
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedSection;
