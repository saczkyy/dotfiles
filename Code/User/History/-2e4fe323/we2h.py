from django.shortcuts import render
from .models import Rezerwacje, Pokoje

# Create your views here.
def welcome(request):
    render(request, 'front/index.html', {'rezerwacje':Rezerwacje.objects.all()})