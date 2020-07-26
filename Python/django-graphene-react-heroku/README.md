# Django / Graphene + React -> Heroku

https://e1r0nd.blogspot.com/2020/07/wsl-django-graphene-react-heroku.html

## To install deps:

```bash
python3 -m venv venv
. venv/bin/activate
pip install -r requirements.txt
npm install
```

## The development:

```bash
. venv/bin/activate
python manage.py migrate
python manage.py runserver
```

```bash
npm start
```

## The deployment:

```bash
git add .
git commit -am "make it better"
git push heroku master
```
