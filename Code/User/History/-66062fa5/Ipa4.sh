#!/bin/bash

set -e
python manage.py createsuperuser 
echo "${0}: running migrations."
python manage.py migrate --noinput
python manage.py runserver 0.0.0.0:8000