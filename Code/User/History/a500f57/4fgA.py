from django.shortcuts import render, get_object_or_404
from .models import Uczen, Zainteresowanie
from django.forms import modelform_factory

# Create your views here.
def index(request):
    return render(request, 'zainteresowania/index.html', {'ludzie': Uczen.objects.all()})

def kola(request):
    return render(request, 'zainteresowania/kola.html', {'lista': Zainteresowanie.objects.all()})

def detail(request, id):
    return render(request, "zainteresowania/detail.html",{"uczen":get_object_or_404(Uczen, pk=id)})

Form = modelform_factory(Uczen, exclude=[])
def dodaj(request):
    if request.method =='POST':
        form = Form(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
    else:
        form = Form()
    return render(request, "szpital/dodaj.html", {'form': form})
