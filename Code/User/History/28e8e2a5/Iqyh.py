from django.db import models

# Create your models here.
class Stanowiska(models.Model):

    nazwa = models.CharField(max_length=50)
    opis = models.CharField(max_length=100)

    class Meta:
        verbose_name = _("stanowiska")
        verbose_name_plural = _("stanowiska")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("stanowiska_detail", kwargs={"pk": self.pk})

class Pracownicy(models.Model):

    imie = models.CharField(max_length=50)
    nazwisko = models.CharField(max_length=50)
    adres = models.CharField(max_length=50)
    miasto = models.CharField(max_length=50)
    czyRodo = models.IntegerField()

    class Meta:
        verbose_name = _("pracownicy")
        verbose_name_plural = _("pracownicy")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("pracownicy_detail", kwargs={"pk": self.pk})
