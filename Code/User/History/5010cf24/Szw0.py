from django.contrib import admin
from django.urls import path
from website.views import welcome, date, omnie, detail, pokoje

urlpatterns = [
    path('date/', date),
    path('admin/', admin.site.urls),
    path('detail/<int:id>', detail, name='detail'),
    path('ja/', omnie),
    path('pokoje/', pokoje, name="rooms")
]