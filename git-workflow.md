# Git Workflow Guide - Professional Portfolio

## Branch Structure
- **`main`**: Production-ready code (protected branch, MR only)
- **`develop`**: Default development branch (your working branch)
- **`feature/*`**: Feature branches (optional, for larger features)

## Repository Configuration Status
✅ **develop** branch exists and is your working branch  
✅ Both main and develop branches are pushed to origin  
🔄 **Next Steps**: Configure GitHub repository settings  

## GitHub Repository Configuration Required

### Step 1: Set develop as Default Branch
1. Go to: https://github.com/ravi1122/professional-portfolio/settings
2. Click on **"General"** in the left sidebar
3. Scroll down to **"Default branch"** section
4. Click **"Switch to another branch"**
5. Select **`develop`** as the default branch
6. Click **"Update"** and confirm

### Step 2: Protect main Branch (MR Only)
1. Go to: https://github.com/ravi1122/professional-portfolio/settings/branches
2. Click **"Add rule"** 
3. Enter **`main`** as branch name pattern
4. Enable these protections:
   - ✅ **Require a pull request before merging**
   - ✅ **Require approvals** (set to 1)
   - ✅ **Dismiss stale PR approvals when new commits are pushed**
   - ✅ **Require review from CODEOWNERS**
   - ✅ **Require status checks to pass before merging**
   - ✅ **Require branches to be up to date before merging**
   - ✅ **Require conversation resolution before merging**
   - ✅ **Require signed commits** (optional but recommended)
   - ✅ **Require linear history**
   - ✅ **Include administrators** (applies rules to repo admins too)
5. Click **"Create"**

### Step 3: Create CODEOWNERS File (Optional but Recommended)
1. Create `.github/CODEOWNERS` file in your develop branch:
```bash
# Global code owners
* @ravi1122

# Specific paths
/src/ @ravi1122
/public/ @ravi1122
package.json @ravi1122
```

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

### 2. When ready to deploy to production (Create MR to main)

⚠️ **Important**: After GitHub configuration, you can ONLY merge to `main` via Pull Requests

#### Creating Pull Request (develop → main)
1. Ensure your develop branch is up to date:
```bash
git checkout develop
git pull origin develop
```

2. Push your latest changes:
```bash
git add .
git commit -m "Your feature/fix description"
git push origin develop
```

3. Create Pull Request on GitHub:
   - Go to: https://github.com/ravi1122/professional-portfolio
   - Click **"New Pull Request"**
   - Set: `develop` → `main`
   - Add detailed description of changes
   - Request review (if you have team members)
   - Click **"Create Pull Request"**

4. After approval and all checks pass, merge the PR

### 3. After successful merge to main
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

## Configured Branch Protection Rules
Once you complete the GitHub setup above, your repository will have:

### main branch (Production)
- 🔒 **Protected branch** - No direct pushes allowed
- 📝 **Pull Request required** - All changes must go through PR
- 👥 **Review required** - At least 1 approval needed
- ✅ **Status checks** - All CI/CD checks must pass
- 🔄 **Up-to-date required** - Branch must be current with main
- 💬 **Conversations resolved** - All PR comments must be resolved
- 📋 **CODEOWNERS approval** - Code owner (@ravi1122) must approve

### develop branch (Development)
- 🚀 **Default branch** - New clones start here
- ✏️ **Direct pushes allowed** - For day-to-day development
- 🔄 **Your working branch** - All daily development happens here

## Repository URLs
- **Repository**: https://github.com/ravi1122/professional-portfolio
- **Settings**: https://github.com/ravi1122/professional-portfolio/settings
- **Branch Rules**: https://github.com/ravi1122/professional-portfolio/settings/branches

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
