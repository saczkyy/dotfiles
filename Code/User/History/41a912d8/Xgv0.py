from django.shortcuts import render
from .models import Ryby, Okres_ochronny

# Create your views here.
def ryby(request):
    return render(request, 'rybyapp/ryby.html', {'ryby':Ryby.objects.all(), 'okresy': Okres_ochronny.objects.all()})