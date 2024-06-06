from django.db import models

# Create your models here.
class Osoba(models.Model):

    login = models.CharField(max_length=50)
    haslo = models.CharField(max_length=50)
    imie = models.CharField(max_length=50)
    nazwisko = models.CharField(max_length=50)

    class Meta:
        verbose_name = _("osoba")
        verbose_name_plural = _("osoby")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("osoba_detail", kwargs={"pk": self.pk})
