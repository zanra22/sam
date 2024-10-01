from rest_framework import serializers
from .models import Product, ProductImage, ProductVariant, ProductVariantImage, Review
from versatileimagefield.serializers import VersatileImageFieldSerializer

class ReviewSerializer(serializers.ModelSerializer):
    user_username = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Review
        fields = ['product', 'user', 'rating', 'comment', 'user_id', 'user_username', 'created_at', 'updated_at']

class ProductImageSerializer(serializers.ModelSerializer):
    image = VersatileImageFieldSerializer(
        sizes=[
            ('full_size', 'url'),
            ('thumbnail', 'thumbnail__320x240'),
            ('small', 'thumbnail__128x80'),
            ('medium', 'crop__128x128'),
        ],
        read_only=True
    )

    class Meta:
        model = ProductImage
        fields = ['id', 'image']

class ProductVariantImageSerializer(serializers.ModelSerializer):
    image = VersatileImageFieldSerializer(
        sizes=[
            ('full_size', 'url'),
            ('thumbnail', 'thumbnail__320x240'),
            ('small', 'thumbnail__128x80'),
            ('medium', 'thumbnail__128x128'),
        ]
    )

    class Meta:
        model = ProductVariantImage
        fields = ['id', 'image']

class ProductSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True, read_only=True, source='product_images')
    review_list = ReviewSerializer(many=True, read_only=True, source='reviews')

    class Meta:
        model = Product
        fields = ['id', 'name', 'model_type', 'color', 'description', 'category', 'brand', 
                  'base_price', 'discounted_price', 'stock', 'images', 'review_list',
                  'active', 'slug', 'sku', 'created_by', 'created_at', 'updated_at',
                  'rating', 'num_reviews']

class ProductVariantSerializer(serializers.ModelSerializer):
    images = ProductVariantImageSerializer(many=True, read_only=True, source='variant_images')

    class Meta:
        model = ProductVariant
        fields = ['id', 'product', 'model_type', 'color', 'base_price', 'discounted_price', 
                  'stock', 'images', 'active', 'slug', 'sku', 'rating', 'num_reviews']
