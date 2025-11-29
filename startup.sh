#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Run standard build script first
./build.sh

# Check if required environment variables are set for superuser creation
if [ -z "$DJANGO_SUPERUSER_USERNAME" ] || [ -z "$DJANGO_SUPERUSER_PASSWORD" ]; then
    echo "Skipping superuser creation: DJANGO_SUPERUSER_USERNAME and/or DJANGO_SUPERUSER_PASSWORD environment variables are missing."
else
    echo "Attempting to create superuser..."
    # Execute the Django command non-interactively using the provided environment variables
    # The --noinput flag is necessary to bypass the TTY requirement
    python manage.py createsuperuser --noinput \
        --username "$DJANGO_SUPERUSER_USERNAME" \
        --email "$DJANGO_SUPERUSER_EMAIL" || true
    echo "Superuser command executed."
fi

# Run the standard start command (gunicorn) to launch the app
gunicorn portfolio.wsgi --log-file -
