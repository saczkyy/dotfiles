from django.contrib import admin
from .models import Uczen

# Register your models here.
class UczenAdmin(admin.ModelAdmin):
    list_display = ('name', 'surname', 'pseudonim', )
    search_fields = ('title', 'author')
    list_filter = ('published_date',)

admin.site.register(Uczen, UczenAdmin)
