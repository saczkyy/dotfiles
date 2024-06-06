from django.contrib import admin
from django.urls import path
import .views as v

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', )
]
