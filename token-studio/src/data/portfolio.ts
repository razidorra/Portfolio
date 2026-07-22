export interface TextItem {
  title: string;
  text: string;
}

export interface PortfolioStat {
  value: string;
  label: string;
}

export interface ContactLink {
  label: string;
  href: string;
  icon: "mail" | "link" | "code" | "document";
  external?: boolean;
  download?: boolean;
}

export const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Git & GitHub",
  "Node.js",
  "MongoDB",
  "SQL",
];

export const portfolioStats: PortfolioStat[] = [
  { value: "Frontend", label: "Responsive interfaces" },
  { value: "Full Stack", label: "Node.js and data fundamentals" },
  { value: "Clean UI", label: "Accessible, practical layouts" },
];

export const strengths: TextItem[] = [
  {
    title: "Responsive Development",
    text: "I build layouts that remain clear and usable across desktop, tablet, and mobile.",
  },
  {
    title: "Readable Code",
    text: "I value focused components, consistent naming, and structures that make future changes easier.",
  },
  {
    title: "Practical Design Sense",
    text: "I use spacing, hierarchy, contrast, and simple interactions to make interfaces easy to understand.",
  },
];

export const processSteps: TextItem[] = [
  {
    title: "Understand",
    text: "I clarify the goal, content, and user journey before choosing a layout or technology.",
  },
  {
    title: "Build",
    text: "I turn the plan into responsive, reusable components with clear typography and structure.",
  },
  {
    title: "Refine",
    text: "I review accessibility, responsiveness, links, and technical quality before sharing the result.",
  },
];

export const coreSkills = [
  "React & TypeScript",
  "Responsive Design",
  "Accessible UI",
  "Node.js Fundamentals",
];

export const contactLinks: ContactLink[] = [
  {
    label: "dorra.razi@gmail.com",
    href: "mailto:dorra.razi@gmail.com",
    icon: "mail",
  },
  {
    label: "linkedin.com/in/Razidorra",
    href: "https://linkedin.com/in/Razidorra",
    icon: "link",
    external: true,
  },
  {
    label: "github.com/razidorra",
    href: "https://github.com/razidorra",
    icon: "code",
    external: true,
  },
  {
    label: "Download CV",
    href: `${import.meta.env.BASE_URL}updated-CV.pdf`,
    icon: "document",
    download: true,
  },
];
