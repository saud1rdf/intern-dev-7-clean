// This file is deprecated - use [...slug]/page.tsx instead
import { redirect } from 'next/navigation';

export default async function OldSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Map old single-level slugs to new structure
  const slugMapping: Record<string, string[]> = {
    'html': ['web-development', 'html'],
    'css': ['web-development', 'css'],
    'javascript': ['web-development', 'javascript'],
    'react-basics': ['web-development', 'react-basics'],
    'nextjs': ['web-development', 'nextjs'],
    'rest': ['api-integration', 'rest'],
    'graphql': ['api-integration', 'graphql'],
    'postman': ['api-integration', 'postman'],
    'git-basics': ['version-control', 'git-basics'],
    'github-workflow': ['version-control', 'github-workflow'],
    'branching': ['version-control', 'branching'],
    'merge-conflicts': ['version-control', 'merge-conflicts'],
    'unit-testing': ['testing-debugging', 'unit-testing'],
    'integration-testing': ['testing-debugging', 'integration-testing'],
    'debugging-tools': ['testing-debugging', 'debugging-tools'],
  };
  
  const newSlug = slugMapping[slug];
  
  if (newSlug) {
    redirect(`/docs/${newSlug[0]}/${newSlug[1]}`);
  }
  
  // If no mapping found, redirect to docs home
  redirect('/docs');
}

export function generateStaticParams() {
  return [];
}
