"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { FC } from "react";

type JournalCardProps = {
  thumbnail_src: string;
  thumbnail_alt: string;
  title: string;
  category: string;
  time_to_read: string;
  description: string;
  slug: string;
};

const JournalCard: FC<JournalCardProps> = ({
  thumbnail_src,
  thumbnail_alt,
  title,
  category,
  time_to_read,
  description,
  slug,
}) => {
  const router = useRouter();
  return (
    <article
      onClick={() => {
        router.push(`/journal/${slug}`);
      }}
      className="flex flex-col gap-5 hover:cursor-pointer"
    >
      <div className="aspect-[1.72] w-full overflow-y-hidden">
        <Image
          src={thumbnail_src}
          alt={thumbnail_alt}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-radio-canada-big text-[18px] leading-[100%] font-medium -tracking-[0.36px] md:text-[20px] md:-tracking-[0.4px]">
            {title}
          </h3>
          <p className="text-theme-100 flex items-center gap-2 font-mono text-sm font-normal">
            <span>{category} </span>
            <span>. </span>
            <span>{time_to_read}</span>
          </p>
        </div>
        <p className="font-source-serif-pro text-[18px] leading-[120%] font-normal -tracking-[0.54px] md:text-[20px] md:-tracking-[0.8px]">
          {description}
        </p>
      </div>
    </article>
  );
};

export default JournalCard;
