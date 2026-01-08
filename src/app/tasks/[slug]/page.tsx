import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import TaskArticle from './TaskArticle'

interface TaskDetailPageProps {
  params: Promise<{ slug: string }>
}

function getTaskContent(slug: string): string | null {
  const tasksDir = path.join(process.cwd(), 'content', 'tasks')
  const filePath = path.join(tasksDir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  return fs.readFileSync(filePath, 'utf8')
}

export default async function TaskDetailPage({ params }: TaskDetailPageProps) {
  const { slug } = await params
  const content = getTaskContent(slug)

  if (!content) {
    notFound()
  }

  return (
    <>
      <section id="content-start"></section>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navigation />
        <TaskArticle content={content} slug={slug} />
      </div>
    </>
  )
}
