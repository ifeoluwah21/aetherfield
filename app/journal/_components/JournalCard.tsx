"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import type { FC } from "react";

type JournalCardProps = {
  thumbnail_src: StaticImageData;
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
  return (
    <Link href={`/journal/${slug}`} className="group hover:cursor-pointer">
      <article className="flex flex-col gap-5">
        <div className="aspect-[1.72] w-full overflow-y-hidden">
          <Image
            src={thumbnail_src}
            alt={thumbnail_alt}
            width={1024}
            height={1024}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="font-radio-canada-big text-[18px] leading-[100%] font-medium -tracking-[0.36px] transition-colors duration-100 group-hover:text-black/50 md:text-[20px] md:-tracking-[0.4px]">
              {title}
            </h3>
            <p className="text-theme-100 group-hover:text-theme-100/50 flex items-center gap-2 font-mono text-sm font-normal transition-colors duration-100">
              <span>{category} </span>
              <span>. </span>
              <span>{time_to_read}</span>
            </p>
          </div>
          <p className="font-source-serif-pro text-[18px] leading-[120%] font-normal -tracking-[0.54px] transition-colors duration-100 group-hover:text-black/50 md:text-[20px] md:-tracking-[0.8px]">
            {description}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default JournalCard;
