# Adding Your Profile Image to the Portfolio

## 📸 Quick Setup Guide

### Option 1: Replace with Your Photo (Recommended)
1. **Prepare your photo:**
   - Use a professional headshot or professional-looking photo
   - Recommended size: 400x400px or 800x800px (square format works best)
   - Supported formats: JPG, PNG, WebP
   - File size: Keep under 500KB for better performance

2. **Add your photo:**
   - Save your photo as `profile.jpg` or `profile.png`
   - Place it in: `public/images/profile.jpg`
   - The current SVG placeholder will be replaced automatically

3. **Update the data (if using different filename):**
   - Open `src/data/portfolioData.js`
   - Change the avatar path: `avatar: "/images/your-photo-name.jpg"`

### Option 2: Keep the Professional SVG (Current)
The portfolio currently uses a professional SVG illustration that:
- ✅ Loads instantly (no network requests)
- ✅ Scales perfectly on all devices
- ✅ Matches your tech stack with surrounding icons
- ✅ Looks professional and modern

### 📁 File Structure
```
public/
└── images/
    ├── profile.svg (current - professional illustration)
    ├── profile.jpg (add your photo here)
    └── projects/ (project images)
```

### 🎨 Photo Guidelines
- **Professional appearance**: Business casual or formal attire
- **Good lighting**: Well-lit, clear photo
- **Clean background**: Solid color or professional setting
- **Square crop**: 1:1 aspect ratio works best
- **High quality**: Clear and sharp image

### 🔧 Technical Details
The image component includes:
- ✅ Lazy loading for performance
- ✅ Error handling and fallbacks  
- ✅ Responsive sizing
- ✅ Loading skeleton while image loads
- ✅ Optimized for all screen sizes

### 🚀 Current Features
- Professional tech-themed SVG illustration
- Surrounding tech stack icons (React, Node.js, AWS, etc.)
- Gradient backgrounds with modern styling
- Animated floating elements
- Responsive design

**Ready to use as-is or easily replaceable with your photo!**
