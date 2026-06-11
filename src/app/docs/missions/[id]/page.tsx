import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import CopyButton from '@/components/docs/CopyButton';
import { missions } from '../data';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return missions.map((mission) => ({ id: String(mission.id) }));
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const mission = missions.find((m) => m.id === Number(params.id));

  if (!mission) {
    return { title: 'Mission Not Found' };
  }

  return {
    title: `${mission.title} | intern.dev`,
    description: mission.summary,
  };
}

const levelStyles = {
  Beginner: 'bg-green-100 text-green-800',
  Intermediate: 'bg-yellow-100 text-yellow-800',
  Advanced: 'bg-red-100 text-red-800',
};

export default async function MissionPage(props: PageProps) {
  const params = await props.params;
  const mission = missions.find((m) => m.id === Number(params.id));

  if (!mission) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/docs#missions"
          className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          العودة للمهام
        </Link>

        <article className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
                {mission.category}
              </p>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {mission.title}
              </h1>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium shrink-0 ${
                levelStyles[mission.level]
              }`}
            >
              {mission.level}
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-arabic">
            {mission.description}
          </p>

          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 font-arabic">
              خطوات التنفيذ:
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm font-arabic">
              {mission.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Skills:
            </h2>
            <div className="flex flex-wrap gap-2">
              {mission.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-600 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {mission.codeExample && (
            <div className="mb-6">
              <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Code Example:
              </h2>
              <div className="group relative">
                <CopyButton text={mission.codeExample} />
                <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm leading-relaxed text-gray-100 border border-gray-800">
                  <code>{mission.codeExample}</code>
                </pre>
              </div>
            </div>
          )}

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-5 border border-blue-100 dark:border-blue-800/30">
            <h2 className="text-sm font-bold text-blue-800 dark:text-blue-300 mb-2 font-arabic">
              ملخص المهمة:
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-arabic">
              {mission.summary}
            </p>
          </div>

          {mission.sourceUrl && (
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <a
                href={mission.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                {mission.sourceName || 'المصدر التعليمي'}
              </a>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
