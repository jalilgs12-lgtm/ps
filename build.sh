#!/usr/bin/env bash
# Exit on error
set -o errexit

# 1. Install Python dependencies
echo "Installing Python dependencies..."
pip install -r requirements.txt

# --- CRITICAL FIX START ---
REACT_DIR="portfolio_site_frontend" 
# --- CRITICAL FIX END ---

# 2. Build the React Frontend
# We use the correct variable name defined above
if [ -d "$REACT_DIR" ]; then
  echo "Building React frontend in $REACT_DIR..."
  cd "$REACT_DIR"
  npm install
  npm run build
  cd ..
  echo "React build complete."
else
  echo "Warning: '$REACT_DIR' directory not found. Skipping React build."
  exit 1 # Added this line to fail the build if the frontend is missing, for safety
fi

# 3. Collect Static Files (Django collects React build files and its own static files)
echo "Collecting Static Files..."
python manage.py collectstatic --no-input

# 4. Apply Database Migrations
echo "Applying Database Migrations..."
python manage.py migrate
