import React, { FC } from "react";

import heroImg from "../../../public/journal-hero.svg";
import Image from "next/image";

const Header: FC = () => {
  return (
    <header className="mx-auto w-full max-w-7xl px-5">
      <Image
        src={heroImg}
        alt="Aetherfield Journal stamp graphic with the words tech, earth, and data around a diamond frame"
        className="w-full"
      />
    </header>
  );
};

export default Header;
