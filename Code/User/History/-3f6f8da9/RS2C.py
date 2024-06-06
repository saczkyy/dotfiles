from django.contrib import admin
from .models import Ryby, Okres_ochronny

# Register your models here.
@admin.register()
class RybyAdmin(admin.ModelAdmin):
    list_display = [nazwa]