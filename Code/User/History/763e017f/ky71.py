from django.urls import path
import views

urlpatterns = [
    path('/', views.welcome, name='index'),
]
