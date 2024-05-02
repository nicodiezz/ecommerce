from django.shortcuts import render

# Create your views here.
def vino_home(request):
    context = { 'css':'vino',
                'title': 'Mercado del Vino',
                'oposite':'Club del Whisky',
                'url': 'whisky_home'}
    return render(request,'vino/index.html',context)

def whisky_home(request):
    context = {'css':'whisky',
                'title': 'Club del Whisky',
                'oposite':'Mercado del Vino',
                'url': 'vino_home'}
    return render(request,'whisky/index.html',context)
                
def about(request):
    return render(request, 'home/about.html')

def contact(request):
    return render(request,'home/contact.html')

