from django.shortcuts import render
from .models import Uczen, Zainteresowanie

# Create your views here.
def index(request):
    return render(request, 'zainteresowania/index.html', {'ludzie': Uczen.objects.all()})

def kola(request):
    return render(request, 'zainteresowania/kola.html', {'lista': Zainteresowanie.objects.all()})

def detail(request, id):
    return render(request, "zainteresowania/detail.html",{"uczen":get_object_or_404(Uczen, pk=id)})

def dodaj(request):
    return