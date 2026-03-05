"use client";
import Image from "next/image";
import { useRef, type FC } from "react";
import { Button } from "./ui/button";

// GSAP animations
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(useGSAP, CustomEase);
const Hero: FC = () => {
  const contentBoxRef = useRef<HTMLDivElement>(null);
  const figureRef = useRef<HTMLElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 0.6,
        ease: CustomEase.create("custom", "M0,0 C0,0 0,1 1,1 "),
      },
    });
    tl.from(contentBoxRef.current, {
      y: 150,
      autoAlpha: 0,
    });
    tl.from(
      figureRef.current,
      {
        y: 50,
        scale: 0.5,
        autoAlpha: 0,
      },
      "-=0.4",
    );
  });
  return (
    <section className="flex flex-col items-center px-5 pt-30 md:pt-35">
      <div
        ref={contentBoxRef}
        className="invisible flex flex-col items-center gap-8"
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="">Sustainability insights,</h1>
          <h2>built for business</h2>
          <p className="text-center text-[18px] font-normal">
            Track impact, reduce emissions, and accelerate progress-with clarity
            and confidence.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 md:flex-row">
          <Button className="h-auto rounded-none p-4 font-mono text-[14px] leading-[100%]">
            Request a demo
          </Button>
          <Button className="h-auto rounded-none p-4 font-mono leading-[100%] text-[14pxpx]">
            Explore the platform
          </Button>
        </div>
      </div>
      <figure
        ref={figureRef}
        className="invisible relative top-20 md:top-45.25 xl:top-57.25"
      >
        <Image
          src={"/Hero-image.svg"}
          alt="Hero image"
          width={960}
          height={608}
          className="max-w-83.5 md:max-w-190 xl:max-w-240"
        />
      </figure>
    </section>
  );
};

export default Hero;
