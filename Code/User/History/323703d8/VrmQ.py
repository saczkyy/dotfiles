from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime
from website.models import Meeting


def welcome(request):
    return render(request, "website/welcome.html",{"a": Meeting.objects.count(),"b": "khug"})

def date(request):
    return HttpResponse("This page was served at " + str(datetime.now()))

def omnie(request):
    return HttpResponse('dzien dobry')