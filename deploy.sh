#!/bin/bash

# Hostinger Deployment Script
echo "🚀 Starting deployment process..."

# Check Node.js version
echo "📋 Node.js version: $(node --version)"
echo "� NPM version: $(npm --version)"

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production

# Build the project
echo "🔨 Building project..."
npm run build

# Verify build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed - dist folder not found"
    exit 1
fi

echo "📁 Build contents:"
ls -la dist/

# Deploy to Hostinger public_html
echo "� Deploying to public_html..."

# Backup current files (optional)
if [ -d "/public_html" ]; then
    rm -rf /public_html/*
fi

# Copy all files from dist to public_html
cp -r dist/* /public_html/

# Copy .htaccess specifically
if [ -f "public/.htaccess" ]; then
    cp public/.htaccess /public_html/
fi

# Set permissions
echo "🔒 Setting permissions..."
find /public_html -type f -exec chmod 644 {} \;
find /public_html -type d -exec chmod 755 {} \;

echo "📋 Deployed files:"
ls -la /public_html/

echo "✅ Deployment completed successfully!"
echo "🌐 Your site should now be live!"
