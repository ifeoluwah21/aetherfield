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
        At Aetherfield, we build software that empowers companies to lead with
        climate accountability. Our platform helps sustainability and operations
        teams make sense of complex environmental data—transforming emissions,
        waste, and energy metrics into measurable, meaningful action. We’re a
        mission-driven team of technologists, designers, and scientists working
        to accelerate the shift toward a low-carbon future.
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
