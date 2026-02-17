import { type FC } from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";

const Header: FC = () => {
  return (
    <header className="from-theme-400 to-theme-500 mb-20 w-full bg-linear-to-b from-0% to-100% md:mb-45.25 xl:mb-57.25">
      <Navigation />
      <Hero />
    </header>
  );
};

export default Header;
