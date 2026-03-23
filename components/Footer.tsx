import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-theme-700 flex flex-col">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 p-5 pt-10 md:gap-5">
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
          <nav>
            <ul className="text-theme-800 flex flex-wrap items-center justify-center gap-4 md:gap-5">
              <li>
                <Link
                  href={"/"}
                  className="hover:text-theme-800/50 text-[18px] transition-colors duration-100"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="hover:text-theme-800/50 text-[18px] transition-colors duration-100"
                >
                  Journal
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="hover:text-theme-800/50 text-[18px] transition-colors duration-100"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="hover:text-theme-800/50 text-[18px] transition-colors duration-100"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="hover:text-theme-800/50 text-[18px] transition-colors duration-100"
                >
                  Get started
                </Link>
              </li>
            </ul>
          </nav>

          <p className="text-theme-800 font-source-serif-pro leading-[1.2]">
            &copy;2025 . All rights reserved
          </p>
        </div>
        <figure>
          <Image
            src={"/footer-image.png"}
            alt="decorative"
            width={760}
            height={280}
            className="max-h-70 w-full object-cover"
          />
        </figure>
        <figure>
          <Image
            src={"/footer-logo.svg"}
            alt="Aetherfield company logo"
            width={760}
            height={125}
            className="w-full"
          />
        </figure>
      </div>
    </footer>
  );
};

export default Footer;
