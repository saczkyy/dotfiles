from django.db import models
from django.db.models import *

# Create your models here.
class Zainteresowanie(Model):
    name= CharField(max_length=50)
    numer_sali = IntegerField()

    def __str__(self):
        return f'Zajęcia {self.name} odbywaja sie w sali {self.numer_sali}'


class Uczen(models.Model):
    pseudonim = CharField(max_length=50)
    name = CharField(max_length=50)
    surname = CharField(max_length=50)
    klasa = CharField(max_length=50)
    zainteresowania = ForeignKey(Zainteresowanie, on_delete=CASCADE)

    def __str__(self):
        return f'{self.name} {self.surname} z klasy {self.klasa}'
