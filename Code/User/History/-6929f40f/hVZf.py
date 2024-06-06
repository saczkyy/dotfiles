from django.shortcuts import render
from .models import Pracownicy, Stanowiska

# Create your views here.
def index(request):
    return render(request, "pracownicy/index.html", {'pracownicy' : Pracownicy.objects.all(), 'liczba' : Pracownicy.objects.count()})

def detail(request, id):
    return render(request, "pracownicy/detail.html",{"pracownik":get_object_or_404(Pracownicy, pk=id)})
    