from django.shortcuts import render
from paliwo.models import Paliwo
from .forms import Liczby,Dzialania

def welcome(request):
    paliwo = Paliwo.objects.all()
    form = Liczby()
    if request.method == "POST":
        pole1 = request.POST.get("pole1", 0)
        pole2 = request.POST.get("pole2", 1)

        a = request.POST.get('a', 0)
        b = request.POST.get('b', 0)


        suma = int(a) + int(b)
        potrzebne = int(pole1)/ int(pole2)

        if b == 0: 
            dzielenie = 'niemozna przez zero'
        else:
            dzielenie= int(a)/int(b)

        return render(request,"welcome.html",{
            "pole1":pole1,
            "pole2":pole2,
            "form":form,
            "suma":suma,
            "potrzebne":potrzebne,
            "paliwo":paliwo,
            "form":form,
            'mnozenie': int(a)*int(b),
            'odejmowanie': int(a)-int(b),
            'dzielenie': dzielenie,
            'dzialania_form': Dzialania(),
            'a': a,
            'b': b
        })


    return render(request,"welcome.html",{"form":form, 'dzialania_form': Dzialania(), "paliwo":paliwo})


