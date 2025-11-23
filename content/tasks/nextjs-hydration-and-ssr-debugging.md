# Debugging SSR & Hydration Mismatches in Next.js

## Overview

Next.js applications render components on the server and then “hydrate” them on the client. When the markup or state generated on the server does not match what React expects on the client, you get hydration errors.

In this task, you will analyze and fix hydration issues in a Next.js application.

## Scenario

An onboarding dashboard built with Next.js shows warnings like:

> Warning: Text content does not match server-rendered HTML.

Users also report subtle glitches:

- Some components flicker on load.
- Certain values differ just after hydration and then “snap” to a new value.

Your task is to:

- Find the root causes.
- Implement robust fixes.
- Document guidelines to prevent similar issues in the future.

## Requirements

1. Reproduce the problem:
   - Identify components that render differently on server and client.
   - Add logging (or temporary diagnostics) to compare server vs. client values.
2. Identify categories of issues:
   - Use of browser-only APIs during server render (e.g. `window`, `document`).
   - Non-deterministic rendering (e.g. `Date.now()`, random IDs).
   - Conditional logic that behaves differently in server vs. client environments.
3. Implement fixes:
   - Move browser-only logic into `useEffect` or client-only components.
   - Stabilize IDs and key props to avoid mismatches.
   - Use appropriate Next.js patterns (e.g. `dynamic()` with `ssr: false` where justified).
4. Write a short “Hydration Checklist” for the codebase:
   - Rules for where to place side effects.
   - Patterns to avoid in server components.
   - How to safely integrate third-party libraries.

## Expected Deliverables

- Fixed components with no hydration warnings under normal usage.
- A markdown checklist for developers to prevent new hydration issues.
- A short explanation of SSR vs. hydration in the context of this app.

## Discussion Points

- How does React determine whether the server-rendered markup matches the client render?
- When is it appropriate to opt out of SSR for a component?
- How do you test hydration behavior in CI?

## Further Reading

- “Resolving hydration mismatch errors in Next.js” – LogRocket and similar engineering blogs.
- Official Next.js docs on Server Components, Client Components, and hydration.
- React documentation on hydration and server rendering.
