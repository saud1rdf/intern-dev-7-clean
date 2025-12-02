# Web Development

## Introduction to React

### 📘 Overview
Learn the fundamentals of React and how to build interactive components. This topic covers the basic usage of hooks to manage state within a functional component.

### 🧠 Step-by-step Breakdown
1. Initialize a state variable `count` with 0 using the `useState` hook.
2. The `setCount` function is provided to update this value.
3. When the "Increment" or "Decrement" buttons are clicked, the state updates.
4. React automatically re-renders the component to display the new count value.

### 🧩 Code Example
```typescript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
```

### Explanation
This code defines a functional component named `Counter` that maintains a numeric state. We import the `useState` hook from React, which allows us to add state to function components. Inside the function, `useState(0)` initializes a state variable `count` with a value of `0` and provides a function `setCount` to update it. The component returns JSX that displays the current count in an `<h2>` tag. Two buttons are provided: one to increment the count and one to decrement it. When a button is clicked, `setCount` is called with the new value (current count + 1 or - 1), triggering a re-render of the component to update the UI.
**باختصار بالعربي:** هذا المكون يستخدم `useState` لإنشاء عداد بسيط يمكن زيادته أو نقصانه عند الضغط على الأزرار.

### 📝 Notes
Key concepts include the `useState` hook and component re-rendering upon state changes.
Resources:
- React Documentation
- freeCodeCamp React Course

---

## State Management in React

### 📘 Overview
Understand how to manage state in complex React applications. This section explores advanced state management techniques for sharing data across components.

### 🧠 Step-by-step Breakdown
1. `useReducer` is used to handle complex state logic, such as incrementing and decrementing a count.
2. `useContext` is employed to share this state across the component tree.
3. This approach eliminates the need to pass props manually at every level (prop drilling).

### 🧩 Code Example
```typescript
import React, { createContext, useContext, useReducer } from 'react';

// Context
const AppContext = createContext();

// Reducer
function appReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

// Provider
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, { count: 0 });
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

// Hook
export function useApp() {
  return useContext(AppContext);
}
```

### Explanation
This example demonstrates advanced state management using `useReducer` and `useContext`. First, we create a Context object `AppContext` to share data globally. We define a reducer function `appReducer` that takes the current state and an action, returning a new state based on the action type (INCREMENT or DECREMENT). The `AppProvider` component uses `useReducer` to manage the state logic and wraps its children in `AppContext.Provider`, passing down the state and dispatch function. Finally, the `useApp` custom hook simplifies accessing this context from any child component. This pattern is powerful for managing complex state across a large application without passing props through every level.
**باختصار بالعربي:** نستخدم هنا `useReducer` لإدارة منطق الحالة المعقد و `useContext` لمشاركته مع جميع المكونات الفرعية بسهولة.

### 📝 Notes
Managing complex state effectively involves combining `useReducer` for logic and `useContext` for distribution.
Resources:
- React Context API
- State Management Guide

---

## Next.js and SSR

### 📘 Overview
Learn how to use Next.js to build fast web applications. This topic focuses on Server-Side Rendering (SSR) to deliver content efficiently.

### 🧠 Step-by-step Breakdown
1. The `getServerSideProps` function runs on the server for every incoming request.
2. It fetches the required data (e.g., from an API) before the page is rendered.
3. The page is then sent to the browser with the data already populated.
4. This process improves SEO and ensures users see the most up-to-date content immediately.

### 🧩 Code Example
```typescript
import { GetServerSideProps } from 'next';

interface Props {
  data: {
    title: string;
    content: string;
  };
}

export default function BlogPost({ data }: Props) {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  
  // Fetch data from API
  const res = await fetch(`https://api.example.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
```

### Explanation
This code shows how to implement Server-Side Rendering (SSR) in a Next.js page. The `getServerSideProps` function is a special Next.js function that runs on the server for every request. Inside this function, we extract the `id` from the URL parameters and fetch the corresponding blog post data from an external API. The fetched `data` is then returned as props to the `BlogPost` component. When the user visits the page, the server generates the HTML with the data already populated, ensuring the content is visible immediately and is indexable by search engines.
**باختصار بالعربي:** تقوم دالة `getServerSideProps` بجلب البيانات على الخادم قبل عرض الصفحة، مما يحسن الأداء ومحركات البحث.

### 📝 Notes
Server-Side Rendering (SSR) is crucial for SEO and delivering dynamic content that needs to be fresh on every request.
Resources:
- Next.js Documentation
- SSR Guide
