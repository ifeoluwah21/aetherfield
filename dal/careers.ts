import { type JobDescriptionValue } from "@/app/careers/[jobId]/_components/JobDescriptionValue";

export type JobRole = {
  title: string;
  role_type: "contract" | "part-time" | "full-time";
  location: string;
  short_description: string;
  isOpen: boolean;
  slug: string;
  job_description: {
    company_description: JobDescriptionValue;
    about_the_role: JobDescriptionValue;
    requirements: JobDescriptionValue;
    benefits: JobDescriptionValue;
  };
};

export const jobRoles: JobRole[] = [
  {
    title: "UX Designer",
    slug: "ux-designer",
    isOpen: false,
    role_type: "contract",
    location: "San Francisco, CA",
    short_description:
      "Shape the tools that drive climate intelligence. You’ll lead cross-functional teams to build thoughtful, scalable solutions for sustainability-forward organizations.",
    job_description: {
      company_description: {
        isList: false,
        value: `At Aetherfield, we build software that empowers companies to lead with climate accountability. Our platform helps sustainability and operations teams make sense of complex environmental data—transforming emissions, waste, and energy metrics into measurable, meaningful action. We’re a mission-driven team of technologists, designers, and scientists working to accelerate the shift toward a low-carbon future.`,
      },
      about_the_role: {
        isList: false,
        value: `As a UX Designer at Aetherfield, you’ll help turn raw climate data into clear, confident decision-making tools. You’ll design end-to-end experiences that make complex systems feel approachable—shaping everything from data visualization to system flows to interaction patterns. Your work will help enterprise users feel informed, empowered, and aligned in their climate action.`,
      },
      requirements: {
        isList: true,
        value: [
          `3+ years of experience designing for web-based products or platforms`,
          `Portfolio that demonstrates systems thinking, design craft, and user empathy`,
          `Experience designing data-dense interfaces or enterprise tools`,
          `Strong skills in Figma (or equivalent), plus familiarity with accessible design practices`,
          `Ability to partner closely with product, data, and engineering teams`,
          `Curiosity about climate systems and care for usability in high-stakes workflows`,
        ],
      },
      benefits: {
        isList: false,
        value: `This is a contract position and does not include employee benefits. However, you’ll work closely with our core team, have flexible hours, and contribute meaningfully to high-impact climate work alongside mission-driven collaborators.`,
      },
    },
  },
  {
    title: "Data Scientist",
    isOpen: false,
    slug: "data-scientist",
    role_type: "full-time",
    location: "Denver, CO",
    short_description:
      "Help build the intelligence layer for climate action. You’ll turn complex sustainability data into clear, actionable insights for enterprise teams.",
    job_description: {
      company_description: {
        isList: false,
        value: `At Aetherfield, we build software that empowers companies to lead with climate accountability. Our platform helps sustainability and operations teams make sense of complex environmental data—transforming emissions, waste, and energy metrics into measurable, meaningful action. We’re a mission-driven team of technologists, designers, and scientists working to accelerate the shift toward a low-carbon future.`,
      },
      about_the_role: {
        isList: false,
        value: `As a Data Scientist at Aetherfield, you’ll help shape the analytical engine behind our platform. You’ll collaborate with product and engineering teams to design models that interpret environmental impact, forecast future trends, and uncover actionable insights for our customers. Your work will directly influence how companies plan, report, and act on their sustainability strategies.`,
      },
      requirements: {
        isList: true,
        value: [
          `3+ years of experience in data science or applied analytics (Python, SQL, etc.)`,
          `Experience working with climate, sustainability, or supply chain datasets is a plus`,
          `Strong foundation in statistics and data modeling`,
          `Ability to communicate complex insights clearly to both technical and non-technical teams`,
          `Curiosity, clarity, and care in how you approach messy data`,
          `Passion for solving real-world problems with purpose and precision`,
        ],
      },
      benefits: {
        isList: true,
        value: [
          `Competitive salary and equity options`,
          `Flexible, hybrid work environment`,
          `Generous PTO and paid volunteer days`,
          `Annual sustainability stipend`,
          `Team offsites and climate-focused retreats`,
          `A mission-first culture that values clarity, impact, and integrity`,
        ],
      },
    },
  },
  {
    title: "Product Manager",
    isOpen: false,
    slug: "product-manager",
    role_type: "part-time",
    location: "Seattle, WA",
    short_description:
      "Shape the tools that drive climate intelligence. You’ll lead cross-functional teams to build thoughtful, scalable solutions for sustainability-forward organizations.",
    job_description: {
      company_description: {
        isList: false,
        value: `At Aetherfield, we build software that empowers companies to lead with climate accountability. Our platform helps sustainability and operations teams make sense of complex environmental data—transforming emissions, waste, and energy metrics into measurable, meaningful action. We’re a mission-driven team of technologists, designers, and scientists working to accelerate the shift toward a low-carbon future.`,
      },
      about_the_role: {
        isList: false,
        value: `As a Product Manager at Aetherfield, you’ll define and drive the roadmap for climate intelligence tools used by leading sustainability teams. You’ll work closely with engineering, design, and customers to turn complex workflows into intuitive, impactful solutions. From shaping product strategy to refining launch details, your work will guide how enterprises operationalize their climate goals.`,
      },
      requirements: {
        isList: true,
        value: [
          `5+ years of experience in product management for SaaS or data platforms`,
          `Strong customer instincts with a track record of shipping thoughtful, user-centered products`,
          `Ability to translate complex problems into clear product requirements`,
          `Familiarity with sustainability, climate tech, or enterprise reporting systems is a plus`,
          `Excellent collaboration and communication skills`,
          `Drive to work on mission-aligned technology that moves the needle`,
        ],
      },
      benefits: {
        isList: true,
        value: [
          `Competitive salary and equity options`,
          `Flexible, hybrid work environment`,
          `Generous PTO and paid volunteer days`,
          `Annual sustainability stipend`,
          `Team offsites and climate-focused retreats`,
          `A mission-first culture that values clarity, impact, and integrity`,
        ],
      },
    },
  },
  {
    title: "Design Engineer",
    slug: "design-engineer",
    isOpen: false,
    role_type: "contract",
    location: "San Francisco, CA",
    short_description:
      "Shape the tools that drive climate intelligence. You’ll lead cross-functional teams to build thoughtful, scalable solutions for sustainability-forward organizations.",
    job_description: {
      company_description: {
        isList: false,
        value: `At Aetherfield, we build software that empowers companies to lead with climate accountability. Our platform helps sustainability and operations teams make sense of complex environmental data—transforming emissions, waste, and energy metrics into measurable, meaningful action. We’re a mission-driven team of technologists, designers, and scientists working to accelerate the shift toward a low-carbon future.`,
      },
      about_the_role: {
        isList: false,
        value: `As a Data Scientist at Aetherfield, you’ll help shape the analytical engine behind our platform. You’ll collaborate with product and engineering teams to design models that interpret environmental impact, forecast future trends, and uncover actionable insights for our customers. Your work will directly influence how companies plan, report, and act on their sustainability strategies.`,
      },
      requirements: {
        isList: true,
        value: [
          `3+ years of experience in desgin engineer`,
          `Experience working with climate, sustainability, or supply chain datasets is a plus`,
          `Strong foundation in statistics and data modeling`,
          `Ability to communicate complex insights clearly to both technical and non-technical teams`,
          `Curiosity, clarity, and care in how you approach messy data`,
          `Passion for solving real-world problems with purpose and precision`,
        ],
      },
      benefits: {
        isList: true,
        value: [
          `Competitive salary and equity options`,
          `Flexible, hybrid work environment`,
          `Generous PTO and paid volunteer days`,
          `Annual sustainability stipend`,
          `Team offsites and climate-focused retreats`,
          `A mission-first culture that values clarity, impact, and integrity`,
        ],
      },
    },
  },
];
