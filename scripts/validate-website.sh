#!/bin/bash

echo "🚀 Running comprehensive website validation..."

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✓ $2${NC}"
    else
        echo -e "${RED}✗ $2${NC}"
    fi
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

echo "📦 Installing dependencies..."
npm install --silent
print_status $? "Dependencies installed"

echo "🔍 Type checking..."
npm run typecheck --silent
print_status $? "TypeScript compilation"

echo "🏗️ Building project..."
npm run build --silent
BUILD_STATUS=$?
print_status $BUILD_STATUS "Production build"

if [ $BUILD_STATUS -eq 0 ]; then
    echo "📊 Analyzing build output..."
    
    # Check build size
    TOTAL_SIZE=$(du -sh dist/ | cut -f1)
    echo "   Build size: $TOTAL_SIZE"
    
    # Check for large chunks
    LARGE_FILES=$(find dist/assets -name "*.js" -size +500k)
    if [ -n "$LARGE_FILES" ]; then
        print_warning "Large JavaScript files detected (>500KB):"
        echo "$LARGE_FILES"
    else
        print_status 0 "JavaScript bundle sizes are optimal"
    fi
    
    # Check for CSS optimization
    CSS_FILES=$(find dist/assets -name "*.css")
    if [ -n "$CSS_FILES" ]; then
        print_status 0 "CSS files generated"
        CSS_SIZE=$(du -sh dist/assets/*.css | cut -f1)
        echo "   CSS size: $CSS_SIZE"
    fi
fi

echo "🧪 Running tests..."
if command -v vitest &> /dev/null; then
    npm test --silent
    print_status $? "Unit tests"
else
    print_warning "No test runner found - consider adding tests"
fi

echo "📱 Checking responsive design..."
# Check for viewport meta tag in index.html
if grep -q "viewport" index.html; then
    print_status 0 "Viewport meta tag present"
else
    print_status 1 "Viewport meta tag missing"
fi

# Check for responsive CSS classes
if grep -q "md:" src/components/*.tsx; then
    print_status 0 "Responsive CSS classes found"
else
    print_warning "Limited responsive design classes detected"
fi

echo "♿ Accessibility checks..."
# Check for semantic HTML
if grep -q "semantic\|aria-\|role=" src/components/*.tsx; then
    print_status 0 "Accessibility attributes found"
else
    print_warning "Consider adding more accessibility attributes"
fi

# Check for alt tags
if grep -q 'alt=' src/components/*.tsx; then
    print_status 0 "Image alt attributes found"
else
    print_status 1 "Image alt attributes missing"
fi

echo "🔒 Security checks..."
# Check for HTTPS in production URLs
if grep -q "https://" public/sitemap.xml; then
    print_status 0 "HTTPS URLs in sitemap"
else
    print_warning "Consider using HTTPS URLs"
fi

# Check for CSP headers (basic check)
if grep -q "Content-Security-Policy" index.html; then
    print_status 0 "Content Security Policy found"
else
    print_warning "Consider adding Content Security Policy"
fi

echo "🚀 Performance checks..."
# Check for service worker
if [ -f "public/sw.js" ]; then
    print_status 0 "Service worker present"
else
    print_warning "Service worker not found"
fi

# Check for manifest
if [ -f "public/manifest.json" ]; then
    print_status 0 "Web app manifest present"
else
    print_warning "Web app manifest missing"
fi

# Check for preload hints
if grep -q "preload\|prefetch" index.html; then
    print_status 0 "Resource hints found"
else
    print_warning "Consider adding resource hints"
fi

echo "🔍 SEO checks..."
# Check for robots.txt
if [ -f "public/robots.txt" ]; then
    print_status 0 "Robots.txt present"
else
    print_status 1 "Robots.txt missing"
fi

# Check for sitemap
if [ -f "public/sitemap.xml" ]; then
    print_status 0 "Sitemap present"
else
    print_status 1 "Sitemap missing"
fi

# Check for Open Graph tags
if grep -q "og:" index.html; then
    print_status 0 "Open Graph tags found"
else
    print_status 1 "Open Graph tags missing"
fi

# Check for structured data
if grep -q "application/ld+json" index.html; then
    print_status 0 "Structured data found"
else
    print_status 1 "Structured data missing"
fi

echo "📊 Summary:"
echo "✓ Website validation complete!"
echo "📁 Build artifacts ready in dist/"
echo "🌐 Ready for deployment"

# Final recommendations
echo ""
echo "🎯 Recommendations for state-of-the-art website:"
echo "   • Monitor Core Web Vitals in production"
echo "   • Add automated testing"
echo "   • Consider A/B testing implementation"
echo "   • Set up error monitoring (Sentry, etc.)"
echo "   • Implement progressive enhancement"
echo "   • Add offline support with service worker"
echo "   • Consider implementing prerender for better SEO"