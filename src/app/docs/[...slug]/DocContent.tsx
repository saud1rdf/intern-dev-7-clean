'use client';

import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

interface DocContentProps {
  content: string;
}

const components = {
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre {...props} className="overflow-x-auto rounded-lg bg-gray-900 p-4 my-6 text-sm leading-relaxed text-gray-100 shadow-lg" />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => {
    const isInline = !props.className;
    if (isInline) {
      return (
        <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-blue-600 dark:bg-gray-800 dark:text-blue-400" {...props} />
      );
    }
    return <code className={props.className} {...props} />;
  },
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text = String(props.children || '');
    const slug = text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+$/, '');
    return <h2 id={slug} className="mt-10 mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 dark:text-gray-100 border-b pb-2" {...props} />;
  },
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text = String(props.children || '');
    const slug = text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+$/, '');
    return <h3 id={slug} className="mt-8 mb-3 scroll-mt-24 text-xl font-semibold text-gray-900 dark:text-gray-100" {...props} />;
  },
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = props.href?.startsWith('http');
    if (isExternal) {
      return <a {...props} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 underline decoration-blue-300 underline-offset-2" />;
    }
    return <a {...props} className="text-blue-600 hover:text-blue-800 dark:text-blue-400 underline decoration-blue-300 underline-offset-2" />;
  },
};

export default function DocContent({ content }: DocContentProps) {
  return (
    // هنا السر السحري (كلاس prose) الذي سيرتب الشرح ويفصله عن الكود بشكل جميل
    <article className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-xl">
      <MDXRemote
        source={content}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </article>
  );
}