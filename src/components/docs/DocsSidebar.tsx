'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { docsMeta, type DocCategoryMeta } from '@/content/docs/_meta';

export default function DocsSidebar() {
  const pathname = usePathname();
  
  // Parse current path to determine active category and page
  const pathParts = pathname?.split('/').filter(Boolean) || [];
  const currentCategory = pathParts[1];
  const currentPage = pathParts[2];

  return (
    <aside className="fixed top-16 left-0 z-30 hidden h-[calc(100vh-4rem)] w-64 overflow-y-auto border-r border-gray-200 bg-white px-4 py-8 dark:border-gray-800 dark:bg-gray-950 lg:block">
      <nav className="space-y-8">
        {docsMeta.map((category) => (
          <div key={category.slug}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              {category.title}
            </h3>
            <ul className="space-y-1">
              {category.pages.map((page) => {
                const href = `/docs/${category.slug}/${page.slug}`;
                const isActive = 
                  pathname === href || 
                  pathname === `${href}/` ||
                  (currentCategory === category.slug && currentPage === page.slug);
                
                return (
                  <li key={page.slug}>
                    <Link
                      href={href}
                      className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                        isActive
                          ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200'
                      }`}
                    >
                      {page.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
