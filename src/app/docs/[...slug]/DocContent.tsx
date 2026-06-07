import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

interface DocContentProps {
  content: string;
}

const components = {
  pre: (props: any) => (
    <pre 
      {...props} 
      className="overflow-x-auto rounded-lg bg-gray-900 p-4 my-6 text-sm leading-relaxed text-gray-100 shadow-lg border border-gray-800" 
    />
  ),
  code: (props: any) => {
    const isInline = !props.className;
    if (isInline) {
      return (
        <code 
          className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-blue-600 dark:bg-gray-800 dark:text-blue-400" 
          {...props} 
        />
      );
    }
    return <code className={props.className} {...props} />;
  },
};

export default function DocContent({ content }: DocContentProps) {
  return (
    <MDXRemote
      source={content}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      }}
    />
  );
}