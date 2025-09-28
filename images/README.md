# 📁 Images Directory

This folder should contain your portfolio images:

## Required Images:

### Profile Image
- `profile.jpg` - Your professional profile photo for the About section
- Recommended size: 400x400px or higher
- Format: JPG, PNG, or WebP

### Project Images
- `project1.jpg` - Screenshot of your first project
- `project2.jpg` - Screenshot of your second project  
- `project3.jpg` - Screenshot of your third project
- Add more as needed for additional projects

## Image Guidelines:

### Dimensions
- Profile photo: Square format (1:1 ratio) works best
- Project images: 16:9 or 4:3 aspect ratio recommended
- Minimum resolution: 800px width for project images

### File Size
- Keep images under 500KB for optimal loading
- Use online compression tools like TinyPNG or ImageOptim

### Naming Convention
- Use descriptive names without spaces
- Use hyphens for multi-word names: `my-awesome-project.jpg`
- Keep names lowercase for consistency

### Formats
- JPEG for photos and complex images
- PNG for graphics with transparency
- WebP for modern browsers (optional)

## Adding Your Images:

1. Place your images in this folder
2. Update the file paths in `src/data/portfolioData.js`:
   ```javascript
   avatar: "/images/your-profile-photo.jpg"
   image: "/images/your-project-screenshot.jpg"
   ```

## Example Structure:
```
public/images/
├── profile.jpg
├── project1.jpg
├── project2.jpg
├── project3.jpg
├── ecommerce-app.jpg
├── task-manager.jpg
└── weather-dashboard.jpg
```

Remember: All images in the public folder are accessible at `/images/filename.jpg` in your application.