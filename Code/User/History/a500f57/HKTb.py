from django.shortcuts import render
from .models import Uczen

# Create your views here.
def index(request):
    return render(request, 'zainteresowania/index.html', {'ludzie': Uczen.objects.all()})