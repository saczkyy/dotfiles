from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from datetime import datetime
from website.models import Meeting, Room
from django.forms import modelform_factory

Meetingform = modelform_factory(Meeting, exclude=[]) 

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

def new(request):
    form = Meetingform()
    return render(request, "website/new.html", {"form":form})


