#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Run standard build script first
./build.sh

# --- Database and Setup Commands ---
python manage.py migrate
python manage.py collectstatic --noinput

# --- Superuser Creation ---
if [ -z "$DJANGO_SUPERUSER_USERNAME" ] || [ -z "$DJANGO_SUPERUSER_PASSWORD" ]; then
    echo "Skipping superuser creation: DJANGO_SUPERUSER_USERNAME/PASSWORD environment variables are missing."
else
    echo "Attempting to create superuser..."
    # Create superuser non-interactively
    python manage.py createsuperuser --noinput \
        --username "$DJANGO_SUPERUSER_USERNAME" \
        --email "$DJANGO_SUPERUSER_EMAIL" || true
    echo "Superuser command executed."
fi

# --- Server Start Command (CRITICAL) ---
# This command MUST run last and MUST be the Gunicorn command.
echo "Starting Gunicorn server..."
gunicorn portfolio.wsgi --log-file -
