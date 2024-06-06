from django.db import models
from django.db.models import CharField, IntegerField, ForeignKey

# Create your models here.
class Uczen(models.Model):
    pseudonim = models.CharField()
    name = models.CharField()
    surname = models.CharField()
