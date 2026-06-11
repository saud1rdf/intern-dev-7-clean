export type CategoryMeta = {
  slug: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  color: string;
  bgColor: string;
};

export const categories: CategoryMeta[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    titleAr: 'تطوير الويب',
    description:
      'Learn modern web development with React, Next.js, HTML, CSS, and JavaScript',
    descriptionAr:
      'تعلم تطوير الويب الحديث باستخدام React, Next.js, HTML, CSS, و JavaScript',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    slug: 'api-integration',
    title: 'API Integration',
    titleAr: 'تكامل واجهات برمجة التطبيقات',
    description: 'Master API integration with REST APIs, GraphQL, and modern tools',
    descriptionAr: 'إتقان تكامل واجهات برمجة التطبيقات مع REST APIs و GraphQL',
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
  },
  {
    slug: 'version-control',
    title: 'Version Control',
    titleAr: 'التحكم في الإصدارات',
    description: 'Learn Git, GitHub, and modern version control practices',
    descriptionAr: 'تعلم Git و GitHub وممارسات التحكم في الإصدارات الحديثة',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
  },
  {
    slug: 'testing-debugging',
    title: 'Testing & Debugging',
    titleAr: 'الاختبار والتشخيص',
    description: 'Master testing strategies and debugging techniques',
    descriptionAr: 'إتقان استراتيجيات الاختبار وتقنيات التشخيص',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
  },
  {
    slug: 'algorithms',
    title: 'Algorithms',
    titleAr: 'الخوارزميات',
    description: 'Understand fundamental and advanced algorithms',
    descriptionAr: 'فهم الخوارزميات الأساسية والمتقدمة',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
  },
  {
    slug: 'data-structures',
    title: 'Data Structures',
    titleAr: 'هياكل البيانات',
    description: 'Master essential data structures and their implementations',
    descriptionAr: 'إتقان هياكل البيانات الأساسية وتطبيقاتها',
    color: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
  },
];

export function getCategoryBySlug(slug: string): CategoryMeta | undefined {
  return categories.find((c) => c.slug === slug);
}
