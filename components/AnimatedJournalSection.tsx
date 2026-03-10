"use client";
import React, { FC, useRef } from "react";
import { Button } from "./ui/button";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import { Journal } from "@/dal/journal";
import JournalCard from "./JournalCard";

gsap.registerPlugin(useGSAP, CustomEase, ScrollTrigger);

type JournalSectionProps = {
  journals: Journal[];
};
const AnimatedJournalSection: FC<JournalSectionProps> = ({ journals }) => {
  const containerRef = useRef<HTMLElement>(null);
  const router = useRouter();

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
        {journals
          .slice(0, 3)
          .map(
            ({
              slug,
              title,
              article_thumbnail: { alt, src },
              category,
              time_to_read,
            }) => (
              <JournalCard
                key={slug}
                category={category}
                thumbnail_alt={alt}
                thumbnail_src={src}
                slug={slug}
                time_to_read={time_to_read}
                title={title}
              />
            ),
          )}
        <Button
          onClick={() => {
            router.push("journal");
          }}
          className="h-auto rounded-none p-3 md:mx-auto md:w-max"
        >
          View all articles
        </Button>
      </div>
    </section>
  );
};

export default AnimatedJournalSection;
