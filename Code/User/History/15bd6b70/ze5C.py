from django.contrib import admin
from .models import Pracownicy, Stanowiska

# Register your models here.
@admin.register(Pracownicy)
class PracownicyAdmin(admin.ModelAdmin):
    



