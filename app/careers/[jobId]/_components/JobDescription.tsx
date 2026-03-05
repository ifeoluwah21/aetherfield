import { FC, PropsWithChildren } from "react";

const JobDescription: FC<PropsWithChildren> = ({ children }) => {
  return <article className="flex flex-col gap-6">{children}</article>;
};

export default JobDescription;
