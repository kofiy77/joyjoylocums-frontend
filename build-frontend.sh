#!/bin/bash
set -e
echo "Starting isolated frontend build..."
cd client
echo "Installing dependencies..."
npm install
echo "Building with Vite directly..."
./node_modules/.bin/vite build
echo "Build completed successfully!"
ls -la dist/
