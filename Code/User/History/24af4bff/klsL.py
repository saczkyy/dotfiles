from django.db import models
from django.db.models import *

# Create your models here.
class Uczen(models.Model):
    pseudonim = CharField()
    name = CharField()
    surname = CharField()

