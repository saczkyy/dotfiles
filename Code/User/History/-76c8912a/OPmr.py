from django.contrib import admin
from .models import Uczen, Zainteresowanie

# Register your models here.
class UczenAdmin(admin.ModelAdmin):
    list_display = ('name', 'surname', 'pseudonim', "klasa", 'zainteresowania')
    search_fields = ('name', 'surname')
    list_filter = ('klasa',)

class ZainteresowanieAdmin(admin.ModelAdmin):
    list_display = ('name', 'numer_sali')
    search_fields = ('name', 'numer_sali')
    list_filter = ('numer_sali',)

admin.site.register(Uczen, UczenAdmin)
admin.site.register(Zainteresowanie, ZainteresowanieAdmin)
