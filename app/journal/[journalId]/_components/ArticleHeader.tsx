import React, { FC, PropsWithChildren } from "react";

const ArticleHeader: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h3 className="font-radio-canada-big text-[18px] font-medium -tracking-[0.36px] md:text-[20px] md:-tracking-[0.4px]">
      {children}
    </h3>
  );
};

export default ArticleHeader;
