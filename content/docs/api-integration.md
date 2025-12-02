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

### Explanation
This function `fetchUserData` retrieves user information from a remote server using the Fetch API. It is defined as an `async` function, allowing us to use the `await` keyword for cleaner asynchronous code. First, `fetch` sends a GET request to the specified URL with the `userId`. We then `await` the response and call `.json()` to parse the response body into a JavaScript object. Finally, the function returns this data object. The example also shows how to call this function and log the result, handling the asynchronous operation seamlessly.
**باختصار بالعربي:** تستخدم هذه الدالة `fetch` و `async/await` لجلب بيانات المستخدم من الخادم وتحويلها إلى كائن JavaScript.

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

### Explanation
This example illustrates how to fetch data using GraphQL. We define a query `GET_USER` that specifies exactly which fields we want: the user's name, email, and their posts (title and content). This prevents over-fetching of unnecessary data, a common issue in REST APIs. The `client.query` method executes this query against the GraphQL server, passing the `id` as a variable. The result contains a `data` object with the exact structure we requested. This approach allows for efficient and flexible data retrieval in a single network request.
**باختصار بالعربي:** يسمح GraphQL بتحديد البيانات المطلوبة بدقة (الاسم، البريد، المنشورات) لجلبها في طلب واحد فقط.

### 📝 Notes
GraphQL enables efficient data fetching by allowing clients to specify the exact structure of the response.
Resources:
- GraphQL Documentation
- Apollo Client
