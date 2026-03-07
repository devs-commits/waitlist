#!/bin/bash
set -e

echo "Starting deployment..."

echo "Pulling latest code from GitHub..."
git pull origin main

echo "Installing dependencies..."
npm install

echo "Building project..."
npm run build

echo "Restarting application..."
pm2 restart waitlist

echo "Saving PM2 process list..."
pm2 save

echo "Deployment complete."
