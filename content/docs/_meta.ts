export type DocPageMeta = {
  title: string;
  slug: string;
};

export type DocCategoryMeta = {
  title: string;
  slug: string;
  pages: DocPageMeta[];
};

export type DocsMeta = DocCategoryMeta[];

export const docsMeta: DocsMeta = [
  {
    title: "Web Development",
    slug: "web-development",
    pages: [
      { title: "React Basics", slug: "react-basics" },
      { title: "Next.js", slug: "nextjs" },
      { title: "HTML", slug: "html" },
      { title: "CSS", slug: "css" },
      { title: "JavaScript", slug: "javascript" },
      { title: "TypeScript Fundamentals", slug: "typescript-fundamentals" },
      { title: "Node.js Env Variables", slug: "nodejs-env-variables" }
    ],
  },
  {
    title: "API Integration",
    slug: "api-integration",
    pages: [
      { title: "REST APIs", slug: "rest" },
{ title: "Postman", slug: "postman" },
      { title: "Docker & Containerization", slug: "docker-containerization" },
    ],
  },
  {
    title: "Version Control",
    slug: "version-control",
    pages: [
      { title: "Git Basics", slug: "git-basics" },
      { title: "GitHub Workflow", slug: "github-workflow" },
      { title: "Branching", slug: "branching" },
      { title: "Merge Conflicts", slug: "merge-conflicts" },
      { title: "GitHub Actions CI/CD", slug: "github-actions-cicd" }
    ],
  },
  {
    title: "Testing & Debugging",
    slug: "testing-debugging",
    pages: [
      { title: "Unit Testing", slug: "unit-testing" },
      { title: "Integration Testing", slug: "integration-testing" },
      { title: "Debugging Tools", slug: "debugging-tools" },
      { title: "Node.js Error Handling", slug: "nodejs-error-handling" }
    ],
  },
  {
    title: "Data Structures",
    slug: "data-structures",
    pages: [
      {
        title: "SQL & Query Builders (Prisma)",
        slug: "sql-query-builders",
      },
    ],
  }
];
