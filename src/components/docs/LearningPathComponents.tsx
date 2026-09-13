import React from 'react';
import { CheckCircle2, AlertTriangle, Info, XCircle, Target, ClipboardList, ExternalLink } from 'lucide-react';

const calloutStyles = {
  tip: {
    box: 'border-green-200 bg-green-50 dark:border-green-800/40 dark:bg-green-900/20',
    title: 'text-green-800 dark:text-green-300',
    icon: AlertTriangle,
  },
  warning: {
    box: 'border-amber-200 bg-amber-50 dark:border-amber-800/40 dark:bg-amber-900/20',
    title: 'text-amber-800 dark:text-amber-300',
    icon: AlertTriangle,
  },
  info: {
    box: 'border-blue-200 bg-blue-50 dark:border-blue-800/40 dark:bg-blue-900/20',
    title: 'text-blue-800 dark:text-blue-300',
    icon: Info,
  },
  danger: {
    box: 'border-red-200 bg-red-50 dark:border-red-800/40 dark:bg-red-900/20',
    title: 'text-red-800 dark:text-red-300',
    icon: XCircle,
  },
};

const defaultTitles = {
  tip: 'Tip',
  warning: 'Warning',
  info: 'Note',
  danger: 'Common Mistake',
};

interface CalloutProps {
  kind?: keyof typeof calloutStyles;
  title?: string;
  children: React.ReactNode;
}

export function Callout({ kind = 'info', title, children }: CalloutProps) {
  const styles = calloutStyles[kind];
  const Icon = styles.icon;

  return (
    <div className={`my-6 rounded-lg border p-5 ${styles.box}`}>
      <div className={`mb-1 flex items-center text-sm font-bold ${styles.title}`}>
        <Icon className="mr-2 h-4 w-4 shrink-0" />
        {title ?? defaultTitles[kind]}
      </div>
      <div className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{children}</div>
    </div>
  );
}

interface ObjectivesProps {
  items: string[];
  title?: string;
}

export function LearningObjectives({ items, title = 'Learning Objectives' }: ObjectivesProps) {
  return (
    <div className="my-6 rounded-lg border border-indigo-200 bg-indigo-50 p-5 dark:border-indigo-800/40 dark:bg-indigo-900/20">
      <div className="mb-3 flex items-center text-sm font-bold text-indigo-800 dark:text-indigo-300">
        <Target className="mr-2 h-4 w-4 shrink-0" />
        {title}
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
            <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-indigo-500 dark:text-indigo-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface PracticeProjectProps {
  title: string;
  children: React.ReactNode;
}

export function PracticeProject({ title, children }: PracticeProjectProps) {
  return (
    <div className="my-6 rounded-lg border-2 border-dashed border-purple-300 p-5 dark:border-purple-700/60">
      <div className="mb-3 flex items-center text-sm font-bold text-purple-800 dark:text-purple-300">
        <ClipboardList className="mr-2 h-4 w-4 shrink-0" />
        {title}
      </div>
      <div className="space-y-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </div>
  );
}

interface ResourceItemProps {
  label: string;
  href: string;
  why: string;
  when?: string;
  focus?: string;
}

export function ResourceItem({ label, href, why, when, focus }: ResourceItemProps) {
  return (
    <div className="my-4 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900/40">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
      >
        {label}
        <ExternalLink className="ml-1 h-3.5 w-3.5" />
      </a>
      <div className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
        <p>
          <span className="font-semibold text-gray-700 dark:text-gray-300">What it is:</span> {why}
        </p>
        {when && (
          <p>
            <span className="font-semibold text-gray-700 dark:text-gray-300">When to use it:</span> {when}
          </p>
        )}
        {focus && (
          <p>
            <span className="font-semibold text-gray-700 dark:text-gray-300">What to focus on:</span> {focus}
          </p>
        )}
      </div>
    </div>
  );
}

interface ChecklistProps {
  items: string[];
  title?: string;
}

export function Checklist({ items, title = 'Checklist' }: ChecklistProps) {
  return (
    <div className="my-6 rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900/60">
      <div className="mb-3 text-sm font-bold text-gray-900 dark:text-gray-100">{title}</div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
            <span className="mr-2 mt-0.5 inline-block h-4 w-4 shrink-0 rounded border border-gray-400 dark:border-gray-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}