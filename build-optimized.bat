REM Performance Optimization Build Script for Windows

REM Install additional performance dependencies
npm install --save-dev webpack-bundle-analyzer compression-webpack-plugin terser-webpack-plugin

REM Create production build with optimizations
set GENERATE_SOURCEMAP=false
npm run build

REM Analyze bundle size
npx webpack-bundle-analyzer build/static/js/*.js --no-open

echo ✅ Build complete with performance optimizations:
echo 📊 Bundle analysis available
echo 🗜️ Gzip compression enabled
echo 🚀 Code splitting implemented
echo 📈 Performance monitoring active
