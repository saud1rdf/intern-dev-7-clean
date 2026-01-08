import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

const docsDir = path.join(process.cwd(), "content/docs");

export default function DocPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(docsDir, `${params.slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return (
      <div className="mx-auto max-w-3xl p-6">
        <h1 className="text-2xl font-bold">Doc not found</h1>
        <p className="mt-2 text-gray-600">
          Create this file:
        </p>
        <pre className="mt-3 rounded bg-gray-100 p-3 text-sm">
{`content/docs/${params.slug}.mdx`}
        </pre>
      </div>
    );
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="text-3xl font-bold">{data.title ?? params.slug}</h1>
      {data.description && (
        <p className="mt-2 text-gray-600">{data.description}</p>
      )}

      <article className="prose prose-zinc mt-8 max-w-none">
        <MDXRemote source={content} />
      </article>
    </div>
  );
}

