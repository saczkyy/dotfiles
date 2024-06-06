from django.shortcuts import render
from paliwo.models import Paliwo
from .forms import Liczby

def welcome(request):
    paliwo = Paliwo.objects.all()
    form = Liczby()
    if request.method == "POST":
        pole1 = request.POST["pole1"]
        pole2 = request.POST["pole2"]
        suma = int(pole1) + int(pole2)
        potrzebne = int(pole1)/ int(pole2)
        

        return render(request,"welcome.html",{
            "pole1":pole1,
            "pole2":pole2,
            "form":form,
            "suma":suma,
            "potrzebne":potrzebne,
            "paliwo":paliwo,
            "form":form
        })

    return render(request,"welcome.html",{"form":form,"paliwo":paliwo})


