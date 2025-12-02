# API Integration

## REST API Fundamentals

### 📘 Overview
Learn the fundamentals of REST API design and implementation. This section demonstrates how to consume external data sources in your application.

### 🧠 Step-by-step Breakdown
1. Use the modern `fetch` API with `async/await` to make network requests.
2. Create a function to get user data by ID from a REST endpoint.
3. Parse the JSON response returned by the API.
4. Handle the asynchronous nature of the operation to ensure data is ready before use.

### 🧩 Code Example
```typescript
// Example: Fetching data from REST API
async function fetchUserData(userId) {
  const response = await fetch(`https://api.example.com/users/${userId}`);
  const data = await response.json();
  return data;
}

// Using the function
const user = await fetchUserData(123);
console.log(user);
```

### 📝 Notes
Consuming REST APIs is a core skill, involving fetching, parsing, and handling asynchronous data.
Resources:
- REST API Tutorial
- MDN Fetch API

---

## Introduction to GraphQL

### 📘 Overview
Learn how to use GraphQL for flexible data fetching. This approach allows for more precise data queries compared to traditional REST APIs.

### 🧠 Step-by-step Breakdown
1. GraphQL allows clients to request exactly the data they need, avoiding over-fetching.
2. The query specifies the fields required: user's name, email, and posts.
3. Nested data (posts within user) is fetched in a single request.
4. The client executes the query and receives the structured data.

### 🧩 Code Example
```typescript
// GraphQL Query Example
const GET_USER = `
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
`;

// Executing the query
const { data } = await client.query({
  query: GET_USER,
  variables: { id: "123" }
});
```

### 📝 Notes
GraphQL enables efficient data fetching by allowing clients to specify the exact structure of the response.
Resources:
- GraphQL Documentation
- Apollo Client
