import { notFound, redirect } from 'next/navigation';
import { getDocBySlug, getSidebarMeta, extractHeadings } from '@/lib/docs';
import { parseCategoryArticles, categoryFileExists } from '@/lib/articleParser';
import { getCategoryBySlug } from '@/lib/categories';
import DocsSidebar from '@/components/docs/DocsSidebar';
import TableOfContents from '@/components/docs/TableOfContents';
import CategoryArticles from '@/components/docs/CategoryArticles';
import DocContent from './DocContent';

const legacySlugMapping: Record<string, string[]> = {
  html: ['web-development', 'html'],
  css: ['web-development', 'css'],
  javascript: ['web-development', 'javascript'],
  'react-basics': ['web-development', 'react-basics'],
  nextjs: ['web-development', 'nextjs'],
  rest: ['api-integration', 'rest'],
  graphql: ['api-integration', 'graphql'],
  postman: ['api-integration', 'postman'],
  'git-basics': ['version-control', 'git-basics'],
  'github-workflow': ['version-control', 'github-workflow'],
  branching: ['version-control', 'branching'],
  'merge-conflicts': ['version-control', 'merge-conflicts'],
  'unit-testing': ['testing-debugging', 'unit-testing'],
  'integration-testing': ['testing-debugging', 'integration-testing'],
  'debugging-tools': ['testing-debugging', 'debugging-tools'],
};

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  const meta = getSidebarMeta();
  const params: { slug: string[] }[] = [];

  const categorySlugs = [
    'web-development',
    'api-integration',
    'version-control',
    'testing-debugging',
    'algorithms',
    'data-structures',
  ];

  for (const slug of categorySlugs) {
    if (categoryFileExists(slug)) {
      params.push({ slug: [slug] });
    }
  }

  for (const category of meta) {
    for (const page of category.pages) {
      params.push({
        slug: [category.slug, page.slug],
      });
    }
  }
  return params;
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const { slug } = params;

  if (slug.length === 1) {
    const category = getCategoryBySlug(slug[0]);
    if (category) {
      return {
        title: `${category.title} | intern.dev Docs`,
        description: category.description,
      };
    }
  }

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

export default async function DocPage(props: PageProps) {
  const params = await props.params;
  const { slug } = params;

  if (slug.length === 1) {
    const legacyTarget = legacySlugMapping[slug[0]];
    if (legacyTarget) {
      redirect(`/docs/${legacyTarget[0]}/${legacyTarget[1]}`);
    }

    const category = getCategoryBySlug(slug[0]);
    const articles = parseCategoryArticles(slug[0]);

    if (category && articles) {
      return <CategoryArticles category={category} articles={articles} />;
    }

    notFound();
  }

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
      <DocsSidebar />
      <main className="lg:pl-64">
        <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8">
          <nav className="mb-6 flex items-center text-sm text-gray-500 font-sans">
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

          <article className="prose prose-neutral max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-blue-400 prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {doc.frontmatter.title}
            </h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              {doc.frontmatter.summary}
            </p>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
              <span>{doc.frontmatter.readingTime} min read</span>
            </div>
            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <DocContent content={doc.content} />
          </article>
        </div>
      </main>
      <TableOfContents headings={headings} />
    </div>
  );
}
