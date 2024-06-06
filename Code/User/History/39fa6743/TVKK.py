from django.shortcuts import render, get_object_or_404
from .models import Wizyta, Pacjent
from django.forms import modelform_factory

# Create your views here.
def index(request):
    return render(request, "szpital/index.html",{"ile": Wizyta.objects.count(),"pacjenci": Pacjent.objects.all()})


def detail(request, id):
    return render(request, "szpital/detail.html",{"pacjent":get_object_or_404(Pacjent, pk=id)})

def new(request, id):
    form = modelform_factory(Wizyta)
    return render(request, "szpital/new.html", )
