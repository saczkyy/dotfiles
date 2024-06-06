from django.db import models

# Create your models here.
class Stanowiska(models.Model):

    nazwa = models.CharField(max_length=50)
    opis = models.CharField(max_length=100)

    def __str__(self):
        return self.nazwa

class Pracownicy(models.Model):

    imie = models.CharField(max_length=50)
    nazwisko = models.CharField(max_length=50)
    adres = models.CharField(max_length=50)
    miasto = models.CharField(max_length=50)
    czyRodo = models.IntegerField()
    czyBadania = models.IntegerField()
    dataUr = models.DateField(auto_now=False, auto_now_add=False)
    stanowiska_id = models.ForeignKey("pracownicy.Stanowiska", on_delete=models.CASCADE)

    def __str__(self):
        return self.imie + self.nazwisko
