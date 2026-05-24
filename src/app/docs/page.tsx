'use client';

import Navigation from '@/components/Navigation';
import {
  Globe,
  Server,
  GitBranch,
  Beaker,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Learn HTML, CSS, JavaScript, React, and Next.js fundamentals',
    icon: Globe,
    href: '/docs/web-development/react-basics',
  },
  {
    id: 'api-integration',
    title: 'API Integration',
    description: 'Master REST APIs, GraphQL, and Postman for backend integration',
    icon: Server,
    href: '/docs/api-integration/rest',
  },
  {
    id: 'version-control',
    title: 'Version Control',
    description: 'Understand Git, GitHub workflows, branching, and conflict resolution',
    icon: GitBranch,
    href: '/docs/version-control/git-basics',
  },
  {
    id: 'testing-debugging',
    title: 'Testing & Debugging',
    description: 'Write unit tests, integration tests, and debug effectively',
    icon: Beaker,
    href: '/docs/testing-debugging/unit-testing',
  },
];

export default function DocsPage() {
  return (
    <>
      <section id="content-start" />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navigation />

        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Documentation
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive guides and tutorials to help you master web development, 
              API integration, version control, and testing.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              
              return (
                <Link
                  key={category.id}
                  href={category.href}
                  className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {category.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {category.description}
                      </p>
                      
                      <span className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                        Start Learning
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Additional Resources */}
          <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Additional Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                  Quick Start
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  New to web development? Start with our{' '}
                  <Link href="/docs/web-development/html" className="text-blue-600 hover:underline">
                    HTML Basics
                  </Link>{' '}
                  guide to learn the fundamentals.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                  Practice Projects
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Apply your knowledge by building real projects. Check out our{' '}
                  <Link href="/tasks" className="text-blue-600 hover:underline">
                    coding tasks
                  </Link>{' '}
                  for challenges.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                  Community
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Join our community to get help, share knowledge, and collaborate 
                  with other developers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
