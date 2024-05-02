from django.urls import path
from . import views
urlpatterns = [
    path('', views.vino_home, name= "vino_home"),
    path('mercadodelvino/',views.vino_home, name= "vino_home"),
    path('clubdelwhisky',views.whisky_home, name="whisky_home"),
    path('about/', views.about, name= "about"),
    path('contact/', views.contact, name= "contact"),
]
