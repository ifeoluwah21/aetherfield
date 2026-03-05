import React, { FC, PropsWithChildren } from "react";

const ArticleCard: FC<PropsWithChildren> = ({ children }) => {
  return <article className="flex flex-col gap-6">{children}</article>;
};

export default ArticleCard;
