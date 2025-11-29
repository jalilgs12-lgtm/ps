#!/usr/bin/env bash
# Exit on error
set -o errexit

# 1. Install Python dependencies
pip install -r requirements.txt

# 2. Build the React Frontend
# Assuming your React code is in a folder named 'frontend'
if [ -d "frontend" ]; then
  echo "Building React frontend..."
  cd frontend
  npm install
  npm run build
  cd ..
  echo "React build complete."
else
  echo "Warning: 'frontend' directory not found. Skipping React build."
fi

# 3. Collect Static Files (Django collects React build files and its own static files)
python manage.py collectstatic --no-input

# 4. Apply Database Migrations
python manage.py migrate
