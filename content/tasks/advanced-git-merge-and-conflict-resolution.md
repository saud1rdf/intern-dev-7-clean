# Advanced Git Conflict Resolution & History Management

## Overview

Basic Git usage is not enough when dealing with non-trivial histories, long-lived branches, and complex merges. Engineers must be able to:

- Resolve multi-file, multi-branch conflicts.
- Decide when to use merge vs. rebase vs. cherry-pick.
- Keep the main branch history readable and debuggable.

In this task, you will work with a deliberately messy Git history and practice advanced conflict resolution.

## Scenario

The repository has:

- A `main` branch.
- Several feature branches that diverged weeks ago.
- Conflicting edits in the same files (and sometimes the same lines).
- Some commits with poor messages or mistaken changes.

Your task is to bring multiple branches back together in a controlled, well-documented way.

## Requirements

1. Clone the repository and inspect the history:
   - Use `git log --graph --oneline --all` to visualize branches.
   - Identify where branches diverged and what changed.
2. Practice different strategies:
   - Merge feature branches into `main`, resolving conflicts.
   - Try rebasing a feature branch onto `main` to linearize history.
   - Use cherry-pick to move selected commits between branches.
3. For at least one complex conflict:
   - Use a three-way merge tool or diffs to understand both sides of the change.
   - Document the reasoning behind your resolution.
4. Clean up history where appropriate:
   - Use interactive rebase to squash or edit commits in a feature branch before merge.
   - Ensure commit messages clearly describe what changed and why.

## Expected Deliverables

- A merged `main` branch with consistent, working code.
- A text log (markdown) describing:
  - Which strategy you used for each branch (merge/rebase/cherry-pick).
  - At least one complex conflict and how you resolved it.
- A short set of “house rules” for future Git usage on this repo.

## Discussion Points

- When is it preferable to rebase instead of merge? When is merge safer?
- How do you avoid rewriting shared history in a way that breaks teammates?
- How can Git hooks and branch protection rules enforce good practices?

## Further Reading

- “Advanced Git merge conflict resolution techniques” – Atlassian Community.
- Atlassian Git tutorials on merge vs. rebase vs. cherry-pick.
- “Merge strategies in Git” – Baeldung and similar DevOps resources.
