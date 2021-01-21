from django.db import models
from datetime import datetime
from users.models import User
from categories.models import Category
# Create your models here.

class BaseListing(models.Model):
    """
    still need to check what to do if user deleted
    """
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    title = models.CharField(max_length=200)
    slug = models.CharField(max_length=200, blank=True) #optional for now should be auto generated
    description = models.TextField(blank=True) #optional
    price = models.FloatField()
    city = models.CharField(max_length=200) #should be choice
    state = models.CharField(max_length=200) #should be choice
    category = models.ForeignKey(Category, on_delete=models.DO_NOTHING)
    photo_main = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True) #optional for now
    add_date = models.DateTimeField(default=datetime.now, blank=True)
    update_date = models.DateTimeField(default=datetime.now, blank=True)
    #we should add is_accepted, is_declined and is_waiting (BooleanField)
    def __str__(self):
        return self.title