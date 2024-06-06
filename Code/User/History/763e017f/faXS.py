from django.urls import path
from .views import welcome, rezerwacja

urlpatterns = [
    path('', welcome, name='index'),
    path('rezerwacja', rezerwacja, name='rezerwacja'),    
]
