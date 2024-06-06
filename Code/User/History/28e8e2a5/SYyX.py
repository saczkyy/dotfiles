from django.db import models

# Create your models here.
class Stanowiska(models.Model):

    nazwa = models.CharField(max_length=50)

    class Meta:
        verbose_name = _("stanowiska")
        verbose_name_plural = _("stanowiska")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("stanowiska_detail", kwargs={"pk": self.pk})
