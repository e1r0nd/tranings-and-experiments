from django.db import models


class Tweet(models.Model):
    content = models.TextField(blank=True, null=True)
    likes = models.IntegerField(default=0)
    image = models.FileField(upload_to="images/", blank=True, null=True)

    class Meta:
        ordering = ["-id"]

    def serialize(self):
        return {"id": self.id, "content": self.content, "likes": 0}

