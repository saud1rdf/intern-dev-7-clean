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
    title: "Web Development Fundamentals",
    slug: "web-fundamentals",
    description: "Core web technologies: HTML, CSS, JavaScript, TypeScript, and React fundamentals",
    pages: [
      { title: "HTML5 Semantic Markup", slug: "html" },
      { title: "CSS Layout & Styling", slug: "css" },
      { title: "JavaScript Essentials", slug: "javascript" },
      { title: "TypeScript Fundamentals", slug: "typescript-fundamentals" },
      { title: "React Basics & Components", slug: "react-basics" },
      { title: "Node.js Environment Variables", slug: "nodejs-env-variables" },
    ],
  },
  {
    title: "Frontend Architecture",
    slug: "frontend-architecture",
    description: "Advanced frontend patterns: Next.js, state management, server components, and performance",
    pages: [
      { title: "Next.js App Router & Server Architecture", slug: "nextjs" },
      { title: "React High-Performance State Architecture", slug: "react-state-architecture" },
    ],
  },
  {
    title: "API Integration",
    slug: "api-integration",
    description: "Building and consuming APIs: REST, GraphQL, and API testing with Postman",
    pages: [
      { title: "REST API Integration & Validation", slug: "rest" },
      { title: "GraphQL Integration with Apollo Client", slug: "graphql" },
      { title: "Postman for API Testing", slug: "postman" },
    ],
  },
  {
    title: "Backend & Database",
    slug: "backend-database",
    description: "Server-side development: Node.js, databases, ORMs, and query optimization",
    pages: [
      { title: "Node.js Environment & Configuration", slug: "nodejs-env-variables" },
      { title: "SQL, Query Builders & Prisma ORM", slug: "sql-query-builders" },
    ],
  },
  {
    title: "Version Control & CI/CD",
    slug: "version-control",
    description: "Git workflows, branching strategies, GitHub collaboration, and CI/CD pipelines",
    pages: [
      { title: "Git Basics & Branching Strategies", slug: "git-basics" },
      { title: "GitHub Workflow & Pull Requests", slug: "github-workflow" },
      { title: "Branching Strategies", slug: "branching" },
      { title: "Merge Conflicts & Resolution", slug: "merge-conflicts" },
      { title: "GitHub Actions CI/CD", slug: "github-actions-cicd" },
    ],
  },
  {
    title: "Testing & Debugging",
    slug: "testing-debugging",
    description: "Testing strategies, debugging techniques, structured logging, and error handling",
    pages: [
      { title: "Unit & E2E Testing with Jest & Playwright", slug: "unit-testing" },
      { title: "Integration Testing", slug: "integration-testing" },
      { title: "Debugging Tools & Techniques", slug: "debugging-tools" },
      { title: "Node.js Error Handling", slug: "nodejs-error-handling" },
    ],
  },
  {
    title: "Algorithms & Data Structures",
    slug: "algorithms-data-structures",
    description: "Algorithm fundamentals, complexity analysis, and core data structures",
    pages: [
      { title: "Algorithms Overview & Problem Solving", slug: "algorithms" },
      { title: "Data Structures: Arrays, Trees, Hash Tables", slug: "data-structures" },
      { title: "SQL & Query Builders (Prisma)", slug: "sql-query-builders" },
    ],
  },
];