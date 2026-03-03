import React, { FC } from "react";
import { employees } from "@/dal/employee";
import AnimatedAboutPage from "./_components/AnimatedAboutPage";

const AboutPage: FC = () => {
  return (
    <main className="grow">
      <AnimatedAboutPage employees={employees} />
    </main>
  );
};

export default AboutPage;
