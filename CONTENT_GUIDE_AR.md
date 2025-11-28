# دليل إضافة المحتوى إلى الموقع - Content Management Guide

## 📚 نظرة عامة

هذا الموقع يحتوي على قسمين رئيسيين للمحتوى:

1. **صفحة Documentation (`/docs`)** - تحتوي على 6 فئات تعليمية
2. **صفحة Tasks (`/tasks`)** - تحتوي على مهام تقنية للمتدربين

---

## 🎯 إضافة المحتوى إلى صفحة Documentation

صفحة Documentation تحتوي على 6 فئات رئيسية:

1. **Web Development** (`/docs/web-development`)
2. **API Integration** (`/docs/api-integration`)
3. **Version Control** (`/docs/version-control`)
4. **Testing & Debugging** (`/docs/testing-debugging`)
5. **Algorithms** (`/docs/algorithms`)
6. **Data Structures** (`/docs/data-structures`)

### كيفية إضافة محتوى جديد:

#### الخطوة 1: افتح ملف البيانات الخاص بالفئة

كل فئة لها ملف بيانات في:
```
src/app/docs/[category-name]/data.ts
```

مثال:
- `src/app/docs/web-development/data.ts`
- `src/app/docs/api-integration/data.ts`
- إلخ...

#### الخطوة 2: أضف موضوع جديد (Topic)

افتح الملف وستجد مصفوفة من المواضيع. أضف موضوع جديد بهذا الشكل:

```typescript
{
  id: 'unique-id', // معرف فريد للموضوع
  title: 'Topic Title in English',
  titleAr: 'عنوان الموضوع بالعربية',
  description: 'Description in English',
  descriptionAr: 'الوصف بالعربية',
  difficulty: 'beginner' | 'intermediate' | 'advanced',
  estimatedTime: 30, // بالدقائق
  codeExample: `// مثال الكود هنا
function example() {
  return 'Hello World';
}`,
  resources: { // اختياري
    title: 'Additional Resources',
    titleAr: 'موارد إضافية',
    links: [
      { label: 'Link Name', url: 'https://example.com' },
    ],
  },
}
```

#### الخطوة 3: احفظ الملف

بعد الحفظ، سيظهر المحتوى تلقائياً في الموقع!

---

## 📝 إضافة محتوى إلى صفحة Tasks

### الخطوة 1: أنشئ ملف Markdown جديد

في مجلد `content/tasks/` أنشئ ملف جديد:
```
content/tasks/my-new-task.md
```

### الخطوة 2: اكتب المحتوى

ابدأ الملف بعنوان رئيسي:

```markdown
# عنوان المهمة - Task Title

## نظرة عامة - Overview

وصف المهمة هنا...

## المتطلبات - Requirements

1. المتطلب الأول
2. المتطلب الثاني

## النتائج المتوقعة - Expected Deliverables

- النتيجة الأولى
- النتيجة الثانية
```

### الخطوة 3: احفظ الملف

سيظهر المحتوى تلقائياً في `/tasks/اسم-الملف`

---

## 🎨 أمثلة عملية

### مثال 1: إضافة موضوع جديد في Web Development

افتح `src/app/docs/web-development/data.ts` وأضف:

```typescript
{
  id: 'react-hooks',
  title: 'React Hooks Deep Dive',
  titleAr: 'تعمق في React Hooks',
  description: 'Learn advanced React Hooks patterns',
  descriptionAr: 'تعلم أنماط متقدمة لـ React Hooks',
  difficulty: 'intermediate',
  estimatedTime: 45,
  codeExample: `import { useState, useEffect } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);
  
  return { count, setCount };
}`,
  resources: {
    title: 'Additional Resources',
    titleAr: 'موارد إضافية',
    links: [
      { label: 'React Hooks Docs', url: 'https://react.dev/reference/react' },
    ],
  },
}
```

### مثال 2: إضافة مهمة جديدة

أنشئ ملف `content/tasks/react-performance-optimization.md`:

```markdown
# React Performance Optimization

## Overview

Learn how to optimize React applications for better performance.

## Requirements

1. Identify performance bottlenecks
2. Implement React.memo and useMemo
3. Optimize re-renders

## Expected Deliverables

- Optimized React component
- Performance metrics comparison
```

---

## 📂 هيكل الملفات

```
src/app/docs/
├── web-development/
│   ├── data.ts          ← محتوى Web Development
│   └── page.tsx
├── api-integration/
│   ├── data.ts          ← محتوى API Integration
│   └── page.tsx
├── version-control/
│   ├── data.ts          ← محتوى Version Control
│   └── page.tsx
└── ...

content/tasks/
├── task-1.md            ← مهام تقنية
├── task-2.md
└── ...
```

---

## ✅ نصائح مهمة

1. **استخدم معرفات فريدة**: كل موضوع يجب أن يكون له `id` فريد
2. **اكتب بالعربية والإنجليزية**: المحتوى ثنائي اللغة
3. **أضف أمثلة كود**: كل موضوع يجب أن يحتوي على مثال كود
4. **حدد الصعوبة**: اختر `beginner` أو `intermediate` أو `advanced`
5. **حدد الوقت المتوقع**: بالدقائق

---

## 🚀 بعد إضافة المحتوى

1. احفظ الملف
2. إذا كان الموقع يعمل محلياً، سيتم تحديثه تلقائياً
3. إذا كان على Vercel، سيتم النشر تلقائياً بعد الـ commit

---

## ❓ أسئلة شائعة

**س: كيف أضيف فئة جديدة؟**
ج: أنشئ مجلد جديد في `src/app/docs/[category-name]/` مع ملف `data.ts` و `page.tsx`

**س: هل يمكنني استخدام Markdown في ملفات data.ts؟**
ج: حالياً، المحتوى يُكتب مباشرة في TypeScript. يمكنك استخدام template strings للكود.

**س: كيف أضيف صور؟**
ج: ضع الصور في `public/` ثم استخدم المسار النسبي في المحتوى.

---

**ملاحظة**: إذا كنت بحاجة لمساعدة في إضافة محتوى محدد، أخبرني وسأساعدك! 🎉

