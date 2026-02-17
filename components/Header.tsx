import { type FC } from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";

const Header: FC = () => {
  return (
    <header className="from-theme-400 to-theme-500 w-full bg-linear-to-b from-0% to-100%">
      <Navigation />
      <Hero />
    </header>
  );
};

export default Header;
