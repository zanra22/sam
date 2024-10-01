from .views import *
from django.urls import path
urlpatterns = [
    path('products/', list_products, name='list_products'),
    path('products/<str:pk>', get_product, name='get_product'),
]