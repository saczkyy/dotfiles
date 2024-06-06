from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from datetime import datetime
from website.models import Meeting, Room

def detail(request, id):
    meeting=Meeting.objects.get(pk=id)
    return render(request, "website/detail.html",{"meeting": meeting})

def welcome(request):
    return render(request, "website/welcome.html",{"meetings": Meeting.objects.all()})

def date(request):
    return HttpResponse("This page was served at " + str(datetime.now()))

def omnie(request):
    return HttpResponse('dzien dobry')

def pokoje(request):
    rooms = Room.objects.all()
    return render(request, "website/pokoje.html", {'rooms': rooms})