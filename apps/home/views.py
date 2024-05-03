from django.shortcuts import render

# Create your views here.
def home(request):
    context = { 'title': 'Mercado del Vino'}
    return render(request,'home/index.html',context)


