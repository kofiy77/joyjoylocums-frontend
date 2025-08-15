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
ls -la package.json || {
    echo "package.json missing, creating it..."
    cat > package.json << 'EOF'
{
  "name": "joyjoylocums-frontend",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@radix-ui/react-accordion": "^1.2.4",
    "@radix-ui/react-alert-dialog": "^1.1.7",
    "@radix-ui/react-aspect-ratio": "^1.1.3",
    "@radix-ui/react-avatar": "^1.1.4",
    "@radix-ui/react-checkbox": "^1.1.5",
    "@radix-ui/react-collapsible": "^1.1.4",
    "@radix-ui/react-context-menu": "^2.2.7",
    "@radix-ui/react-dialog": "^1.1.7",
    "@radix-ui/react-dropdown-menu": "^2.1.7",
    "@radix-ui/react-hover-card": "^1.1.7",
    "@radix-ui/react-label": "^2.1.3",
    "@radix-ui/react-menubar": "^1.1.7",
    "@radix-ui/react-navigation-menu": "^1.2.6",
    "@radix-ui/react-popover": "^1.1.7",
    "@radix-ui/react-progress": "^1.1.3",
    "@radix-ui/react-radio-group": "^1.2.4",
    "@radix-ui/react-scroll-area": "^1.2.4",
    "@radix-ui/react-select": "^2.1.7",
    "@radix-ui/react-separator": "^1.1.3",
    "@radix-ui/react-slider": "^1.2.4",
    "@radix-ui/react-slot": "^1.2.0",
    "@radix-ui/react-switch": "^1.1.4",
    "@radix-ui/react-tabs": "^1.1.4",
    "@radix-ui/react-toast": "^1.2.7",
    "@radix-ui/react-toggle": "^1.1.3",
    "@radix-ui/react-toggle-group": "^1.1.3",
    "@radix-ui/react-tooltip": "^1.2.0",
    "@tanstack/react-query": "^5.60.5",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.6.0",
    "file-saver": "^2.0.5",
    "framer-motion": "^11.13.1",
    "input-otp": "^1.4.2",
    "jspdf": "^3.0.1",
    "jspdf-autotable": "^5.0.2",
    "leaflet": "^1.9.4",
    "lucide-react": "^0.453.0",
    "nanoid": "^5.1.5",
    "next-themes": "^0.4.6",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.55.0",
    "react-icons": "^5.5.0",
    "react-leaflet": "^4.2.1",
    "react-resizable-panels": "^2.1.7",
    "recharts": "^2.15.2",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^1.1.2",
    "wouter": "^3.3.5",
    "xlsx": "^0.18.5",
    "zod": "^3.24.2",
    "zustand": "^5.0.5"
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.15",
    "@types/leaflet": "^1.9.20",
    "@types/react": "^18.3.11",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.2",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.17",
    "typescript": "5.6.3",
    "vite": "^5.4.14"
  }
}
EOF
    echo "package.json created successfully"
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
    echo "Creating basic vite.config.ts if missing..."
    [ ! -f "vite.config.ts" ] && cat > vite.config.ts << 'EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, '../assets')
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-select'],
        },
      },
    },
  },
})
EOF
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
