import fs from 'fs';
import path from 'path';
import Link from 'next/link';

type TaskMeta = {
  slug: string;
  title: string;
};

function getTasks(): TaskMeta[] {
  const tasksDir = path.join(process.cwd(), 'content', 'tasks');
  if (!fs.existsSync(tasksDir)) return [];

  const files = fs.readdirSync(tasksDir).filter((file) => file.endsWith('.md'));

  return files.map((file) => {
    const slug = file.replace(/\.md$/, '');
    const fullPath = path.join(tasksDir, file);
    const raw = fs.readFileSync(fullPath, 'utf8');
    const firstLine = raw.split('\n')[0] || '';
    const title = firstLine.startsWith('#') ? firstLine.replace(/^#\s*/, '').trim() : slug;
    return { slug, title };
  });
}

export default function TasksPage() {
  const tasks = getTasks();

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-semibold mb-6">Technical Tasks for Interns</h1>
      <p className="text-sm text-gray-500 mb-6">
        These tasks are designed for Computer Science interns who already understand the fundamentals and want
        deep, practical scenarios used in real engineering teams.
      </p>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li key={task.slug} className="border rounded-lg px-4 py-3 hover:bg-gray-50 transition">
            <Link href={`/tasks/${task.slug}`} className="text-blue-600 hover:underline font-medium">
              {task.title}
            </Link>
          </li>
        ))}
        {tasks.length === 0 && (
          <li className="text-sm text-gray-500">No tasks found in <code>content/tasks</code>.</li>
        )}
      </ul>
    </main>
  );
}
