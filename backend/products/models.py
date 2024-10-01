from django.db import models
from django.utils.text import slugify
import uuid
import os
import random
from versatileimagefield.fields import VersatileImageField, PPOIField
# from .utils import upload_image_path


def get_filename_ext(filepath):
    base_name = os.path.basename(filepath)
    name, ext = os.path.splitext(base_name)
    return name, ext

def upload_image_path(instance, filename):
    new_filename = random.randint(1, 1358751235)
    name, ext = get_filename_ext(filename)
    final_filename = f'{new_filename}{ext}'
    return f'products/{new_filename}/{final_filename}'
# Create your models here.
class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    model_type = models.CharField(max_length=100)
    color = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField()
    category = models.CharField(max_length=100)
    brand = models.CharField(max_length=100)
    base_price = models.DecimalField(max_digits=10, decimal_places=2)
    discounted_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    stock = models.PositiveIntegerField()
    active = models.BooleanField(default=True)
    slug = models.SlugField(max_length=100, unique=True, blank=True)
    sku = models.CharField(max_length=100, unique=True, blank=True)
    created_by = models.ForeignKey('accounts.CustomUser', on_delete=models.CASCADE, related_name='products')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    rating = models.DecimalField(max_digits=2, decimal_places=1, null=True, blank=True, default=0.0)
    num_reviews = models.PositiveIntegerField(null=True, blank=True, default=0)

    def __str__(self):
        return self.name

class ProductVariant(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='variants')
    model_type = models.CharField(max_length=100)
    color = models.CharField(max_length=100)
    base_price = models.DecimalField(max_digits=10, decimal_places=2)
    discounted_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    stock = models.PositiveIntegerField()
    active = models.BooleanField(default=True)
    slug = models.SlugField(max_length=100, unique=True, blank=True)
    sku = models.CharField(max_length=100, unique=True, blank=True)
    rating = models.DecimalField(max_digits=2, decimal_places=1, null=True, blank=True, default=0.0)
    num_reviews = models.PositiveIntegerField(null=True, blank=True, default=0)

    def Meta(self):
        unique_together = ('product', 'model_type', 'color')


    def __str__(self):
        return f'{self.product.name} - {self.model_type} - {self.color} - {self.product.created_by.username}'

class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_images')
    image = VersatileImageField(
        'Image', 
        upload_to=upload_image_path,
        ppoi_field='image_ppoi',
        null=False, 
        blank=False,
    )

    image_ppoi = PPOIField('Image PPOI', default='0.5x0.5')

    def __str__(self):
        return f'{self.product.name} - {self.image}'

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if self.image:
            self.image.create(size='thumbnail', quality=90)

class ProductVariantImage(models.Model):
    variant = models.ForeignKey(ProductVariant, on_delete=models.CASCADE, related_name='variant_images')
    image = VersatileImageField(
        'Image', 
        upload_to=upload_image_path,
        ppoi_field='image_ppoi',
        null=False, 
        blank=False,
    )

    image_ppoi = PPOIField('Image PPOI', default='0.5x0.5')

    def __str__(self):
        return f'{self.variant.product.name} - {self.variant.model_type} - {self.variant.color} - {self.image}'

class Review(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='reviews')
    user = models.ForeignKey('accounts.CustomUser', on_delete=models.CASCADE, related_name='reviews')
    rating = models.DecimalField(max_digits=2, decimal_places=1, null=True, blank=True, default=0.0)
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.product.name} - {self.user.username} - {self.rating}'