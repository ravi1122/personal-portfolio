# GitHub Pages Deployment Script
# Run this script to deploy your portfolio to GitHub Pages

Write-Host "Starting deployment to GitHub Pages..." -ForegroundColor Green

# Build the project
Write-Host "Building the project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "Build successful!" -ForegroundColor Green
    
    # Deploy to GitHub Pages
    Write-Host "Deploying to GitHub Pages..." -ForegroundColor Yellow
    npm run deploy
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Deployment successful!" -ForegroundColor Green
        Write-Host "Your portfolio should be available at: https://ravi1122.github.io/professional-portfolio" -ForegroundColor Cyan
    } else {
        Write-Host "Deployment failed!" -ForegroundColor Red
    }
} else {
    Write-Host "Build failed!" -ForegroundColor Red
}
