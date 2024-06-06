from django.shortcuts import render
from .models import Pracownicy, Stanowiska

# Create your views here.
def index(request):
    render(request, "pracownicy/index.html", {'liczba' : Pracownicy.objects.all()})
