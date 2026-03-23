"use client";
import React, { FC, useRef } from "react";
import Image from "next/image";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, CustomEase, ScrollTrigger);

const Header: FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  useGSAP(() => {
    gsap.defaults({
      duration: 0.6,
      ease: CustomEase.create("custom", "M0,0 C0,0 0,1 1,1 "),
    });
    gsap.from(imgRef.current, {
      autoAlpha: 0,
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 70%",
      },
      y: "80px",
    });
  });

  return (
    <header className="mx-auto w-full max-w-7xl px-5">
      <figure>
        <Image
          ref={imgRef}
          src={"/journal-hero.png"}
          width={1520}
          height={589}
          alt="Aetherfield Journal stamp graphic with the words tech, earth, and data around a diamond frame"
          className="invisible"
        />
      </figure>
    </header>
  );
};

export default Header;
