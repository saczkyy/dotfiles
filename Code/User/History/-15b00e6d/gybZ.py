from django.db import models

# Create your models here.
class Pacjent(models.Model):
    
    imie = models.CharField( max_length=50)
    nazwisko = models.CharField( max_length=50)
    miasto = models.CharField(default="Białystok", max_length=50)
    ulica = models.CharField(max_length=50)    
    wiek = models.IntegerField()

    def __str__(self):
        return f"{self.imie} {self.nazwisko}" 

class Wizyta(models.Model):
    
    data = models.DateField( auto_now=False, auto_now_add=False)
    zalecenia = models.CharField( max_length=50)
    pacjent = models.ForeignKey("szpital.Pacjent", on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.data, self.pacjent.nazwisko}"

