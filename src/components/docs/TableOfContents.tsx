'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Heading {
  text: string;
  level: number;
  slug: string;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show TOC if there are headings
    setIsVisible(headings.length > 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -80% 0px',
        threshold: 0,
      }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.slug);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [headings]);

  if (!isVisible) {
    return null;
  }

  return (
    <aside className="fixed top-20 right-8 z-30 hidden h-[calc(100vh-5rem)] w-64 overflow-y-auto xl:block">
      <div className="border-l border-gray-200 pl-4 dark:border-gray-800">
        <h4 className="mb-3 text-sm font-semibold text-gray-900 dark:text-gray-100">
          On This Page
        </h4>
        <nav>
          <ul className="space-y-2 text-sm">
            {headings.map((heading) => (
              <li
                key={heading.slug}
                style={{ paddingLeft: (heading.level - 2) * 12 }}
              >
                <Link
                  href={`#${heading.slug}`}
                  className={`block transition-colors ${
                    activeId === heading.slug
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(heading.slug)?.scrollIntoView({
                      behavior: 'smooth',
                    });
                    setActiveId(heading.slug);
                  }}
                >
                  {heading.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
