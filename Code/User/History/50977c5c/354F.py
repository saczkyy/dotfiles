from django.contrib import admin
from .models import Pokoje,Rezerwacje

# Register your models here.
@admin.register(Pokoje)
class PokojeAdmin(admin.ModelAdmin):
    list_display = ["nazwa", "cena"]

@admin.register(Rezerwacje)
class RezerwacjeAdmin(admin.ModelAdmin):
    list_display = ["liczba_dni", "sezon", "id_pokoju"]
