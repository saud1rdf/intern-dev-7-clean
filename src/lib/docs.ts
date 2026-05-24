import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { docsMeta, type DocsMeta } from '@/content/docs/_meta';

const DOCS_DIR = path.join(process.cwd(), 'content/docs');

export type DocFrontmatter = {
  title: string;
  category: string;
  summary: string;
  readingTime: number;
};

export type DocResult = {
  frontmatter: DocFrontmatter;
  content: string;
};

export type DocRoute = {
  href: string;
  title: string;
  categoryTitle: string;
};

/**
 * Get the file path for a doc by its slug parts
 * @param slugParts - Array of slug parts (e.g., ['web-development', 'react-basics'])
 * @returns Full file path or null if not found
 */
export function getDocFileBySlug(slugParts: string[]): string | null {
  const filePath = path.join(DOCS_DIR, ...slugParts);
  
  // Try .mdx first, then .md
  const mdxPath = `${filePath}.mdx`;
  const mdPath = `${filePath}.md`;
  
  if (fs.existsSync(mdxPath)) {
    return mdxPath;
  }
  
  if (fs.existsSync(mdPath)) {
    return mdPath;
  }
  
  return null;
}

/**
 * Get a doc by its slug parts
 * @param slugParts - Array of slug parts (e.g., ['web-development', 'react-basics'])
 * @returns Doc result with frontmatter and content, or null if not found
 */
export function getDocBySlug(slugParts: string[]): DocResult | null {
  const filePath = getDocFileBySlug(slugParts);
  
  if (!filePath) {
    return null;
  }
  
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    
    return {
      frontmatter: data as DocFrontmatter,
      content,
    };
  } catch {
    return null;
  }
}

/**
 * Get the sidebar metadata for navigation
 * @returns DocsMeta array with categories and pages
 */
export function getSidebarMeta(): DocsMeta {
  return docsMeta;
}

/**
 * Get all document routes for building navigation
 * @returns Array of route objects with href, title, and categoryTitle
 */
export function getAllDocRoutes(): DocRoute[] {
  const routes: DocRoute[] = [];
  
  for (const category of docsMeta) {
    for (const page of category.pages) {
      routes.push({
        href: `/docs/${category.slug}/${page.slug}`,
        title: page.title,
        categoryTitle: category.title,
      });
    }
  }
  
  return routes;
}

/**
 * Check if a doc exists
 * @param slugParts - Array of slug parts
 * @returns True if doc exists
 */
export function docExists(slugParts: string[]): boolean {
  return getDocFileBySlug(slugParts) !== null;
}

/**
 * Get the category and page info for a given slug
 * @param categorySlug - Category slug
 * @param pageSlug - Page slug
 * @returns Object with category and page info, or null
 */
export function getDocInfo(
  categorySlug: string,
  pageSlug: string
): { category: typeof docsMeta[0]; page: typeof docsMeta[0]['pages'][0] } | null {
  const category = docsMeta.find(c => c.slug === categorySlug);
  
  if (!category) {
    return null;
  }
  
  const page = category.pages.find(p => p.slug === pageSlug);
  
  if (!page) {
    return null;
  }
  
  return { category, page };
}

/**
 * Get the previous and next docs for navigation
 * @param categorySlug - Current category slug
 * @param pageSlug - Current page slug
 * @returns Previous and next doc info
 */
export function getDocNavigation(
  categorySlug: string,
  pageSlug: string
): { prev: DocRoute | null; next: DocRoute | null } {
  let prev: DocRoute | null = null;
  let next: DocRoute | null = null;
  let foundCurrent = false;
  
  for (const category of docsMeta) {
    for (const page of category.pages) {
      if (foundCurrent) {
        next = {
          href: `/docs/${category.slug}/${page.slug}`,
          title: page.title,
          categoryTitle: category.title,
        };
        return { prev, next };
      }
      
      if (category.slug === categorySlug && page.slug === pageSlug) {
        foundCurrent = true;
      } else {
        prev = {
          href: `/docs/${category.slug}/${page.slug}`,
          title: page.title,
          categoryTitle: category.title,
        };
      }
    }
  }
  
  return { prev, next };
}

/**
 * Extract table of contents from markdown content
 * @param content - Markdown content
 * @returns Array of headings with text, level, and slug
 */
export function extractHeadings(content: string): Array<{ text: string; level: number; slug: string }> {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: Array<{ text: string; level: number; slug: string }> = [];
  
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const slug = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+$/, '');
    
    headings.push({ text, level, slug });
  }
  
  return headings;
}
