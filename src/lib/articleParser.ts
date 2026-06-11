import fs from 'fs';
import path from 'path';

const DOCS_DIR = path.join(process.cwd(), 'content/docs');

export type ParsedArticle = {
  id: string;
  title: string;
  overview: string;
  steps: string[];
  code: string;
  codeLanguage: string;
  explanation: string;
  explanationAr: string;
  notes: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  readingTime: number;
};

const DIFFICULTY_BY_INDEX = ['Beginner', 'Intermediate', 'Advanced'] as const;

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+$/, '');
}

function normalizeContent(content: string): string {
  return content.replace(/\r\n/g, '\n');
}

function extractSection(content: string, heading: string): string {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(
    `### ${escaped}\\r?\\n([\\s\\S]*?)(?=\\r?\\n### |\\r?\\n---|\\s*$)`
  );
  const match = content.match(regex);
  return match ? match[1].trim() : '';
}

function extractSteps(content: string): string[] {
  const section = extractSection(content, '🧠 Step-by-step Breakdown');
  if (!section) return [];
  return section
    .split('\n')
    .map((line) => line.replace(/^\d+\.\s*/, '').trim())
    .filter(Boolean);
}

function extractCode(content: string): { code: string; language: string } {
  const section = extractSection(content, '🧩 Code Example');
  const match = section.match(/```(\w+)?\n([\s\S]*?)```/);
  if (match) {
    return { code: match[2].trim(), language: match[1] || 'typescript' };
  }
  return { code: '', language: 'typescript' };
}

function extractExplanation(content: string): { explanation: string; explanationAr: string } {
  const section = extractSection(content, 'Explanation');
  if (!section) return { explanation: '', explanationAr: '' };

  const arMatch = section.match(/\*\*باختصار بالعربي:\*\*\s*(.+)/);
  const explanationAr = arMatch ? arMatch[1].trim() : '';
  const explanation = section
    .replace(/\*\*باختصار بالعربي:\*\*.+/, '')
    .trim();

  return { explanation, explanationAr };
}

function estimateReadingTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.max(10, Math.ceil(words / 200) * 5);
}

function parseArticleSection(section: string, index: number): ParsedArticle | null {
  const titleMatch = section.match(/^(.+?)(?:\n|$)/);
  if (!titleMatch) return null;

  const title = titleMatch[1].trim();
  const overview = extractSection(section, '📘 Overview');
  const steps = extractSteps(section);
  const { code, language } = extractCode(section);
  const { explanation, explanationAr } = extractExplanation(section);
  const notes = extractSection(section, '📝 Notes');

  const difficulty =
    DIFFICULTY_BY_INDEX[Math.min(index, DIFFICULTY_BY_INDEX.length - 1)];
  const readingTime = estimateReadingTime(
    overview + explanation + code
  );

  return {
    id: slugify(title),
    title,
    overview,
    steps,
    code,
    codeLanguage: language,
    explanation,
    explanationAr,
    notes,
    difficulty,
    readingTime,
  };
}

export function parseCategoryArticles(categorySlug: string): ParsedArticle[] | null {
  const filePath = path.join(DOCS_DIR, `${categorySlug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, 'utf-8');
  const content = normalizeContent(raw);
  const sections = content.split(/^## /m).slice(1);

  const articles = sections
    .map((section, index) => parseArticleSection(section, index))
    .filter((a): a is ParsedArticle => a !== null);

  return articles.length > 0 ? articles : null;
}

export function categoryFileExists(categorySlug: string): boolean {
  return fs.existsSync(path.join(DOCS_DIR, `${categorySlug}.md`));
}
