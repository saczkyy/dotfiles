from django.db import models

# Create your models here.
class Pacjent(models.Model):
    
    imie = models.CharField(_(""), max_length=50)
    nazwisko = models.CharField(_(""), max_length=50)
    miasto = models.CharField(_("Białystok"), max_length=50)
    ulica = models.CharField(_(""), max_length=50)    
    wiek = models.IntegerField(_(""))
    
    
    def __str__(self):
        return self.name

