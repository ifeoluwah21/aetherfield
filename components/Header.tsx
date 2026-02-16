import { type FC } from "react";
import Navigation from "./Navigation";

const Header: FC = () => {
  return (
    <header className="from-theme-400 to-theme-500 w-full bg-linear-to-b from-0% to-100%">
      <Navigation />
      <h1>Sustainability insights,</h1>
      <h2>built for business</h2>
    </header>
  );
};

export default Header;
