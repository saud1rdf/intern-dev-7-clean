# Advanced React State Architecture (Local, Shared, Remote, URL)

## Overview

In a real-world React application (dashboards, internal tools, multi-page flows), “state” is not a single thing. You need to distinguish between multiple *kinds* of state and design an architecture that treats each one differently instead of pushing everything into a single global store.

In this task, you will:
- Classify state in an existing React app into **local**, **shared**, **remote/server**, and **URL** state.
- Propose a concrete architecture that maps each state type to an appropriate tool or pattern.
- Identify anti-patterns (e.g. “everything in Redux”, “everything in Context”) and refactor them into a cleaner design.

This task assumes you are already comfortable with React hooks, Context, and at least one state-management library (Redux, Zustand, Jotai, etc.).

## Scenario

You join a team working on an intern onboarding dashboard. The current React codebase has grown organically:

- Some components keep everything in `useState`.
- Other features introduced Redux a year ago but never cleaned up old code.
- There is a lot of prop drilling.
- URL parameters are not used at all; filters and tab selections are lost on refresh.

Your lead asks you to audit the state model and propose a modern architecture that:

1. Keeps **local UI state** local (inputs, toggles, open/close flags).
2. Extracts **shared state** into a well-defined layer (e.g. Context + custom hooks or Zustand/Redux store).
3. Models **server/data state** explicitly (queries, caching, invalidation).
4. Uses **URL state** for anything that should survive refresh, be shareable, or be deep-linked.

## Requirements

1. **Identify state categories** in a real feature (e.g. “Task Explorer” page, “Intern Profile” page).
2. For each piece of state, decide whether it is:
   - Local UI state (component-only).
   - Shared UI state (spans multiple components).
   - Remote/data state (fetched from APIs).
   - URL state (filters, search queries, pagination, selected tab, etc.).
3. Propose and document an architecture that uses:
   - `useState` / `useReducer` for local state.
   - Context + custom hooks or a library (Zustand / Redux) for shared UI state.
   - A data-fetching layer (React Query / SWR or a custom abstraction) for server state.
   - URL/query-parameter based state for deep-linkable filters and navigation state.
4. Provide a short **architecture document** (1–2 pages) describing:
   - The state taxonomy you will use.
   - Where each state lives (component, hook, store, URL).
   - How new features should plug into this model.

## Expected Deliverables

- A mapping table (or markdown section) listing concrete state variables and their type (local/shared/remote/URL).
- A proposed “State Layer Diagram” (textual description is fine) showing how components talk to stores, data-fetching, and URL.
- A short guide for future contributors: “How to decide where your state belongs”.

## Discussion Points

- When does global state become an anti-pattern?
- How do you prevent “store bloat” when using Redux/Zustand?
- How do you avoid duplicating server state in local/global state?

## Further Reading (for interns)

- “React State Management in 2025: What You Actually Need” – DeveloperWay.
- “Shared State Complexity in React – A Complete Handbook” – freeCodeCamp.
- “Modern React State Management in 2025: A Practical Guide” – dev.to.
