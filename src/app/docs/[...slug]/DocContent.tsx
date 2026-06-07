interface DocContentProps {
  content: string;
}

export default function DocContent({ content }: DocContentProps) {
  // استخدام dangerouslySetInnerHTML يجبر المتصفح على قراءة الـ HTML ككود حقيقي وليس كنص
  // كلاس prose سيتكفل بتلوين وتنسيق كل شيء (العناوين، الأكواد، الجداول) تلقائياً
  return (
    <article 
      className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-xl prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:border prose-pre:border-gray-800 prose-pre:shadow-lg"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}