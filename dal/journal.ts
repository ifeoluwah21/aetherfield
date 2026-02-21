type Journal = {
  title: string;
  author: string;
  category: string;
  time_to_read: string;
  article_thumbnail: { src: string; alt: string };
  description: string;
};

import fabric_blue_sky from "../public/floating-fabric-blue-sky.svg";
import ferns_mossy_rock_closeup from "../public/ferns-mossy-rock-closeup.svg";
import blue_glacier_texture_swirls from "../public/blue-glacier-texture-swirls.svg";
import wind_turbines_sunset_silhouette from "../public/wind-turbines-sunset-silhouette.svg";
import mountain_lake_peak_scenic from "../public/mountain-lake-peak-scenic.svg";
import hand_mirror_reflection_field from "../public/hand-mirror-reflection-field.svg";

export const journals: Journal[] = [
  {
    title: "How to Build a Climate-Ready Data Stack",
    author: "Lana Terra",
    category: "Insights",
    time_to_read: "4 mins",
    article_thumbnail: {
      src: fabric_blue_sky,
      alt: "Sheer white fabric billowing gently in a bright blue sky",
    },
    description:
      "A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows.",
  },
  {
    title: "Sustainability Isn’t a Side Project: Making Impact Operational",
    author: "Gail Force",
    category: "Strategy",
    time_to_read: "7 mins",
    article_thumbnail: {
      src: ferns_mossy_rock_closeup,
      alt: "Close-up of moss and ferns growing on a sloped rock surface",
    },
    description:
      "Why climate goals belong in your core roadmap—not just in the annual ESG report.",
  },
  {
    title: "Inside the Aetherfield Model: How We Turn Data Into Action",
    author: "Theo Retical",
    category: "Insights",
    time_to_read: "5 mins",
    article_thumbnail: {
      src: blue_glacier_texture_swirls,
      alt: "Blurred silhouette of a person with wind turbines in the background at sunset",
    },
    description:
      "A behind-the-scenes look at our platform logic, system architecture, and sustainability reasoning.",
  },
  {
    title: "From Spreadsheets to Systems: The Evolution of Climate Reporting",
    author: "Dash Bordman",
    category: "Tooling",
    time_to_read: "6 mins",
    article_thumbnail: {
      src: wind_turbines_sunset_silhouette,
      alt: "Textured swirls of shimmering blue resembling ice or water patterns",
    },
    description:
      "Why legacy tools aren’t enough—and what the next generation of reporting looks like.",
  },
  {
    title: "Carbon Accounting: Myths, Models, and Must-Haves",
    author: "AI Gorithm",
    category: "Tooling",
    time_to_read: "6 mins",
    article_thumbnail: {
      src: mountain_lake_peak_scenic,
      alt: "Jagged mountain peak reflected in a calm lake with blue sky above",
    },
    description:
      "Debunking common assumptions and offering a framework for getting it right.",
  },
  {
    title: "Seeing Clearly: Designing Feedback Loops for Sustainable Growth",
    author: "Greta Watt",
    category: "Strategy",
    time_to_read: "4 mins",
    article_thumbnail: {
      src: hand_mirror_reflection_field,
      alt: "Hand holding a mirror reflecting the sky, set against a grassy field",
    },
    description:
      "Building responsive systems that keep sustainability strategy adaptive and actionable.",
  },
];
