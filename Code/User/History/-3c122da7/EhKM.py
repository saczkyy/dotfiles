from django.contrib import admin
from django.urls import path
from szpital.views import detail, new

urlpatterns = [
    path('detail/<int:id>', detail, name='detail'),
    path('new', new, name='new')
]