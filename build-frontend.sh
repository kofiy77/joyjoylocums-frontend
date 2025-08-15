#!/bin/bash
set -e
echo "Starting isolated frontend build..."
cd client
echo "Installing dependencies..."
npm install
echo "Building with npx vite..."
npx vite build
echo "Build completed successfully!"
ls -la dist/
