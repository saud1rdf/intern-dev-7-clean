# Designing a Shared State Layer in Large React Applications

## Overview

In small React apps, local state is often enough. As apps grow, “shared state” becomes a significant source of complexity:

- Multiple parts of the UI depend on the same data.
- Prop drilling makes components harder to reason about.
- Global stores can easily become bloated and hard to maintain.

In this task, you will design and implement a shared state layer for a non-trivial React application.

## Scenario

You work on an internal dashboard with:

- User session and permissions.
- Feature flags (who sees which features).
- Global filters (e.g. date range, environment, team).
- Notifications and toasts shared across pages.

Currently, these concerns are scattered: some stored in top-level components, some hidden in deep children, some duplicated.

## Requirements

1. Identify shared state domains:
   - Authentication/session/user profile.
   - Permissions/roles.
   - Feature flags.
   - Global filters.
   - Global UI state (theme, toasts, modals).
2. Decide which of these should live in:
   - A dedicated global store (e.g. Redux, Zustand).
   - Contexts with custom hooks.
   - Server-state libraries (React Query/SWR) instead of manually managed stores.
3. Implement a minimal shared state layer:
   - Define clear, typed selectors/hooks for accessing each slice of state.
   - Avoid leaking implementation details (e.g. do not expose raw store objects everywhere).
4. Document the usage:
   - Provide examples of how page-level components use the shared state.
   - Describe how to add new shared state without breaking existing features.

## Expected Deliverables

- A state layer implementation (store + hooks + types).
- A short design document explaining the boundaries between local/shared/server state.
- Example components/pages refactored to use the new shared state layer.

## Discussion Points

- How do you avoid putting *too much* into global/shared state?
- How do you structure a store so that refactors do not ripple through the entire codebase?
- What is the relationship between shared state and server data caching?

## Further Reading

- “Shared State Complexity in React – A Complete Handbook” – freeCodeCamp.
- “Modern React State Management in 2025: A Practical Guide” – dev.to.
- Official docs and patterns for Redux, Zustand, Jotai, and similar libraries.
