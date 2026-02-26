import React, { FC, PropsWithChildren } from "react";

const ArticleContent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <p className="font-source-serif-pro text-[18px] leading-[120%] font-normal -tracking-[0.54px] md:text-[20px] md:-tracking-[0.8px]">
      {children}
    </p>
  );
};

export default ArticleContent;
