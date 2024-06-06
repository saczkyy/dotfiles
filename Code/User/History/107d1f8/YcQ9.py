from django.contrib import admin
from .models import Osoba

# Register your models here.
@admin.register(Osoba)
class OsobaAdmin(Osoba):
    pass