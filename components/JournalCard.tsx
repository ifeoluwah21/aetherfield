import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

type JournalCardProps = {
  thumbnail_src: string;
  thumbnail_alt: string;
  title: string;
  category: string;
  time_to_read: string;
  slug: string;
};

const JournalCard: FC<JournalCardProps> = ({
  thumbnail_src,
  thumbnail_alt,
  title,
  category,
  time_to_read,
  slug,
}) => {
  const router = useRouter();
  return (
    <article
      onClick={() => {
        router.push(`journal/${slug}`);
      }}
      className="flex flex-col gap-4 py-6 md:flex-row"
    >
      <Image
        src={thumbnail_src}
        width={335}
        height={203}
        alt={thumbnail_alt}
        className="aspect-[1.65] w-full object-cover md:w-41.25"
      />
      <div className="flex grow flex-col gap-2">
        <h4 className="font-radio-canada-big text-[18px] font-medium -tracking-[0.36px] md:text-[20px] md:-tracking-[0.4px]">
          {title}
        </h4>
        <p className="text-theme-100 flex items-center gap-2 font-mono text-sm font-normal">
          <span>{category} </span>
          <span>. </span>
          <span>{time_to_read}</span>
        </p>
      </div>
    </article>
  );
};

export default JournalCard;
