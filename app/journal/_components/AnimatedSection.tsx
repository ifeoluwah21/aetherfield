"use client";

import { journals } from "@/dal/journal";
import React, { FC, useRef } from "react";
import JournalCard from "./JournalCard";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(useGSAP, CustomEase);

const AnimatedSection: FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.defaults({
      duration: 0.6,
      ease: CustomEase.create("custom", "M0,0 C0,0 0,1 1,1 "),
      delay: 0.6,
    });

    gsap
      .timeline()
      .from(titleRef.current, {
        autoAlpha: 0,
        y: "50px",
      })
      .from(
        containerRef.current,
        {
          autoAlpha: 0,
          y: "80px",
        },
        "-=0.4",
      );
  });

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 pt-6 pb-4 md:pt-10 md:pb-6 xl:pt-20 xl:pb-10">
      <h1
        ref={titleRef}
        className="font-radio-canada-big invisible text-center text-2xl leading-[100%] font-medium -tracking-[0.72px] md:text-[32px] md:-tracking-[0.96px] xl:text-[40px] xl:-tracking-[1.2px]"
      >
        Latest articles
      </h1>
      <div
        ref={containerRef}
        className="invisible grid grid-cols-1 gap-20 pb-10 md:gap-x-10 md:gap-y-20 md:pb-20 xl:grid-cols-2 xl:gap-x-4 xl:gap-y-20 xl:pb-30"
      >
        {journals.map((journal, index) => (
          <JournalCard
            key={`${journal.author}-${index}`}
            title={journal.title}
            category={journal.category}
            thumbnail_alt={journal.article_thumbnail.alt}
            thumbnail_src={journal.article_thumbnail.src}
            description={journal.description}
            time_to_read={journal.time_to_read}
            slug={journal.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default AnimatedSection;
