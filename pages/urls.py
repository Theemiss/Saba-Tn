from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
	path('login',views.login,name="login"),
	path('product',views.product,name="product"),
	path('signup',views.signup,name="signup"),
]