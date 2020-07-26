# Django (MyPy) / Graphene + React (TS) -> Heroku

[Link to a blog post here...](link.com)

Requirements:

- node 12
- python3
- pipenv
- git

## To install deps:

```bash
npm install

pipenv shell
pipenv install --dev --pre
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
