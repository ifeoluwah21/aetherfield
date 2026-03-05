"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { FC, useRef } from "react";
import ValueCard from "./ValueCard";
import EmployeeContact from "./EmployeeContact";
import { Employee } from "@/dal/employee";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type AboutPageProps = {
  employees: Employee[];
};

gsap.registerPlugin(useGSAP, CustomEase, ScrollTrigger);

const AnimatedAboutPage: FC<AboutPageProps> = ({ employees }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const founderImgRef = useRef<HTMLImageElement>(null);
  const founderStoryRef = useRef<HTMLDivElement>(null);
  const teamTitleRef = useRef<HTMLHeadingElement>(null);
  const teamListRef = useRef<HTMLTableElement>(null);

  useGSAP(() => {
    gsap.defaults({
      duration: 0.6,
      ease: CustomEase.create("custom", "M0,0 C0,0 0,1 1,1 "),
    });
    const tl = gsap.timeline();

    tl.from(imgRef.current, {
      autoAlpha: 0,
      y: "80px",
    }).from(
      containerRef.current,
      {
        autoAlpha: 0,
        y: "80px",
      },
      "-=0.2",
    );
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play play play play",
      },
      autoAlpha: 0,
      y: "50px",
    });
    gsap.from(valuesRef.current, {
      scrollTrigger: {
        trigger: valuesRef.current,
        start: "top 80%",
        toggleActions: "play play play play",
      },
      autoAlpha: 0,
      y: "50px",
    });
    gsap.from(founderImgRef.current, {
      scrollTrigger: {
        trigger: founderImgRef.current,
        start: "top 80%",
        toggleActions: "play play play play",
      },
      autoAlpha: 0,
      y: "80px",
    });
    gsap.from(founderStoryRef.current, {
      scrollTrigger: {
        trigger: founderStoryRef.current,
        start: "top 80%",
        toggleActions: "play play play play",
      },
      autoAlpha: 0,
      y: "80px",
    });
    gsap.from(teamTitleRef.current, {
      scrollTrigger: {
        trigger: teamTitleRef.current,
        start: "top 80%",
        toggleActions: "play play play play",
      },
      autoAlpha: 0,
      y: "80px",
    });
    gsap.from(teamListRef.current, {
      scrollTrigger: {
        trigger: teamListRef.current,
        start: "top 80%",
        toggleActions: "play play play play",
      },
      autoAlpha: 0,
      y: "80px",
    });
  });
  return (
    <>
      <header className="mx-auto flex max-w-7xl flex-col gap-8 md:gap-20 xl:flex-row">
        <figure className="xl:flex-1">
          <Image
            ref={imgRef}
            src={"/about-hero.svg"}
            alt={
              "Abstracted user interface forecasting a 16% off target for 2027 emissions goal alongside an image of a mossy tree on top of a light blue gradient background"
            }
            height={320}
            width={375}
            className="invisible w-full"
          />
        </figure>
        <article
          ref={containerRef}
          className="invisible flex flex-col gap-8 px-5 md:gap-14 md:pr-26.25 md:pl-16 xl:flex-1 xl:justify-center"
        >
          <div className="flex flex-col gap-4">
            <h1 className="font-source-serif-pro text-theme-100 text-[18px] leading-[1.2] font-normal -tracking-[0.54px] md:text-[20px] md:-tracking-[0.8px]">
              Our mission
            </h1>
            <p className="font-radio-canada-big text-2xl font-medium -tracking-[0.72px] md:text-[32px] md:-tracking-[0.96px]">
              Climate action starts with better information. We help
              organizations turn complex data into measurable, meaningful
              change.
            </p>
          </div>
          <Button className="h-auto w-full rounded-none p-4 md:w-max">
            Meet the team
          </Button>
        </article>
      </header>
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-10 md:gap-10 md:pt-20 md:pb-30 xl:pt-30 xl:pb-40">
        <h2
          ref={titleRef}
          className="font-radio-canada-big invisible text-center text-2xl font-medium -tracking-[0.72px] md:text-[32px] md:-tracking-[0.96px] xl:text-[40px] xl:-tracking-[1.2px]"
        >
          Our values
        </h2>
        <div
          ref={valuesRef}
          className="invisible flex flex-col gap-4 xl:flex-row"
        >
          <ValueCard
            logo_src={"/Type-Pie chart.svg"}
            value={`We believe better decisions start with better data-measured,
                      visible, and trust.`}
            logo_alt={`clarity symbol`}
            title={`Clarity driven action`}
          />
          <ValueCard
            logo_src={"/Type-System.svg"}
            value={` We build tools that help teams connect the dots between
                      operations, impact, and accountability.`}
            logo_alt={`clarity symbol`}
            title={`Sustainability is a systems problem`}
          />
          <ValueCard
            logo_src={"/Type-Up.svg"}
            value={`We support real-world mommentum-helping organizations move from
                      ambition to measureable change.`}
            logo_alt={`clarity symbol`}
            title={`Progress over perfection`}
          />
        </div>
      </section>
      <section className="mx-auto w-full max-w-7xl px-5 pb-10 md:pb-20 xl:pb-30">
        <article className="flex flex-col gap-4 md:flex-row">
          <figure className="md:grow md:basis-1/2">
            <Image
              ref={founderImgRef}
              src={"/eunji_park_edit.svg"}
              alt="Stylized blue duotone portrait of a woman with long hair facing slightly backward"
              height={378}
              width={335}
              className="invisible h-full w-full object-cover"
            />
          </figure>
          <div
            ref={founderStoryRef}
            className="invisible flex flex-col gap-8 md:basis-1/2 md:justify-center md:gap-14 md:px-10 xl:px-26.25"
          >
            <div className="flex flex-col gap-2">
              <h4 className="font-source-serif-pro text-theme-100 text-[18px] leading-[1.2] font-normal -tracking-[0.54px] md:text-[20px] md:-tracking-[0.8px]">
                Founder&apos;s story
              </h4>
              <p className="font-radio-canada-big text-[32px] font-medium -tracking-[0.96px] md:text-[48px] md:-tracking-[1.44px] xl:text-[56px] xl:-tracking-[1.68px]">
                Eunji Park
              </p>
            </div>
            <p className="font-source-serif-pro text-[18px] leading-[1.2] font-normal -tracking-[0.54px] md:text-[20px] md:-tracking-[0.8px]">
              Eunji founded Aetherfield with one goal: to help companies take
              climate action without waiting for a perfect plan. With a
              background in environmental systems and software design, she’s
              spent the past decade building tools that turn impact goals into
              real-world outcomes. She still insists on biking to every investor
              meeting.
            </p>
          </div>
        </article>
      </section>
      <section className="bg-theme-300">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-10 md:gap-16 md:py-20 xl:py-30">
          <h2
            ref={teamTitleRef}
            className="font-radio-canada-big invisible text-[32px] font-medium -tracking-[0.96px] md:text-[48px] md:-tracking-[1.44px] xl:text-[56px] xl:-tracking-[1.68px]"
          >
            Meet the team
          </h2>
          <table ref={teamListRef} className="invisible w-full">
            <thead className="sr-only md:not-sr-only">
              <tr className="font-mono text-[14px]">
                <th className="table-cell pb-2.5 text-start font-normal">
                  Name
                </th>
                <th className="table-cell pb-2.5 text-start font-normal">
                  Title
                </th>
                <th className="table-cell pb-2.5 text-end font-normal">
                  Contact
                </th>
              </tr>
            </thead>
            <tbody className="divide-theme-200 border-theme-200 divide-y border-t border-b">
              {employees.map(({ slug, job_title, email_address, name }) => (
                <EmployeeContact
                  key={slug}
                  title={job_title}
                  name={name}
                  contact={email_address}
                />
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-5 py-10 md:py-20 xl:py-30">
        <h2 className="font-radio-canada-big text-center text-2xl font-medium -tracking-[0.72px] md:text-[32px] md:-tracking-[0.96px] xl:text-[40px] xl:-tracking-[1.2px]">
          We&apos;re hiring! Want to join the team?
        </h2>
        <Button className="h-auto w-max rounded-none p-4">
          View open roles
        </Button>
      </section>
    </>
  );
};

export default AnimatedAboutPage;
