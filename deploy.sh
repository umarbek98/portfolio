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
cp -r dist/* /public_html/

echo "✅ Deployment completed successfully!"
