#!/bin/bash
set -e
echo "Starting isolated frontend build..."
cd client

echo "Debug environment before install:"
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"
echo "PWD: $(pwd)"
echo "Current directory contents:"
ls -la

echo "Installing client dependencies only..."
rm -rf node_modules package-lock.json
npm install --no-package-lock

echo "Checking installed packages..."
echo "Total packages in node_modules:"
ls node_modules | wc -l
echo "Looking for vite..."
find node_modules -name "*vite*" -type d | head -5
echo "Checking .bin directory:"
ls -la node_modules/.bin/ | grep -i vite || echo "Vite not found in .bin"

echo "Installing vite directly if missing..."
if [ ! -f "node_modules/.bin/vite" ]; then
    npm install vite @vitejs/plugin-react --save-dev
fi

echo "Building with explicit vite path..."
export NODE_ENV=production
node_modules/.bin/vite build
echo "Build completed successfully!"
ls -la dist/
