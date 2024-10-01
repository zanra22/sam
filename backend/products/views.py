from django.shortcuts import render
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer

from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET'])
def list_products(request):
    obj_list = Product.objects.all()
    serializer = ProductSerializer(obj_list, many=True, context={'request': request})
    # serialized_data = serializer.data
    return Response(serializer.data)

@api_view(['GET'])
def get_product(request, pk):
    obj = Product.objects.get(id=pk)
    serializer = ProductSerializer(obj, context={'request': request})
    return Response(serializer.data)