from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path("detail/<int:id>", views.detail, name="detail"),
    path("kola", views.kola, name="kola"),
    path("dodaj", views.dodaj, name="dodaj")
]