#!/bin/bash
set -e
echo "Starting isolated frontend build..."

# Ensure we're in the correct directory and isolate completely
echo "Current working directory: $(pwd)"
echo "Repository contents:"
ls -la

# Move to client directory and ensure complete isolation
cd client
echo "Moved to client directory: $(pwd)"
echo "Client directory contents:"
ls -la

# Clear any cached build state
rm -rf dist node_modules .vite

echo "Debug environment before install:"
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"
echo "PWD: $(pwd)"

echo "Installing client dependencies only..."
npm install --no-audit --no-fund

echo "Verifying React installation:"
npm list react react-dom || echo "React not found in dependencies"

echo "Checking installed packages..."
echo "Total packages in node_modules:"
ls node_modules | wc -l
echo "Looking for vite..."
find node_modules -name "*vite*" -type d | head -5
echo "Checking .bin directory:"
ls -la node_modules/.bin/ | grep -i vite || echo "Vite not found in .bin"

echo "Installing vite directly if missing..."
if [ ! -f "node_modules/.bin/vite" ]; then
    npm install vite @vitejs/plugin-react --save-dev --no-package-lock
fi

echo "Final dependency verification:"
ls -la node_modules/.bin/ | grep -E "(vite|react)" || echo "Missing critical binaries"

echo "Building with explicit vite path and isolated context..."
export NODE_ENV=production
export NODE_OPTIONS="--max-old-space-size=4096"
node_modules/.bin/vite build --mode production

echo "Build completed successfully!"
ls -la dist/
