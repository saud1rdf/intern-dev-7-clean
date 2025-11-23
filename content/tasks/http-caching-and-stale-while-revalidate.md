# Designing HTTP Caching with stale-while-revalidate

## Overview

HTTP caching is a critical performance tool. The `stale-while-revalidate` directive allows you to serve slightly stale content immediately while revalidating it in the background, combining low latency with acceptable freshness.

In this task, you will design and document a caching strategy using `stale-while-revalidate` for a real endpoint or static asset in your system.

## Scenario

Your intern documentation site or dashboard has:

- A “Tasks catalog” API that rarely changes but is read frequently.
- Static documentation pages that are updated a few times per day.

You want these to:

- Load extremely fast for end users.
- Avoid overloading the backend.
- Still stay reasonably up-to-date.

## Requirements

1. Identify candidate resources:
   - Choose at least one API endpoint and one static resource for caching.
2. Design Cache-Control policies:
   - Decide appropriate `max-age`, `s-maxage`, and `stale-while-revalidate` values.
   - Consider differences between browser cache and CDN/reverse-proxy cache.
3. Implement the policy:
   - Configure response headers in your backend or edge function.
   - Optionally, configure service worker caching (e.g. with Workbox) for offline/SPA scenarios.
4. Measure impact:
   - Compare latency and backend load before and after caching.
   - Document trade-offs (potentially stale data vs. performance).

## Expected Deliverables

- A written caching strategy for at least one API and one static resource.
- Example HTTP response headers showing the final configuration.
- Basic measurement data (even simple timing comparisons) illustrating improvements.

## Discussion Points

- How do you pick a safe staleness window for a given endpoint?
- What are the risks of caching error responses or sensitive data?
- How does SWR differ when implemented at the HTTP layer vs. the app layer (e.g. React Query)?

## Further Reading

- “Keeping things fresh with stale-while-revalidate” – web.dev (Google).
- MDN Web Docs: HTTP caching and `Cache-Control` directives.
- Workbox documentation on stale-while-revalidate caching strategies.
