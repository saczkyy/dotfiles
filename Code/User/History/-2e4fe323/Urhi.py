from django.shortcuts import render
from .models import Rezerwacje, Pokoje
from django.forms import modelform_factory

# Create your views here.
def welcome(request):
    return render(request, 'front/index.html', {'rezerwacje':Rezerwacje.objects.all()})
    
form = modelform_factory(Rezerwacje)
def rezerwacja(request):
    return render(request, 'front/rezerwacja.html', {})