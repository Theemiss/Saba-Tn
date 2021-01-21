from django import forms  
from .models import BaseListing

class BaseListingFrom(forms.ModelForm):
    class Meta:  
        model = BaseListing
        fields = ['title','description','price','city','state','category','photo_main','user']