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
echo "Checking package.json exists:"
ls -la package.json

echo "Running npm install with verbose output:"
npm install --no-audit --no-fund --verbose || {
    echo "npm install failed, trying alternative approaches..."
    
    echo "Trying npm install without flags:"
    npm install || {
        echo "Basic npm install failed, trying yarn as fallback:"
        npm install -g yarn
        yarn install
    }
}

echo "Checking if node_modules was created:"
if [ -d "node_modules" ]; then
    echo "node_modules directory exists"
    ls node_modules | head -10
else
    echo "ERROR: node_modules still missing after install"
    echo "Current directory contents:"
    ls -la
    echo "Attempting manual dependency installation..."
    npm install react react-dom vite @vitejs/plugin-react --save --no-package-lock
fi

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
    echo "Vite missing, installing directly..."
    npm install vite @vitejs/plugin-react --save-dev || {
        echo "Failed to install vite, trying global install..."
        npm install -g vite
        export PATH="$PATH:/usr/local/lib/node_modules/.bin"
    }
fi

echo "Final dependency verification:"
ls -la node_modules/.bin/ | grep -E "(vite|react)" || echo "Missing critical binaries"

echo "Building with explicit vite path and isolated context..."
export NODE_ENV=production
export NODE_OPTIONS="--max-old-space-size=4096"

# Try multiple approaches to run vite build
if [ -f "node_modules/.bin/vite" ]; then
    echo "Using local vite binary..."
    node_modules/.bin/vite build --mode production
elif command -v vite >/dev/null 2>&1; then
    echo "Using global vite binary..."
    vite build --mode production
else
    echo "ERROR: No vite binary found, attempting npx..."
    npx vite build --mode production
fi

echo "Build completed successfully!"
ls -la dist/
