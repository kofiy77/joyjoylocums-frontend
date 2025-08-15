#!/bin/bash
echo "Building frontend with Vite..."
npx vite build

echo "Building server with esbuild..."
npx esbuild server/index.ts --platform=node --bundle --format=esm --outdir=dist --external:pg --external:bcryptjs --external:express --external:dotenv --external:drizzle-orm --external:@supabase/supabase-js --external:jsonwebtoken --external:multer --external:nodemailer --external:twilio

echo "Build completed successfully!"