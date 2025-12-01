// src/app/docs/api-integration/data.ts

import { Topic } from '../types';

export const apiIntegrationTopics: Topic[] = [
  {
    id: 'rest-api-basics',
    title: 'REST API Fundamentals',
    titleAr: 'أساسيات REST API',
    description: 'Learn the fundamentals of REST API design and implementation',
    descriptionAr: 'تعلم أساسيات تصميم وتنفيذ REST API',
    difficulty: 'beginner',
    estimatedTime: 45,
    codeExample: `// Example: Fetching data from REST API
async function fetchUserData(userId) {
  const response = await fetch(\`https://api.example.com/users/\${userId}\`);
  const data = await response.json();
  return data;
}

// Using the function
const user = await fetchUserData(123);
console.log(user);`,
    explanation: "This example demonstrates how to consume a REST API using the modern `fetch` API with `async/await`. It shows a simple function to get user data by ID, parsing the JSON response, and handling the asynchronous nature of network requests.",
    explanationAr: "يوضح هذا المثال كيفية استهلاك REST API باستخدام `fetch` API الحديثة مع `async/await`. يظهر دالة بسيطة للحصول على بيانات المستخدم بواسطة المعرف، تحليل استجابة JSON، والتعامل مع الطبيعة غير المتزامنة لطلبات الشبكة.",
    resources: {
      title: 'Additional Resources',
      titleAr: 'موارد إضافية',
      links: [
        { label: 'REST API Tutorial', url: 'https://restfulapi.net' },
        { label: 'MDN Fetch API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API' },
      ],
    },
  },
  {
    id: 'graphql-intro',
    title: 'Introduction to GraphQL',
    titleAr: 'مقدمة في GraphQL',
    description: 'Learn how to use GraphQL for flexible data fetching',
    descriptionAr: 'تعلم كيفية استخدام GraphQL لجلب البيانات بمرونة',
    difficulty: 'intermediate',
    estimatedTime: 60,
    codeExample: `// GraphQL Query Example
const GET_USER = \`
  query GetUser($id: ID!) {
    user(id: $id) {
      name
      email
      posts {
        title
        content
      }
    }
  }
\`;

// Executing the query
const { data } = await client.query({
  query: GET_USER,
  variables: { id: "123" }
});`,
    explanation: "This example introduces GraphQL, a query language for APIs. Unlike REST, GraphQL allows clients to request exactly the data they need. The example shows a query to fetch a user's name, email, and posts, demonstrating nested data fetching in a single request.",
    explanationAr: "يقدم هذا المثال GraphQL، وهي لغة استعلام واجهات برمجة التطبيقات. على عكس REST، يسمح GraphQL للعملاء بطلب البيانات التي يحتاجونها بالضبط. يظهر المثال استعلاماً لجلب اسم المستخدم، بريده الإلكتروني، ومنشوراته، مما يوضح جلب البيانات المتداخلة في طلب واحد.",
    resources: {
      title: 'Additional Resources',
      titleAr: 'موارد إضافية',
      links: [
        { label: 'GraphQL Documentation', url: 'https://graphql.org/learn' },
        { label: 'Apollo Client', url: 'https://www.apollographql.com/docs/react' },
      ],
    },
  },
];

