from django.db import models

# Create your models here.
class Ryby(models.Model):

    nazwa = models.CharField(max_length=50)
    wystepowanie = models.CharField(max_length=100)

    class Meta:
        verbose_name = _("ryby")
        verbose_name_plural = _("rybys")

    def __str__(self):
        return self.name