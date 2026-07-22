export type ProjectStatus = "published" | "github" | "learning";

export interface Project {
  id: string;
  title: string;
  stack: string;
  category: "frontend" | "full stack";
  status: ProjectStatus;
  text: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projectStatusLabels: Record<ProjectStatus, string> = {
  published: "Published project",
  github: "Source available",
  learning: "Learning project",
};

export const projects: Project[] = [
  {
    id: "lifestyle-quiz",
    title: "Lifestyle Quiz",
    stack: "HTML, CSS, JavaScript",
    category: "frontend",
    status: "published",
    text: "An interactive lifestyle quiz with a welcoming landing page and a clear, lightweight question flow built in vanilla JavaScript.",
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
    text: "A responsive beauty and skincare storefront focused on mobile-first layouts, clear product navigation, and an inviting shopping experience.",
    featured: true,
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
    text: "A responsive automotive workshop website with service information, contact navigation, and a straightforward appointment journey.",
    featured: true,
    image: "autoflow-workshop-home.png",
    imageAlt: "Homepage of the AutoFlow automotive workshop website",
    liveUrl: "https://razidorra.github.io/project/",
    githubUrl: "https://github.com/razidorra/project",
  },
  {
    id: "raaji-baluch-blog",
    title: "Raaji Baluch Blog",
    stack: "React, Vite, Express, Clerk",
    category: "full stack",
    status: "github",
    text: "A community blog about Baluchistan with posts, comments, videos, authentication, and a responsive React interface.",
    featured: true,
    image: "raaji-baluch-blog-home.png",
    imageAlt: "Homepage of the Raaji Baluch community blog",
    githubUrl: "https://github.com/razidorra/Blog",
  },
  {
    id: "full-stack-practice",
    title: "Full Stack Practice App",
    stack: "Node.js, MongoDB, SQL",
    category: "full stack",
    status: "learning",
    text: "An ongoing learning project used to practise backend data flows, database fundamentals, and maintainable interfaces. It is not currently published.",
  },
];
