#!/bin/bash
set -e
echo "Starting frontend build in root directory..."

# We're already in the root directory where all files are located
echo "Current working directory: $(pwd)"
echo "Repository contents:"
ls -la

# Clear any cached build state
rm -rf dist node_modules .vite client/dist

echo "Debug environment before install:"
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"
echo "PWD: $(pwd)"

echo "Installing dependencies from existing package.json..."
echo "Checking package.json exists:"
ls -la package.json

echo "Package.json found, verifying it has frontend build capability:"
grep -q "vite build" package.json && echo "✅ Vite build found" || {
    echo "❌ Adding vite build to scripts..."
    # Backup and modify package.json to include frontend build
    cp package.json package.json.backup
    node -e "
    const pkg = JSON.parse(require('fs').readFileSync('package.json', 'utf8'));
    if (!pkg.scripts) pkg.scripts = {};
    if (!pkg.scripts['build:frontend']) {
      pkg.scripts['build:frontend'] = 'vite build';
    }
    require('fs').writeFileSync('package.json', JSON.stringify(pkg, null, 2));
    console.log('Added build:frontend script to package.json');
    "
}

echo "Running npm install (compatible with any npm version):"
npm install || {
    echo "npm install failed, trying alternative approaches..."
    
    echo "Clearing npm cache and trying again:"
    npm cache clean --force
    npm install || {
        echo "Still failing, trying with different flags:"
        npm install --legacy-peer-deps || {
            echo "Last resort: manual package installation..."
            npm install react react-dom vite @vitejs/plugin-react typescript tailwindcss
        }
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
    npm install --production=false
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

# Check if we have a build:frontend script or use vite directly
if grep -q "build:frontend" package.json; then
    echo "Using build:frontend script..."
    npm run build:frontend
elif [ -f "node_modules/.bin/vite" ]; then
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
