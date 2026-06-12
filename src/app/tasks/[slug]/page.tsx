import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import TaskArticle from "./TaskArticle";

function getTaskContent(slug: string): string | null {
  const tasksDir = path.join(process.cwd(), "content", "tasks");

  const mdxPath = path.join(tasksDir, `${slug}.mdx`);
  const mdPath = path.join(tasksDir, `${slug}.md`);

  const filePath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
    ? mdPath
    : null;

  if (!filePath) return null;

  return fs.readFileSync(filePath, "utf8");
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const tasksDir = path.join(process.cwd(), "content", "tasks");
  
  if (!fs.existsSync(tasksDir)) return [];

  const files = fs.readdirSync(tasksDir);
  return files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx?$/, ""),
    }));
}



export default async function TaskPage(props: PageProps) {
  const { slug } = await props.params;
  const content = getTaskContent(slug);

  if (!content) {
    notFound();
  }

  return (
    <>
      <section id="content-start" />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navigation />
        <TaskArticle content={content} slug={slug} />
      </div>
    </>
  );
}
