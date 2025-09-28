# GitHub Repository Setup Script
# Run these commands after configuring GitHub web interface

# Navigate to your project directory
Set-Location "c:\Users\Ravi Ranjan\Desktop\COde\Portfolio\Portfolio"

# Add and commit the CODEOWNERS file
Write-Host "Adding CODEOWNERS file..." -ForegroundColor Green
git add .github/CODEOWNERS
git add git-workflow.md
git commit -m "feat: Add CODEOWNERS file and update git workflow documentation"

# Push to develop branch
Write-Host "Pushing to develop branch..." -ForegroundColor Green  
git push origin develop

# Create a simple status check
Write-Host "Current repository status:" -ForegroundColor Yellow
Write-Host "Repository: https://github.com/ravi1122/professional-portfolio" -ForegroundColor Cyan
Write-Host "Current branch: $(git branch --show-current)" -ForegroundColor Cyan
Write-Host "Status: $(git status --porcelain)" -ForegroundColor Cyan

Write-Host "`n✅ Next steps:" -ForegroundColor Green
Write-Host "1. Go to: https://github.com/ravi1122/professional-portfolio/settings" -ForegroundColor White
Write-Host "2. Set 'develop' as default branch" -ForegroundColor White  
Write-Host "3. Add branch protection rules for 'main'" -ForegroundColor White
Write-Host "4. See git-workflow.md for detailed instructions" -ForegroundColor White

Write-Host "`n🔒 After setup, 'main' will only accept Pull Requests!" -ForegroundColor Magenta
