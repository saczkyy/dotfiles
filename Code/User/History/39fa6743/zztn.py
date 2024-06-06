from django.shortcuts import render, get_object_or_404, redirect
from .models import Wizyta, Pacjent
from django.forms import modelform_factory

# Create your views here.
def index(request):
    return render(request, "szpital/index.html",{"ile": Wizyta.objects.count(),"pacjenci": Pacjent.objects.all()})


def detail(request, id):
    return render(request, "szpital/detail.html",{"pacjent":get_object_or_404(Pacjent, pk=id)})


Form = modelform_factory(Wizyta, exclude=[])
def new(request):
    if request.method =='POST':
        form = Form(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')
    else:
        form = Form()
    return render(request, "szpital/new.html", {'form': form})
