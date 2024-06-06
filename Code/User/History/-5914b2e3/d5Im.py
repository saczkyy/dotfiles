from django.db import models

# Create your models here.
class Osoba(models.Model):

    login = models.CharField(max_length=50)
    haslo = models.CharField(max_length=50)
    imie = models.CharField(max_length=50)
    nazwisko = models.CharField(max_length=50)
