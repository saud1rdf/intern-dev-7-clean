// src/app/docs/version-control/data.ts

import { Topic } from '../types';

export const versionControlTopics: Topic[] = [
  {
    id: 'git-basics',
    title: 'Git Basics',
    titleAr: 'أساسيات Git',
    description: 'Learn the fundamentals of Git version control system',
    descriptionAr: 'تعلم أساسيات نظام التحكم في الإصدارات Git',
    difficulty: 'beginner',
    estimatedTime: 45,
    codeExample: `# Initialize a new Git repository
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
git checkout -b feature-branch`,
    explanation: "This section covers the fundamental Git commands for initializing a repository, checking status, staging files, committing changes, viewing history, and managing branches. These are the daily drivers for any developer using Git.",
    explanationAr: "يغطي هذا القسم أوامر Git الأساسية لتهيئة المستودع، التحقق من الحالة، تجهيز الملفات، اعتماد التغييرات (commit)، عرض السجل، وإدارة الفروع. هذه هي الأدوات اليومية لأي مطور يستخدم Git.",
    resources: {
      title: 'Additional Resources',
      titleAr: 'موارد إضافية',
      links: [
        { label: 'Git Documentation', url: 'https://git-scm.com/docs' },
        { label: 'Atlassian Git Tutorials', url: 'https://www.atlassian.com/git/tutorials' },
      ],
    },
  },
  {
    id: 'git-branching',
    title: 'Branching and Merging',
    titleAr: 'الفروع والدمج',
    description: 'Master Git branching strategies and merge workflows',
    descriptionAr: 'إتقان استراتيجيات الفروع في Git وسير عمل الدمج',
    difficulty: 'intermediate',
    estimatedTime: 60,
    codeExample: `# List all branches
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
git diff main..feature/new-feature`,
    explanation: "This example demonstrates how to work with branches: creating, switching, merging, and deleting them. It also introduces `rebase` as an alternative to merge for maintaining a linear history, and how to view differences between branches.",
    explanationAr: "يوضح هذا المثال كيفية العمل مع الفروع: إنشاؤها، التبديل بينها، دمجها، وحذفها. كما يقدم `rebase` كبديل للدمج للحفاظ على تاريخ خطي، وكيفية عرض الفروقات بين الفروع.",
    resources: {
      title: 'Additional Resources',
      titleAr: 'موارد إضافية',
      links: [
        { label: 'Git Branching Guide', url: 'https://www.atlassian.com/git/tutorials/using-branches' },
        { label: 'GitHub Branching', url: 'https://docs.github.com/en/get-started/using-git' },
      ],
    },
  },
  {
    id: 'github-workflow',
    title: 'GitHub Workflow',
    titleAr: 'سير عمل GitHub',
    description: 'Learn how to collaborate using GitHub with pull requests and code reviews',
    descriptionAr: 'تعلم كيفية التعاون باستخدام GitHub مع Pull Requests ومراجعة الكود',
    difficulty: 'intermediate',
    estimatedTime: 60,
    codeExample: `# Clone a repository from GitHub
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
git pull origin main`,
    explanation: "This workflow outlines the standard process for collaborating on GitHub: cloning, pushing branches, and creating Pull Requests. It emphasizes the cycle of local development -> push to remote -> pull request -> merge -> pull updates locally.",
    explanationAr: "يحدد سير العمل هذا العملية القياسية للتعاون على GitHub: الاستنساخ، رفع الفروع، وإنشاء طلبات السحب (Pull Requests). يؤكد على دورة التطوير المحلي -> الرفع إلى البعيد -> طلب السحب -> الدمج -> سحب التحديثات محلياً.",
    resources: {
      title: 'Additional Resources',
      titleAr: 'موارد إضافية',
      links: [
        { label: 'GitHub Getting Started', url: 'https://docs.github.com/en/get-started/using-git' },
        { label: 'Developer Roadmap - Git', url: 'https://github.com/kamranahmedse/developer-roadmap' },
      ],
    },
  },
  {
    id: 'git-advanced',
    title: 'Advanced Git Operations',
    titleAr: 'عمليات Git المتقدمة',
    description: 'Learn advanced Git commands for conflict resolution and history management',
    descriptionAr: 'تعلم أوامر Git المتقدمة لحل التعارضات وإدارة التاريخ',
    difficulty: 'advanced',
    estimatedTime: 75,
    codeExample: `# Resolve merge conflicts
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
git rebase -i HEAD~3  # Edit last 3 commits`,
    explanation: "This advanced section covers handling merge conflicts, undoing changes with `reset` and `checkout`, using `stash` to temporarily save work, and interactive rebasing to clean up commit history. These tools are essential for maintaining a clean and error-free codebase.",
    explanationAr: "يغطي هذا القسم المتقدم التعامل مع تعارضات الدمج، التراجع عن التغييرات باستخدام `reset` و `checkout`، استخدام `stash` لحفظ العمل مؤقتاً، و `rebase` التفاعلي لتنظيف تاريخ الالتزامات. هذه الأدوات ضرورية للحفاظ على قاعدة كود نظيفة وخالية من الأخطاء.",
    resources: {
      title: 'Additional Resources',
      titleAr: 'موارد إضافية',
      links: [
        { label: 'Git Advanced Topics', url: 'https://www.atlassian.com/git/tutorials/advanced-overview' },
        { label: 'Git SCM Book', url: 'https://git-scm.com/book' },
      ],
    },
  },
];








