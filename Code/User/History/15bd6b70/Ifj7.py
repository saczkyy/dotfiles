from django.contrib import admin
from .models import Pracownicy, Stanowiska

# Register your models here.
@admin.register(Pracownicy)
class PracownicyAdmin(admin.ModelAdmin):
    list_display = ["imie", "nazwisko", "miasto", "adres", "dataUr", "stanowiska_id"]



