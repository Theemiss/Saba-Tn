from django.shortcuts import render, redirect
from .forms import BaseListingFrom
# Create your views here.

def index(request):
    return render(request, 'listings.html')


def details(request, listing_id):
    return render(request, 'details.html')

def add(request):  
    if request.method == "POST":  
        form = BaseListingFrom(request.POST)  
        if form.is_valid():  
            try:  
                form.save()
                return redirect('add')
            except:  
                pass  
    else:  
        form = BaseListingFrom()  
    return render(request,'add.html',{'form':form})