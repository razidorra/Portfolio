export type ProjectStatus = "published" | "github" | "learning";

export interface Project {
  id: string;
  title: string;
  stack: string;
  category: "frontend" | "full stack";
  status: ProjectStatus;
  text: string;
  group: "applied" | "foundations";
  featured?: boolean;
  image?: string;
  imageAlt?: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudy?: {
    problem: string;
    approach: string;
    result: string;
  };
}

export const projectStatusLabels: Record<ProjectStatus, string> = {
  published: "Published project",
  github: "Source available",
  learning: "Learning project",
};

export const projects: Project[] = [
  {
    id: "raaji-baluch-blog",
    title: "Raaji Baluch Blog",
    stack: "React, Vite, Express, Clerk",
    category: "full stack",
    status: "github",
    group: "applied",
    text: "Structured a community publishing experience around clear reading and participation flows, while keeping authenticated actions separate from public content.",
    featured: true,
    image: "raaji-baluch-blog-home.png",
    imageAlt: "Homepage of the Raaji Baluch community blog",
    githubUrl: "https://github.com/razidorra/Blog",
    caseStudy: {
      problem: "A community blog needs to make stories easy to discover while protecting the actions that change content.",
      approach: "I separated the responsive React interface from Express data routes and used Clerk for authentication, keeping reading, commenting, and account states understandable.",
      result: "The project delivers a working foundation for posts, comments, video content, and authenticated participation in one consistent experience.",
    },
  },
  {
    id: "holo-mini",
    title: "Holo Mini",
    stack: "HTML, CSS, JavaScript",
    category: "frontend",
    status: "published",
    group: "applied",
    text: "Turned a static product catalogue into a connected shopping flow, coordinating search, category filters, previews, cart quantities, and a simulated checkout without a framework.",
    featured: true,
    image: "holomini-home.png",
    imageAlt: "Holo Mini smartwatch store landing page",
    liveUrl: "https://razidorra.github.io/holomini/",
    githubUrl: "https://github.com/razidorra/holomini",
  },
  {
    id: "lifestyle-quiz",
    title: "Lifestyle Quiz",
    stack: "HTML, CSS, JavaScript",
    category: "frontend",
    status: "published",
    group: "foundations",
    text: "Built the question flow in vanilla JavaScript to keep the experience lightweight, using clear progression and focused choices instead of adding a framework dependency.",
    featured: true,
    image: "lifestyle-quiz-home.png",
    imageAlt: "Landing page of the Lifestyle Quiz project",
    liveUrl: "https://razidorra.github.io/lifestyleQuiz/",
    githubUrl: "https://github.com/razidorra/lifestyleQuiz",
  },
  {
    id: "glowify",
    title: "Glowify",
    stack: "HTML, CSS, JavaScript",
    category: "frontend",
    status: "published",
    group: "foundations",
    text: "Used mobile-first layout decisions and a strong product hierarchy to keep a visually rich skincare catalogue easy to scan on small screens.",
    image: "glowify-product-showcase.png",
    imageAlt: "Product showcase on the Glowify skincare shop",
    liveUrl: "https://razidorra.github.io/glowShop/",
    githubUrl: "https://github.com/razidorra/glowShop",
  },
  {
    id: "autoflow-workshop",
    title: "AutoFlow Workshop",
    stack: "HTML, CSS, JavaScript",
    category: "frontend",
    status: "published",
    group: "foundations",
    text: "Reduced a service-heavy workshop website to a direct journey from service discovery to contact, with responsive navigation supporting that path.",
    image: "autoflow-workshop-home.png",
    imageAlt: "Homepage of the AutoFlow automotive workshop website",
    liveUrl: "https://razidorra.github.io/project/",
    githubUrl: "https://github.com/razidorra/project",
  },
];
