from django.contrib import admin
from django.urls import path
from szpital.views import detail

urlpatterns = [
    path('detail/<int:id>', detail, name='detail'),

]