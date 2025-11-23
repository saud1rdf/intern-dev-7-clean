# Profiling & Optimizing a Node.js API Under High Traffic

## Overview

Node.js can handle large amounts of traffic efficiently, but only when the application is designed around non-blocking operations, efficient resource usage, and proper observability.

In this task, you will analyze and optimize a Node.js service that starts to degrade under realistic load.

## Scenario

You inherit a Node.js REST API that powers an internal dashboard. Under low traffic it behaves fine, but when:

- Concurrent requests exceed a few hundred,
- Response times spike,
- CPU usage on the server is pegged,
- Occasional timeouts and 5xx errors appear.

Your task is to do a **performance investigation**, not just random micro-optimizations.

## Requirements

1. **Establish a baseline**:
   - Use a load-testing tool (k6, autocannon, wrk, or similar) to characterize throughput and latency.
   - Capture basic metrics: p95/p99 latency, error rate, CPU & memory usage.
2. **Profile the service**:
   - Use Node’s built-in inspector, `clinic.js`, or similar tools to inspect CPU profiles and event loop blocking.
   - Identify synchronous hotspots (heavy computations, blocking I/O, synchronous crypto, etc.).
3. **Identify bottlenecks and propose changes**:
   - Remove or offload CPU-bound tasks (e.g. move to worker threads or a job queue).
   - Add caching where appropriate (e.g. Redis, in-memory cache layer).
   - Optimize database queries and connection usage.
4. **Measure again** after changes:
   - Re-run the same load test and compare metrics.
   - Document the impact (before/after charts or summary).

## Expected Deliverables

- A short performance report (markdown) including:
  - Baseline metrics.
  - Identified bottlenecks.
  - Changes applied.
  - New metrics and their interpretation.
- A list of recommended next steps (e.g. monitoring, alerting, future refactors).

## Discussion Points

- How do you differentiate between I/O-bound and CPU-bound problems in Node.js?
- Why can a single blocking operation degrade performance for all concurrent requests?
- Where is the right place to introduce caching, and how do you invalidate it safely?

## Further Reading

- “Optimizing Node.js Performance: Best Practices for High-Traffic Applications” – various technical blogs and dev.to articles.
- “Performance Best Practices Using Express in Production” – Express.js documentation.
- Node.js official docs on performance, profiling, and event loop behavior.
