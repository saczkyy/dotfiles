from django.urls import path
from .views import index, detail

urlpatterns = [
    path('home/', index, name='index'),
    path('detail/<int:id>', detail, name='detail')
]