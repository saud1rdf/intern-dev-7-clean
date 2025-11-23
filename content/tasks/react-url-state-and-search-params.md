# URL-based State Management & Search Params in React

## Overview

URL-based state is a powerful pattern where part of the application state is encoded directly in the URL (path segments, query parameters, hash). This enables:

- Deep links and shareable URLs.
- Back/forward navigation that actually preserves the UI state.
- Multi-tab scenarios where each tab has its own state.

In this task, you will refactor an existing feature to move **search, filters, pagination, and selected tab** into the URL.

## Scenario

You work on an internal “Task Catalog” for interns. The current implementation uses only React state:

- `searchTerm` in a component.
- `selectedTags` in a parent.
- `page` number in local state.

When the user refreshes the page, everything resets. When they copy the URL to a teammate, the same list is not reproduced.

The team wants all of this to be represented in the URL so that:

- A link like `/tasks?search=cache&tag=backend&page=2&sort=latest` fully reproduces the state.
- The browser history correctly tracks changes.

## Requirements

1. Define a URL schema for the feature:
   - Decide which state belongs in the URL (search, filters, sort, pagination, selected tab).
   - Define the query parameters and default values.
2. Implement a two-way binding between React state and the URL:
   - Initialize component state from the URL on first render.
   - Push updates to the URL whenever state changes.
3. Handle edge cases:
   - Invalid values in the URL.
   - Missing or partial parameters.
   - Back/forward navigation.
4. Document your solution in a short design note:
   - Why each piece of state belongs (or does not belong) in the URL.
   - How future contributors should extend the URL schema.

## Expected Deliverables

- Refactored React code that uses URL/search params as a single source of truth for view-level state.
- A short markdown doc explaining your schema and justification.
- Manual test cases for:
  - Opening a deep link.
  - Refreshing the page.
  - Using back/forward in the browser.

## Discussion Points

- What state should **never** go into the URL (e.g. sensitive, internal-only data)?
- How do you keep URLs readable while still encoding enough state?
- How do you avoid coupling too many components to the URL shape?

## Further Reading

- “Advanced React state management using URL parameters” – LogRocket Blog.
- “How to control a React component with the URL” – Build UI.
- “URL-based state management in React with TypeScript” – example repositories on GitHub.
