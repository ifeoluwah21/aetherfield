type ArticleContent = {
  header: string;
  content: string;
};
type Journal = {
  title: string;
  author: string;
  category: string;
  time_to_read: string;
  article_thumbnail: { src: string; alt: string };
  description: string;
  slug: string;
  article_content: ArticleContent[];
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
    slug: `how-to-build-a-climate-ready-data-stack`,
    author: "Lana Terra",
    category: "Insights",
    time_to_read: "4 mins",
    article_thumbnail: {
      src: fabric_blue_sky,
      alt: "Sheer white fabric billowing gently in a bright blue sky",
    },
    description:
      "A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows.",
    article_content: [
      {
        header: "Built for Another Era",
        content: `Most data infrastructures were built to optimize for sales, user growth, or cost—not carbon. This creates friction when sustainability teams try to source emissions data from systems that weren’t designed to capture it. Without foundational visibility, even basic reporting becomes a manual, error-prone task. The result? Delays, duplications, and disconnects.`,
      },
      {
        header: "Bridging the Gaps",
        content:
          "Emissions data lives everywhere—and nowhere. From procurement software to building sensors, critical signals are often siloed across vendors, formats, or departments. The first step to a climate-ready stack is connection: mapping where relevant data lives, how it’s structured, and where the friction points are in accessing it consistently.",
      },
      {
        header: "Stack With Strategy",
        content: `A modern climate stack isn’t just a bundle of tools—it’s an integrated system that mirrors how your business actually operates. This means prioritizing interoperability, aligning metrics across platforms, and investing in foundational data governance. Tools alone won’t solve emissions blind spots—strategy will.`,
      },
      {
        header: "Bake in Flexibility",
        content: `Regulatory frameworks, emissions factors, and supplier data are constantly evolving. Your data stack should too. That means designing for modularity, version control, and extensibility. Future-proofing your system is less about predicting what’s next and more about building with change in mind.`,
      },
      {
        header: "From Stack to Story",
        content: `At the end of the day, data infrastructure is only valuable if it drives action. A climate-ready stack enables teams to monitor progress, identify trade-offs, and make informed decisions at speed. With the right foundations in place, sustainability becomes more than a report—it becomes a capability.`,
      },
    ],
  },
  {
    title: "Sustainability Isn’t a Side Project: Making Impact Operational",
    slug: "sustainability isnt-a-side-project-making-impact-operational",
    author: "Gail Force",
    category: "Strategy",
    time_to_read: "7 mins",
    article_thumbnail: {
      src: ferns_mossy_rock_closeup,
      alt: "Close-up of moss and ferns growing on a sloped rock surface",
    },
    description:
      "Why climate goals belong in your core roadmap—not just in the annual ESG report.",
    article_content: [
      {
        header: `The Risk of Isolation`,
        content: `When sustainability is framed as a special project, it stays optional. It doesn’t scale, and it rarely survives resource cuts. Real impact demands more than executive sponsorship or a glossy strategy deck—it requires integration into the systems that run the business.
`,
      },
      {
        header: "Connect to Core Workflows",
        content: `The most successful sustainability programs live inside decision-making, not adjacent to it. That means embedding carbon data in procurement reviews, emissions factors in product roadmaps, and impact metrics in business KPIs. Alignment isn’t just helpful—it’s how things get done.`,
      },
      {
        header: "Mind the Gaps",
        content: `Even teams with good intentions can fall into operational gaps. Sustainability may be owned by one team, but its success hinges on others—like finance, legal, ops, and product—adopting the same standards and workflows. Clear roles, shared tooling, and open feedback loops close the gap between ambition and execution.`,
      },
      {
        header: "Systems Over Sprints",
        content: `Impact doesn’t come from one-off campaigns. It comes from systems that make the right choice the easy choice—again and again. Whether through automation, governance, or smart defaults, sustainability needs to show up where decisions are made, not just where reports are written.`,
      },
      {
        header: "Make It Stick",
        content: `Operationalizing sustainability means designing for durability. It means building programs that don’t require daily heroics to sustain and that evolve with the business over time. When impact becomes part of how work works, momentum follows.`,
      },
    ],
  },
  {
    title: "Inside the Aetherfield Model: How We Turn Data Into Action",
    slug: "inside-the-aetherfield-model-how-we-turn-data-into-action",
    author: "Theo Retical",
    category: "Insights",
    time_to_read: "5 mins",
    article_thumbnail: {
      src: blue_glacier_texture_swirls,
      alt: "Blurred silhouette of a person with wind turbines in the background at sunset",
    },
    description:
      "A behind-the-scenes look at our platform logic, system architecture, and sustainability reasoning.",
    article_content: [
      {
        header: "From Signal to Strategy",
        content: `Sustainability teams are overwhelmed with inputs—from sensor data to survey results to supplier estimates. The Aetherfield Model starts with organizing that noise into coherent signals, aligning teams around a shared understanding of what's true, what matters, and where change is possible.`,
      },
      {
        header: "Build for Real-Time Alignment",
        content: `Static reports quickly go stale. Instead, the model favors a living system of metrics, alerts, and dashboards that support decision-making in real time. That means connecting teams not just to the data—but to each other. Context travels faster when systems are designed to carry it.`,
      },
      {
        header: "Centered on Causality",
        content: `Most models focus on correlation. We focus on causality. Aetherfield maps emissions to decisions—showing not just what happened, but why. Whether it's a procurement policy driving Scope 3 emissions or a delivery route inflating Scope 1, the model surfaces cause, not just consequence.`,
      },
      {
        header: " Designed to Evolve",
        content: `Climate strategy isn’t static, and neither is the Aetherfield Model. As standards evolve and business conditions shift, the model updates to reflect new realities. This keeps teams responsive and grounded, without having to rebuild from scratch every quarter.`,
      },
      {
        header: "From Model to Momentum",
        content: `The value of a model isn’t in its elegance—it’s in what it unlocks. With Aetherfield, teams don’t just analyze—they act. When data, decisions, and direction are tightly aligned, momentum becomes measurable.`,
      },
    ],
  },
  {
    title: "From Spreadsheets to Systems: The Evolution of Climate Reporting",
    slug: "from-spreadsheets-to-systems-the-evolution-of-climate-reporting",
    author: "Dash Bordman",
    category: "Tooling",
    time_to_read: "6 mins",
    article_thumbnail: {
      src: wind_turbines_sunset_silhouette,
      alt: "Textured swirls of shimmering blue resembling ice or water patterns",
    },
    description:
      "Why legacy tools aren’t enough—and what the next generation of reporting looks like.",
    article_content: [
      {
        header: "The Trust Gap",
        content: `As reporting grew more important—to investors, regulators, and customers—the cracks began to show. Manual processes introduced errors. Inconsistent methods made year-over-year comparisons unreliable. Spreadsheets weren’t just inefficient—they undermined trust.
`,
      },
      {
        header: "Enter the Platform Era",
        content: `Modern sustainability teams are shifting to purpose-built platforms. These systems automate data ingestion, standardize calculations, and offer controls for audit-readiness. More importantly, they allow teams to focus on interpretation and strategy—not just reconciliation.`,
      },
      {
        header: "Build Once, Report Often",
        content: `The evolution isn’t just about tools—it’s about process. Strong reporting systems create reusable infrastructure: central data sources, shared assumptions, and templated disclosures. That infrastructure makes reporting faster, easier, and more resilient.`,
      },
      {
        header: "From Reporting to Readiness",
        content: `When reporting is treated as an outcome, it’s a burden. When treated as infrastructure, it becomes an advantage. Organizations with robust systems can respond to new standards, evolving regulations, and stakeholder questions with confidence—not scramble.`,
      },
    ],
  },
  {
    title: "Carbon Accounting: Myths, Models, and Must-Haves",
    slug: "carbon-accounting-myths-models-and-must-haves",
    author: "AI Gorithm",
    category: "Tooling",
    time_to_read: "6 mins",
    article_thumbnail: {
      src: mountain_lake_peak_scenic,
      alt: "Jagged mountain peak reflected in a calm lake with blue sky above",
    },
    description:
      "Debunking common assumptions and offering a framework for getting it right.",
    article_content: [
      {
        header: "The Confusion Behind the Numbers",
        content: `Carbon accounting has quickly become a cornerstone of climate strategy—but it’s also one of the most misunderstood. As organizations race to report emissions, misconceptions often lead to missteps. From overestimating data requirements to underestimating system design, many teams are navigating without a clear map. Without demystifying the process, even well-intentioned efforts can stall or steer in the wrong direction.`,
      },
      {
        header: "It's Not Just About the Math",
        content: `One persistent myth is that carbon accounting is purely a technical task. In reality, it's a cross-functional process that requires collaboration across finance, operations, procurement, and product teams. Technical accuracy matters, but organizational alignment is what makes carbon data useful—not just reportable. Treating it as a shared responsibility sets the foundation for action—not just analysis.
`,
      },
      {
        header: "There's No Universal Template",
        content: `Another common trap is the belief that a one-size-fits-all model exists. Effective carbon accounting needs to reflect your business model, industry, and maturity level. Whether you're estimating Scope 3 emissions or integrating real-time data from suppliers, the right approach balances ambition with feasibility. Customization isn’t a compromise—it’s a prerequisite for relevance.`,
      },
      {
        header: "Build a Framework That Scales",
        content: `To navigate the complexity, every team needs a framework. That includes a shared vocabulary, clear boundaries between scopes, and an agreed-upon method for prioritizing data sources. A strong model helps teams scale their efforts while maintaining credibility and auditability. Consistency across teams and time zones makes scaling possible without sacrificing integrity.`,
      },
      {
        header: "Turn Data Into Decisions",
        content: `Ultimately, carbon accounting is not just about reporting past impact—it’s about informing future decisions. With the right mindset and foundation, organizations can turn their carbon data into a strategic asset, enabling smarter trade-offs, stronger compliance, and more meaningful progress. When embedded into business rhythms, carbon data becomes not just a metric, but a driver of momentum.`,
      },
    ],
  },
  {
    title: "Seeing Clearly: Designing Feedback Loops for Sustainable Growth",
    slug: "seeing-clearly-designing-feedback-loops-for-sustainable-growth",
    author: "Greta Watt",
    category: "Strategy",
    time_to_read: "4 mins",
    article_thumbnail: {
      src: hand_mirror_reflection_field,
      alt: "Hand holding a mirror reflecting the sky, set against a grassy field",
    },
    description:
      "Building responsive systems that keep sustainability strategy adaptive and actionable.",
    article_content: [
      {
        header: "The Loop Advantage",
        content: `Progress doesn’t come from acting once—it comes from learning continuously. Feedback loops create a rhythm of observe, reflect, adjust. Without them, climate programs risk drifting off course or missing opportunities to scale what’s working.`,
      },
      {
        header: "Make Reflection Measurable",
        content: `You can’t improve what you can’t observe. Effective loops start with instrumentation—defining clear metrics, setting thresholds, and creating space to interpret results. Loops thrive when reflection is structured, not just anecdotal.`,
      },
      {
        header: "Close the Gap Between Action and Insight",
        content: `Too often, insights arrive long after decisions are made. By embedding sensors, alerts, and review rituals directly into business systems, organizations can respond in real time—not retroactively. The faster the loop, the faster the progress.`,
      },
      {
        header: "Design for participation",
        content: `Feedback loops aren’t just for analysts—they’re for everyone. Create pathways for frontline employees, customers, and partners to contribute insights. When everyone has a seat at the table, blind spots shrink and ownership grows.`,
      },
      {
        header: " Momentum Through Awareness",
        content: `Clarity fuels motivation. When teams can see the impact of their work—and where they can improve—they engage more deeply. Feedback loops don’t just optimize outcomes—they build a culture of continuous progress.`,
      },
    ],
  },
];
