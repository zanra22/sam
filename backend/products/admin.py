from django.contrib import admin
from .models import *

admin.site.register(Product)
admin.site.register(ProductVariant)
admin.site.register(ProductImage)
admin.site.register(ProductVariantImage)
admin.site.register(Review)
# Register your models here.
