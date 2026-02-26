import React, { FC, JSX } from "react";

type ListTypeDescription = {
  isList: true;
  value: string[];
};
type ParagraphTypeDescription = {
  isList: false;
  value: string;
};

export type JobDescriptionValue =
  | ListTypeDescription
  | ParagraphTypeDescription;

const JobDescriptionValue: FC<{ jobDescription: JobDescriptionValue }> = ({
  jobDescription,
}) => {
  let content: JSX.Element;
  if (!jobDescription.isList) {
    content = (
      <p className="font-source-serif-pro text-[18px] leading-relaxed font-normal -tracking-[0.54px] md:text-[20px] md:-tracking-[0.8px]">
        {jobDescription.value}
      </p>
    );
  } else {
    content = (
      <ul className="ml-5 list-outside list-disc space-y-2">
        {jobDescription.value.map((item, index) => (
          <li
            className="font-source-serif-pro text-[18px] leading-relaxed font-normal -tracking-[0.54px] md:text-[20px] md:-tracking-[0.8px]"
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return content;
};

export default JobDescriptionValue;
