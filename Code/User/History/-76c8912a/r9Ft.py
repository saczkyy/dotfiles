from django.contrib import admin
from .models import Uczen

# Register your models here.
class UczenAdmin(admin.ModelAdmin):
    list_display = ('name', 'surname', 'pseudonim', "klasa", 'zainteresowania')
    search_fields = ('name', 'surname')
    list_filter = ('klasa',)

admin.site.register(Uczen, UczenAdmin)

class ZainteresowaniaAdmin(admin.ModelAdmin):
    list_display = ('name', 'numer_sali')
    search_fields = ('name', 'surname')
    list_filter = ('klasa',)

admin.site.register(Uczen, UczenAdmin)
