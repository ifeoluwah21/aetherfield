"use client";
import { useState, type FC } from "react";

import { Button } from "@/components/ui/button";
import { Minus, MoveRight, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navigation: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`sticky z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 transition-colors duration-75 ease-linear ${isMenuOpen ? "bg-white" : ""} `}
    >
      <Image src={"/Logo.svg"} width={122} height={20} alt="Aetherfield logo" />
      <Button
        aria-expanded={isMenuOpen}
        aria-label="toggle navbar"
        aria-controls="navbarDropdown"
        variant="ghost"
        className="size-8 hover:bg-transparent md:hidden"
        onClick={() => {
          setIsMenuOpen((prev) => !prev);
        }}
      >
        {!isMenuOpen ? (
          <Plus className="size-7" />
        ) : (
          <Minus className="size-7" />
        )}
      </Button>
      <nav aria-label="main" className="hidden md:block">
        <ul className="flex items-center gap-5">
          <li>
            <Link
              href="/"
              className="transition-colors duration-100 hover:text-black/50"
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              href="/journal"
              className="transition-colors duration-100 hover:text-black/50"
            >
              Journal
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="transition-colors duration-100 hover:text-black/50"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/careers"
              className="transition-colors duration-100 hover:text-black/50"
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center justify-between gap-2 transition-colors duration-100 hover:text-black/50"
            >
              <span>Get started</span>
              <MoveRight />
            </Link>
          </li>
        </ul>
      </nav>

      <nav
        aria-label="mobile-menu"
        className={`right-0 left-0 bg-white md:hidden ${isMenuOpen ? "block" : "hidden"} absolute top-full`}
      >
        <ul className="divide-theme-200 flex flex-col justify-center divide-y px-5 pb-5">
          <li>
            <Link
              href={"/"}
              className="font-radio-canada-big block py-6 text-[40px] font-medium"
              onNavigate={() => {
                setIsMenuOpen((prev) => !prev);
              }}
            >
              Product
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href={"/journal"}
              onNavigate={() => {
                setIsMenuOpen((prev) => !prev);
              }}
              className="font-radio-canada-big block py-6 text-[40px] font-medium"
            >
              Journal
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              onNavigate={() => {
                setIsMenuOpen((prev) => !prev);
              }}
              className="font-radio-canada-big block py-6 text-[40px] font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={"/careers"}
              onNavigate={() => {
                setIsMenuOpen((prev) => !prev);
              }}
              className="font-radio-canada-big block py-6 text-[40px] font-medium"
            >
              Careers
            </Link>
          </li>
          <li>
            <Button className="my-6 flex h-auto w-full items-center justify-center gap-3 rounded-none p-4 font-mono text-[20px] leading-[100%]">
              <span>Get started</span>
              <MoveRight />
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
