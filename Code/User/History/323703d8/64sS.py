from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from datetime import datetime
from website.models import Meeting

def detail(request, id):
    meeting=Meeting.objects.get(pk=id)
    return render(request, "website/detail.html",{"meeting": meeting})

def welcome(request):
    return render(request, "website/welcome.html",{"a": Meeting.objects.count(),"b": "khug"})

def date(request):
    return HttpResponse("This page was served at " + str(datetime.now()))

def omnie(request):
    return HttpResponse('dzien dobry')