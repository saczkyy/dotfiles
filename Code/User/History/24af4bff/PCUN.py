from django.db import models
from django.db.models import *

# Create your models here.
class Zainteresowanie(Model):
    name= CharField()
    numer_sali = IntegerField()

    def __str__():
        return f'Zajęcia {name} odbywaja sie w sali {numer_sali}'


class Uczen(models.Model):
    pseudonim = CharField()
    name = CharField()
    surname = CharField()
    klasa = CharField()
    zainteresowania = ForeignKey(Zainteresowanie, on_delete=CASCADE)

    def __str__():
        return f'{name} {surname} z klasy {klasa}'

