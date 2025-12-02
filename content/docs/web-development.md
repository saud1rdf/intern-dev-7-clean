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

### 📝 Notes
Server-Side Rendering (SSR) is crucial for SEO and delivering dynamic content that needs to be fresh on every request.
Resources:
- Next.js Documentation
- SSR Guide
