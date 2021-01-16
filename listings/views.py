from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'listings.html')


def details(request, listing_id):
    return render(request, 'details.html')