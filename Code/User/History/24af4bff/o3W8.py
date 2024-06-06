from django.db import models
from django.db.models import *

# Create your models here.
class Uczen(models.Model):
    pseudonim = CharField()
    name = CharField()
    surname = CharField()
    klasa = CharField()
    zainteresowania = ForeignKey(Zainteresowanie)

class Zainteresowanie(Model):
    name= CharField()
    numer_sali = IntegerField()