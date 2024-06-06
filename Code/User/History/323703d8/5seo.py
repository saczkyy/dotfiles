from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime


# Create your views here.
def welcome(request):
    return render(request, "website/welcome.html")

def date(request):
    return HttpResponse("This page was served at " + str(datetime.now()))

def omnie(request):
    return HttpResponse('dzien dobry')