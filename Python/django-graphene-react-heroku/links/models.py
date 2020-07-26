from django.db import models


class Link(models.Model):
    description = models.TextField(blank=True)
