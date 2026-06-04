import { notFound } from 'next/navigation';
import { getDocBySlug, getSidebarMeta, extractHeadings } from '@/lib/docs';
import DocsSidebar from '@/components/docs/DocsSidebar';
import TableOfContents from '@/components/docs/TableOfContents';
import DocContent from './DocContent';

interface PageProps {
  params: { slug: string[] };
}

// Disable static generation for this page to avoid React version conflicts
export const dynamic = 'force-dynamic';
export const dynamicParams = true;

export async function generateStaticParams() {
  const meta = getSidebarMeta();
  const params: { slug: string[] }[] = [];
  
  for (const category of meta) {
    for (const page of category.pages) {
      params.push({
        slug: [category.slug, page.slug],
      });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;
  const doc = getDocBySlug(slug);
  
  if (!doc) {
    return {
      title: 'Documentation Not Found',
    };
  }
  
  return {
    title: `${doc.frontmatter.title} | intern.dev Docs`,
    description: doc.frontmatter.summary,
  };
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = params;
  
  // Validate slug length
  if (slug.length < 2) {
    notFound();
  }
  
  const doc = getDocBySlug(slug);
  
  if (!doc) {
    notFound();
  }
  
  const headings = extractHeadings(doc.content);
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Sidebar */}
      <DocsSidebar />
      
      {/* Main content */}
      <main className="lg:pl-64">
        <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center text-sm text-gray-500">
            <a href="/docs" className="hover:text-blue-600">
              Docs
            </a>
            <span className="mx-2">/</span>
            <span className="capitalize text-gray-900 dark:text-gray-200">
              {slug[0].replace(/-/g, ' ')}
            </span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 dark:text-gray-200">
              {doc.frontmatter.title}
            </span>
          </nav>
          
          {/* Article */}
          <article className="prose prose-neutral max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-blue-400 prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {doc.frontmatter.title}
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {doc.frontmatter.summary}
            </p>
            
            <div className="my-4 flex items-center gap-4 text-sm text-gray-500">
              <span>{doc.frontmatter.readingTime} min read</span>
            </div>
            
            <hr className="my-8 border-gray-200 dark:border-gray-800" />
            
            <DocContent content={doc.content} />
          </article>
        </div>
      </main>
      
      {/* Table of Contents */}
      <TableOfContents headings={headings} />
    </div>
  );
}