from django.shortcuts import render, get_object_or_404
from .models import Wizyta, Pacjent

# Create your views here.
def index(request):
    return render(request, "szpital/index.html",{"ile": Wizyta.objects.count(),"pacjenci": Pacjent.objects.all()})


def detail(request, id):
    return render(request, "szpital/detail.html",{"pacjent":Pacjent.objects.get(pk=1)})
