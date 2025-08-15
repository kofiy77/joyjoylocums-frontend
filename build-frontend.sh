#!/bin/bash
set -e
echo "Starting isolated frontend build..."
cd client
echo "Installing dependencies..."
npm install

# Debug environment
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"
echo "PWD: $(pwd)"
echo "Checking vite binary..."
ls -la node_modules/.bin/vite*

echo "Building with explicit vite path..."
export NODE_ENV=production
node_modules/.bin/vite build
echo "Build completed successfully!"
ls -la dist/
