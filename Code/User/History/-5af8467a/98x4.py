from django.shortcuts import render
from paliwo.models import Paliwo
from .forms import Liczby,Dzialania

def welcome(request):
    paliwo = Paliwo.objects.all()
    form = Liczby()
    if request.method == "POST":
        pole1 = request.POST["pole1"]
        pole2 = request.POST["pole2"]

        a = request.POST['a']
        b = request.POST['b']


        suma = int(pole1) + int(pole2)
        potrzebne = int(pole1)/ int(pole2)

        if b == 0: 
            dzielenie = 'niemozna przez zero'
        else:
            dzielenie= a/b

        return render(request,"welcome.html",{
            "pole1":pole1,
            "pole2":pole2,
            "form":form,
            "suma":suma,
            "potrzebne":potrzebne,
            "paliwo":paliwo,
            "form":form,
            'mnozenie': (a*b),
            'odejmowanie': (a-b),
            'dzielenie': dzielenie
        })

    return render(request,"welcome.html",{"form":form, 'dzialania_form': Dzialania(), "paliwo":paliwo})


