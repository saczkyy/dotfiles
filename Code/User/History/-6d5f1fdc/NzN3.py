from django.contrib import admin
from django.urls import path
from .views import ryby

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', ryby, name='ryby')
]
