#!/bin/bash

# Hostinger Deployment Script
# This script will be executed on Hostinger after git pull

echo "🚀 Starting deployment process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production

# Build the project
echo "🔨 Building project..."
npm run build

# Copy built files to public directory
echo "📁 Copying files to public directory..."
rm -rf /public_html/*
cp -r dist/* /public_html/
cp -r dist/.htaccess /public_html/ 2>/dev/null || true

# Set proper permissions
echo "🔒 Setting permissions..."
find /public_html -type f -exec chmod 644 {} \;
find /public_html -type d -exec chmod 755 {} \;

echo "✅ Deployment completed successfully!"
