export type DocPageMeta = {
  title: string;
  slug: string;
};

export type DocCategoryMeta = {
  title: string;
  slug: string;
  description: string;
  pages: DocPageMeta[];
};

export type DocsMeta = DocCategoryMeta[];

export const docsMeta: DocsMeta = [
  {
    title: "Learning Paths",
    slug: "learning-paths",
    description: "Guided learning paths that take you from a concept to a working project",
    pages: [
      { title: "FastAPI: A Guided Learning Path", slug: "fastapi" },
      { title: "Docker & CI/CD: A Guided Learning Path", slug: "docker-cicd" },
    ],
  },
  {
    title: "Web Development",
    slug: "web-development",
    description: "Modern web development with React, Next.js, HTML, CSS, and JavaScript",
    pages: [
      { title: "Web Development Overview", slug: "web-development" },
      { title: "Web Fundamentals", slug: "web-fundamentals" },
    ],
  },
  {
    title: "Version Control",
    slug: "version-control",
    description: "Git version control, branching, workflows, and collaboration",
    pages: [
      { title: "Version Control Overview", slug: "version-control" },
    ],
  },
  {
    title: "API Integration",
    slug: "api-integration",
    description: "Building and consuming REST APIs and integrations",
    pages: [
      { title: "API Integration Overview", slug: "api-integration" },
    ],
  },
  {
    title: "Testing & Debugging",
    slug: "testing-debugging",
    description: "Testing strategies, quality assurance, and debugging techniques",
    pages: [
      { title: "Testing & Debugging Overview", slug: "testing-debugging" },
    ],
  },
  {
    title: "Algorithms & Data Structures",
    slug: "algorithms-data-structures",
    description: "Core algorithms, complexity analysis, and data structures",
    pages: [
      { title: "Algorithms", slug: "algorithms" },
      { title: "Data Structures", slug: "data-structures" },
    ],
  },
];