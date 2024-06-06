from django.db import models

# Create your models here.
class Pacjent(models.Model):
    
    imie = models.CharField(_(""), max_length=50)
    nazwisko = models.CharField(_(""), max_length=50)
    miasto = models.CharField(_("Białystok"), max_length=50)
    ulica = models.CharField(_(""), max_length=50)    
    wiek = models.IntegerField(_(""))
    
    def __str__(self):
        return f"{self.imie} {self.nazwisko}" 

class Wizyta(models.Model):
    
    data = models.DateField(_(""), auto_now=False, auto_now_add=False)
    zalecenia = models.CharField(_(""), max_length=50)
    pacjent = models.ForeignKey("szpital.Pacjent", verbose_name=_(""), on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name

