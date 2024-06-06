from django.db import models

# Create your models here.
class pokoje(models.Model):


    def __str__(self):
        return self.name

class rezerwacje(models.Model):

    
    def __str__(self):
        return self.name