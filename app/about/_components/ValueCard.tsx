import Image from "next/image";
import React, { FC } from "react";

type ValueCardProps = {
  logo_src: string;
  logo_alt: string;
  title: string;
  value: string;
};
const ValueCard: FC<ValueCardProps> = ({
  logo_alt,
  logo_src,
  title,
  value,
}) => {
  return (
    <article className="bg-theme-300 flex flex-col gap-6 rounded-3xl p-10">
      <figure>
        <Image src={logo_src} width={42} height={42} alt={logo_alt} />
      </figure>
      <div className="flex flex-col gap-2">
        <h4 className="font-radio-canada-big text-[20px] font-medium -tracking-[0.4px]">
          {title}
        </h4>
        <p className="font-source-serif-pro text-[20px] leading-[120%] font-normal -tracking-[0.8px]">
          {value}
        </p>
      </div>
    </article>
  );
};

export default ValueCard;
