#!/usr/bin/env bash

virtualenv venv -p $(which python3)
source venv/bin/activate
pip install Django
cd djangovue/
python manage.py migrate
python manage.py runserver
cd contact/
cd static/
npm run dev
