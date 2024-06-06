from django.shortcuts import render

# Create your views here.
def welcome(request):
    render(request, 'front/index.html')