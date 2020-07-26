from typing import Optional, Union, Dict, Sequence
from flask import render_template
from app import app


@app.route("/")
@app.route("/index")
def index():
    user = mock_user(True)
    posts = mock_posts(True)

    return render_template("index.html", title="Home", user=user, posts=posts)


def mock_user(user: bool) -> Union[Dict[str, str], None]:
    if user:
        return {"username": "Miguel"}
    else:
        None


def mock_posts(posts: bool) -> Optional[Sequence]:
    if posts:
        return [
            {"author": {"username": "John"}, "body": "Beautiful day in Portland!!!"},
            {
                "author": {"username": "Susan"},
                "body": "The Avengers movie was so cool!",
            },
        ]
    else:
        None
