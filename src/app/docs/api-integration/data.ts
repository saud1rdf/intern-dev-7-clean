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

