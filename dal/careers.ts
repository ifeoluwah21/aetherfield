type JobRole = {
  title: string;
  role_type: "contract" | "part-time" | "full-time";
  location: string;
  short_description: string;
  isOpen: boolean;
};

export const jobRoles: JobRole[] = [
  {
    title: "UX Designer",
    isOpen: false,
    role_type: "contract",
    location: "San Francisco, CA",
    short_description:
      "Shape the tools that drive climate intelligence. You’ll lead cross-functional teams to build thoughtful, scalable solutions for sustainability-forward organizations.",
  },
  {
    title: "Data Scientist",
    isOpen: false,
    role_type: "full-time",
    location: "Denver, CO",
    short_description:
      "Help build the intelligence layer for climate action. You’ll turn complex sustainability data into clear, actionable insights for enterprise teams.",
  },
  {
    title: "Product Manager",
    isOpen: false,
    role_type: "part-time",
    location: "Seattle, WA",
    short_description:
      "Shape the tools that drive climate intelligence. You’ll lead cross-functional teams to build thoughtful, scalable solutions for sustainability-forward organizations.",
  },
  {
    title: "UX Designer",
    isOpen: false,
    role_type: "contract",
    location: "San Francisco, CA",
    short_description:
      "Shape the tools that drive climate intelligence. You’ll lead cross-functional teams to build thoughtful, scalable solutions for sustainability-forward organizations.",
  },
];
