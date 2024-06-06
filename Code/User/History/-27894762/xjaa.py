from django.db import models

# Create your models here.
class Ryby(models.Model):
    nazwa = models.CharField(max_length=50)
    wystepowanie = models.CharField(max_length=100)
    styl_zycia = models.IntegerField()

    def __str__(self):
        return self.name

class Okres_ochronny(models.Model):
    od_miesiaca = models.IntegerField()
    do_miesiaca = models.IntegerField()
    wymiar_ochrony = models.IntegerField()
    ryby_id = models.ForeignKey("rybyapp.Ryby", on_delete=models.CASCADE)

    def __str__(self):
        return self.name

