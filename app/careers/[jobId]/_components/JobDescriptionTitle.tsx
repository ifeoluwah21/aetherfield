import React, { FC } from "react";

const JobDescriptionTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <h4 className="font-radio-canada-big text-[18px] font-medium -tracking-[0.36px] md:text-[20px] md:-tracking-[0.4px]">
      {title}
    </h4>
  );
};

export default JobDescriptionTitle;
