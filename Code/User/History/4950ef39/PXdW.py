from django.db import models

# Create your models here.
class Pokoje(models.Model):
    nazwa = models.CharField(max_length=50)
    cena = models.IntegerField()

    def __str__(self):
        return self.nazwa

class Rezerwacje(models.Model):
    liczba_dni = models.IntegerField()
    sezon = models.CharField(max_length=50)
    id_pokoju = models.ForeignKey("front.Pokoje", on_delete=models.CASCADE)

    
    def __str__(self):
        return self.name