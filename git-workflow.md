# Git Workflow Guide - Professional Portfolio

## Branch Structure
- **`main`**: Production-ready code (protected branch)
- **`develop`**: Default development branch (your working branch)
- **`feature/*`**: Feature branches (optional, for larger features)

## Current Setup
✅ **develop** branch is set as your default working branch
✅ Both main and develop branches are pushed to origin

## Daily Workflow

### 1. Working on develop branch (Default)
```bash
# Ensure you're on develop branch
git checkout develop

# Pull latest changes
git pull origin develop

# Make your changes...
# Then commit and push
git add .
git commit -m "Your commit message"
git push origin develop
```

### 2. When ready to merge to main (Create MR/PR)

#### Option A: Using GitHub Web Interface (Recommended)
1. Go to your GitHub repository
2. Click "New Pull Request"
3. Set: `develop` → `main`
4. Add description and create PR
5. Review and merge when ready

#### Option B: Using Git Commands
```bash
# Ensure develop is up to date
git checkout develop
git pull origin develop

# Switch to main and update
git checkout main
git pull origin main

# Create merge request branch
git checkout -b merge/develop-to-main
git merge develop
git push origin merge/develop-to-main

# Then create PR on GitHub: merge/develop-to-main → main
```

### 3. After merging to main
```bash
# Switch back to develop
git checkout develop

# Pull latest main changes into develop
git pull origin main
git push origin develop
```

## Git Aliases for Quick Commands
Add these to your Git config for faster workflow:

```bash
# Add convenient aliases
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'

# Quick develop workflow
git config --global alias.dev 'checkout develop'
git config --global alias.main 'checkout main'
git config --global alias.sync-develop '!git checkout develop && git pull origin develop'
```

## Branch Protection Rules (Set on GitHub)
1. Go to Settings → Branches
2. Add rule for `main` branch:
   - ✅ Require pull request reviews
   - ✅ Require status checks to pass
   - ✅ Require branches to be up to date
   - ✅ Require conversation resolution before merging

## Quick Commands Summary

| Action | Command |
|--------|---------|
| Switch to develop | `git checkout develop` |
| Push changes | `git add . && git commit -m "message" && git push` |
| Update develop | `git pull origin develop` |
| Check status | `git status` |
| View branches | `git branch -a` |

## Notes
- Always work on `develop` branch for daily development
- Use Pull Requests/Merge Requests to merge `develop` → `main`
- Keep `main` branch protected and clean
- `develop` is now your default working branch
