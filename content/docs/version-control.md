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

### Explanation
This section covers the essential commands to start using Git. `git init` creates a new Git repository in your current directory. `git status` shows you which files are modified or untracked. `git add` moves changes from the working directory to the staging area, preparing them to be committed. `git commit` saves the staged changes to the repository history with a descriptive message. `git log` displays the history of commits, while `git branch` and `git checkout` are used to create and switch between different lines of development (branches), allowing you to work on features in isolation.
**باختصار بالعربي:** هذه الأوامر الأساسية لإنشاء مستودع، حفظ التغييرات، وعرض السجل.

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

### Explanation
Branching allows you to diverge from the main line of development and continue to do work without messing with that main line. `git checkout -b` creates and switches to a new branch in one step. Once work is done, you switch back to the main branch (`git checkout main`) and use `git merge` to combine the changes from your feature branch. If a branch is no longer needed, `git branch -d` deletes it. `git rebase` is an alternative to merging that reapplies commits on top of another base tip, creating a linear history. `git diff` shows the changes between two branches.
**باختصار بالعربي:** الفروع تسمح بالعمل المنفصل، والدمج يجمع التغييرات، بينما `rebase` يعيد ترتيب الالتزامات لتاريخ خطي.

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

### Explanation
This workflow demonstrates how to collaborate with others using GitHub. `git clone` copies a remote repository to your local machine. `git push` uploads your local commits to the remote repository, while `git pull` fetches and merges changes from the remote to your local branch. The standard collaboration cycle involves creating a local branch, making changes, pushing that branch to GitHub, and then opening a Pull Request (PR) to discuss and review the code before merging it into the main codebase. This ensures code quality and team coordination.
**باختصار بالعربي:** هذا هو سير العمل القياسي للتعاون: استنساخ، رفع التغييرات، وإنشاء طلبات سحب للمراجعة.

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

### Explanation
This section covers advanced tools for fixing mistakes and managing history. When a merge conflict occurs, you must manually edit the conflicting files, then add and commit them. `git reset` is a powerful command to undo changes: `--soft` keeps your changes staged, while `--hard` discards them entirely. `git stash` temporarily shelves your changes so you can switch branches without committing incomplete work. Interactive rebase (`git rebase -i`) allows you to edit, squash, or reorder previous commits, which is useful for cleaning up your commit history before merging.
**باختصار بالعربي:** أدوات متقدمة لحل التعارضات، التراجع عن الأخطاء، وتنظيف سجل الالتزامات.

### 📝 Notes
Advanced operations are essential for maintaining a healthy and error-free codebase.
Resources:
- Git Advanced Topics
- Git SCM Book
