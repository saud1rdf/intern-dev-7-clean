import Link from 'next/link';
import { missions } from './data';

export default function MissionsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Technical Missions for Interns</h1>
        <p className="text-slate-600 dark:text-slate-300">
          مهام تقنية متقدمة للمتدرّبين - اختر واحدة من المهام التالية وجرّب تنفيذها خطوة بخطوة.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {missions.map((mission) => (
          <Link
            key={mission.id}
            href={`/docs/missions/${mission.id}`}
            className="block rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/60 p-5 hover:shadow-lg transition-all duration-200"
          >
            <p className="text-xs uppercase tracking-wide text-slate-400 mb-1">
              {mission.category} • {mission.level}
            </p>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              {mission.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 line-clamp-3">
              {mission.summary}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              يشمل كود جاهز + مصدر تعليمي
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
