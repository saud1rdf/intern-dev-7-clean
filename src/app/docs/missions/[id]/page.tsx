// src/app/docs/missions/[id]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { missions, type Mission } from "../data";

type MissionDetailsPageProps = {
  params: { id: string };
};

export default function MissionDetailsPage({ params }: MissionDetailsPageProps) {
  const missionId = Number(params.id);
  const mission: Mission | undefined = missions.find(
    (m) => m.id === missionId
  );

  if (!mission) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <Link
        href="/docs/missions"
        className="text-sm text-slate-500 hover:underline"
      >
        ← Back to missions
      </Link>

      <header className="space-y-2">
        <p className="text-xs uppercase tracking-wide text-slate-400">
          {mission.category} • {mission.level}
        </p>
        <h1 className="text-3xl font-bold tracking-tight">
          {mission.title}
        </h1>
        <p className="text-slate-600">{mission.description}</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What will the intern do?</h2>
        <p className="text-slate-700">
          هذه المهمة مصمّمة كـ Task حقيقي لمتدرّب في شركة تقنية. طبّق الخطوات
          التالية، واذا وقف معك شيء استخدم مساعد الذكاء الاصطناعي في intern.dev.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Steps</h2>
        <ol className="list-decimal list-inside space-y-2 text-slate-700">
          {mission.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>

      {mission.codeExample && (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Code example</h2>
          <pre className="rounded-lg bg-slate-950 text-slate-50 text-sm p-4 overflow-x-auto">
            <code>{mission.codeExample}</code>
          </pre>
        </section>
      )}

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Skills practiced</h2>
        <ul className="flex flex-wrap gap-2">
          {mission.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-700"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {mission.sourceUrl && (
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Source / Reference</h2>
          <p className="text-sm text-slate-700">
            هذه المهمة مبنية على محتوى من{" "}
            <Link
              href={mission.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              {mission.sourceName ?? "Reference"}
            </Link>
            ، مع تبسيطها للمتدرّبين في intern.dev.
          </p>
        </section>
      )}
    </main>
  );
}



