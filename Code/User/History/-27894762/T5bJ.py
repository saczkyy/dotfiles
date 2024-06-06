from django.db import models

# Create your models here.
class Ryby(models.Model):
    nazwa = models.CharField(max_length=50)
    wystepowanie = models.CharField(max_length=100)
    styl_zycia = models.IntegerField()

    class Meta:
        verbose_name = _("ryby")
        verbose_name_plural = _("rybys")

    def __str__(self):
        return self.name

class Okres_ochronny(models.Model):
    od_miesiaca = models.IntegerField()
    do_miesiaca = models.IntegerField()
    wymiar_ochrony = models.IntegerField()
    ryby_id = models.ForeignKey("rybyapp.Ryby", on_delete=models.CASCADE)

    class Meta:
        verbose_name = _("okres_ochronny")
        verbose_name_plural = _("okres_ochronnys")

    def __str__(self):
        return self.name

