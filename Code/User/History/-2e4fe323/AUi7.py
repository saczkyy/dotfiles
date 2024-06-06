from django.shortcuts import render
from django.forms import modelform_factory
from .models import Rezerwacje, Pokoje

# Create your views here.
def welcome(request):
    return render(request, 'front/index.html', {'rezerwacje':Rezerwacje.objects.all()})
    

form = modelform_factory(Rezerwacje)
def rezerwacja(request):
    return render(request, 'front/rezerwacja.html', {'form':form})