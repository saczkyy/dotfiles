from django.db import models

# Create your models here.
class Pokoje(models.Model):


    def __str__(self):
        return self.name

class Rezerwacje(models.Model):

    
    def __str__(self):
        return self.name