from django.shortcuts import render
from .models import Wizyta, Pacjent

# Create your views here.
def index(request):
    return render(request, "szpital/index.html",{"ile": Wizyta.objects.count(),"pacjenci": Pacjent.objects.all()})
