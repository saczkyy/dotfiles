from django.shortcuts import render
from .models import Pracownicy, Stanowiska

# Create your views here.
def index(request):
    return render(request, "pracownicy/index.html", {'pracownicy' : Pracownicy.objects.all(), 'liczba' : Pracownicy.objects.count()})
