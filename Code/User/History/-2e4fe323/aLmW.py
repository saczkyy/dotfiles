from django.shortcuts import render
from django.forms import modelform_factory
from .models import Rezerwacje, Pokoje

# Create your views here.
def welcome(request):
    return render(request, 'front/index.html', {'rezerwacje':Rezerwacje.objects.all()})
    

Form = modelform_factory(Rezerwacje, exclude=[])
def rezerwacja(request):
    if request.method =='POST':
        form = Form(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
    return render(request, 'front/rezerwacja.html', {'form':form})