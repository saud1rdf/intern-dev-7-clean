# Redesigning an Existing REST API to Follow Best Practices

## Overview

REST APIs often start simple and then evolve into inconsistent, hard-to-use interfaces. Good API design improves maintainability, discoverability, and client experience.

In this task, you will take a small REST API and redesign it to align with widely accepted best practices.

## Scenario

You are given an API that exposes resources related to “tasks” and “interns”. Current issues include:

- Verb-based endpoints like `/getAllTasks` or `/createNewTask`.
- Inconsistent naming and casing.
- Overloaded endpoints that behave differently based on query parameters.
- Poorly structured error responses.

Your lead wants a proposal that:
- Cleans up the URL structure.
- Standardizes HTTP methods and status codes.
- Introduces consistent pagination, filtering, and error formats.

## Requirements

1. Analyze the current API:
   - List all endpoints, methods, and response shapes.
   - Identify inconsistencies and anti-patterns.
2. Propose a new design:
   - Resource-oriented URLs (e.g. `/tasks`, `/tasks/{id}`, `/interns/{id}/tasks`).
   - Proper use of HTTP verbs (GET, POST, PUT, PATCH, DELETE).
   - Pagination (limit/offset or cursor-based).
   - Filtering and sorting conventions.
3. Design error handling:
   - A consistent error envelope (e.g. `{ code, message, details, correlationId }`).
   - Clear mapping between error scenarios and status codes.
4. Document your redesign:
   - A markdown API spec describing each endpoint, method, parameters, and responses.
   - Migration notes: how to deprecate old endpoints safely.

## Expected Deliverables

- A redesigned API spec that could replace the current one.
- Example request/response bodies demonstrating the new style.
- A list of improvements vs. the original design.

## Discussion Points

- How do you design APIs that are resilient to future changes (versioning, optional fields)?
- When would you choose resource-based endpoints vs. action-based patterns?
- How do you balance simplicity for clients with internal constraints?

## Further Reading

- “Best practices for RESTful web API design” – Microsoft Learn / Azure Architecture Center.
- “Microsoft REST API Guidelines” – public guidance used by large-scale Microsoft APIs.
- “REST API Best Practices” – references like restfulapi.net.
