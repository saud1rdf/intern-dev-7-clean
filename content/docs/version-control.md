# Version Control

## Git Basics

### 📘 Overview
Learn the fundamentals of Git version control system. This section covers the essential commands for managing your code history.

### 🧠 Step-by-step Breakdown
1. Initialize a repository and check its status.
2. Stage files to prepare them for committing.
3. Commit changes with a descriptive message.
4. View the commit history and manage branches for parallel development.

### 🧩 Code Example
```bash
# Initialize a new Git repository
git init

# Check the status of your repository
git status

# Add files to staging area
git add filename.js
git add .  # Add all files

# Commit your changes
git commit -m "Add initial project files"

# View commit history
git log
git log --oneline  # Compact view

# Create and switch to a new branch
git branch feature-branch
git checkout feature-branch
# or use shorthand:
git checkout -b feature-branch
```

### 📝 Notes
These commands form the daily workflow for any developer using Git.
Resources:
- Git Documentation
- Atlassian Git Tutorials

---

## Branching and Merging

### 📘 Overview
Master Git branching strategies and merge workflows. This allows you to work on features in isolation and integrate them back into the main codebase.

### 🧠 Step-by-step Breakdown
1. Create and switch between branches to isolate work.
2. Merge changes from one branch into another.
3. Delete branches that are no longer needed.
4. Use `rebase` for a linear history and `diff` to view changes.

### 🧩 Code Example
```bash
# List all branches
git branch
git branch -a  # Show all branches including remote

# Create and switch to a new branch
git checkout -b feature/new-feature

# Switch between branches
git checkout main
git checkout feature/new-feature

# Merge a branch into current branch
git checkout main
git merge feature/new-feature

# Delete a branch
git branch -d feature/new-feature  # Safe delete
git branch -D feature/new-feature  # Force delete

# Rebase current branch onto another
git checkout feature/new-feature
git rebase main

# View differences between branches
git diff main..feature/new-feature
```

### 📝 Notes
Branching and merging are fundamental for managing parallel development efforts.
Resources:
- Git Branching Guide
- GitHub Branching

---

## GitHub Workflow

### 📘 Overview
Learn how to collaborate using GitHub with pull requests and code reviews. This workflow enables team collaboration on a shared repository.

### 🧠 Step-by-step Breakdown
1. Clone a repository and add a remote.
2. Push local branches to GitHub.
3. Pull the latest changes from the remote repository.
4. Follow the cycle: local development -> push -> pull request -> merge -> pull updates.

### 🧩 Code Example
```bash
# Clone a repository from GitHub
git clone https://github.com/username/repository.git
cd repository

# Add remote repository
git remote add origin https://github.com/username/repository.git
git remote -v  # View remotes

# Push your branch to GitHub
git push origin feature-branch
git push -u origin feature-branch  # Set upstream

# Pull latest changes from remote
git pull origin main
git fetch origin  # Fetch without merging
git merge origin/main  # Merge fetched changes

# View remote branches
git branch -r

# Create a pull request workflow:
# 1. Create feature branch locally
git checkout -b feature/add-button

# 2. Make changes and commit
git add .
git commit -m "Add new button component"

# 3. Push to GitHub
git push origin feature/add-button

# 4. Create Pull Request on GitHub website
# 5. After merge, update local main
git checkout main
git pull origin main
```

### 📝 Notes
This standard workflow ensures smooth collaboration and code review processes.
Resources:
- GitHub Getting Started
- Developer Roadmap - Git

---

## Advanced Git Operations

### 📘 Overview
Learn advanced Git commands for conflict resolution and history management. These tools help you handle complex situations and maintain a clean project history.

### 🧠 Step-by-step Breakdown
1. Resolve merge conflicts by manually editing files.
2. Undo changes using `reset` and `checkout`.
3. Use `stash` to temporarily save work without committing.
4. Perform interactive rebasing to clean up commit history.

### 🧩 Code Example
```bash
# Resolve merge conflicts
git status  # See conflicted files
# Edit files manually to resolve conflicts
git add resolved-file.js
git commit -m "Resolve merge conflicts"

# Undo changes
git checkout -- filename.js  # Discard changes in working directory
git reset HEAD filename.js  # Unstage file
git reset --soft HEAD~1  # Undo last commit, keep changes staged
git reset --hard HEAD~1  # Undo last commit, discard changes

# Stash changes temporarily
git stash  # Save changes
git stash list  # View stashes
git stash pop  # Apply and remove stash
git stash apply  # Apply but keep stash

# View and revert to previous commits
git log --oneline
git checkout commit-hash  # View old version
git checkout main  # Return to latest

# Create tags for releases
git tag v1.0.0
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0

# Interactive rebase (clean up history)
git rebase -i HEAD~3  # Edit last 3 commits
```

### 📝 Notes
Advanced operations are essential for maintaining a healthy and error-free codebase.
Resources:
- Git Advanced Topics
- Git SCM Book
