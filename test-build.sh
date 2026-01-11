#!/bin/bash

# Test build script for debugging

set -e

echo "============================================"
echo "Testing Docker Build"
echo "============================================"

# Check location
echo ""
echo "Current location:"
pwd

# Check files
echo ""
echo "Checking package files:"
ls -lh package*.json 2>&1 || echo "❌ Package files not found"

# Check .dockerignore
echo ""
echo "Dockerignore contents:"
cat .dockerignore

# Try to build
echo ""
echo "Building Docker image..."
docker build -t eorder-nextjs:test .

echo "✅ Build completed successfully!"

