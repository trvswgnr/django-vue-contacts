# django vue contacts app

```bash
git clone https://github.com/trvswgnr/django-vue-contacts
cd django-vue-contacts
virtualenv venv -p $(which python3)
source venv/bin/activate
pip install Django
cd djangovue
python manage.py migrate
python manage.py runserver
```