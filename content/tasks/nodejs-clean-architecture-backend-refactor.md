# Refactoring a Node.js Backend into Clean Architecture

## Overview

Clean Architecture aims to separate business rules from technical details, making systems easier to test, maintain, and evolve. For Node.js backends, this often means:

- Isolating domain logic from frameworks (Express/Fastify) and databases.
- Using ports and adapters to model interactions with the outside world.
- Enforcing clear boundaries between layers.

In this task, you will refactor a small Node.js service towards a Clean Architecture style.

## Scenario

You receive a Node.js/Express project where:

- Route handlers contain database queries and business logic.
- There is no clear separation between “what the system does” and “how it is wired to the outside world”.
- Tests are fragile and tightly coupled to Express and a specific DB.

Your goal is to refactor part of this codebase into a structure that:

- Puts business rules in a domain layer.
- Wraps use cases in application services.
- Treats Express and the database as infrastructure concerns.

## Requirements

1. Define a target folder structure:
   - `domain/` (entities, value objects, domain services)
   - `application/` (use cases, ports)
   - `infrastructure/` (ORM, DB, external APIs)
   - `interface/` or `presentation/` (HTTP controllers, routes)
2. Identify a core use case (e.g. “CreateTask”, “AssignTaskToIntern”):
   - Move its business logic into the domain and application layers.
   - Define interfaces/ports for persistence and external services.
3. Adapt the Express routes:
   - Controllers should call use cases, not contain business logic.
   - Use dependency injection or factory functions to wire everything.
4. Add or improve tests:
   - Unit tests that exercise domain logic without hitting Express or the real DB.
   - Optionally, integration tests at the API boundary.

## Expected Deliverables

- A refactored folder structure with at least one use case fully migrated.
- Updated route handlers that delegate to application-level use cases.
- A test suite covering core domain logic.

## Discussion Points

- How does Clean Architecture differ from layered (N-tier) architecture?
- Where does validation belong (domain vs. application vs. interface)?
- How do you gradually introduce Clean Architecture into an existing codebase without rewrites?

## Further Reading

- Example repositories implementing Clean Architecture in Node.js (search “node.js clean architecture” on GitHub).
- “Clean Architecture” by Robert C. Martin (Uncle Bob) – the original book.
- Articles and case studies on applying Clean Architecture in JavaScript/TypeScript backends.
