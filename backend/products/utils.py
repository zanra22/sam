from django.utils.text import slugify
import uuid
from .models import Product, ProductVariant
def generate_unique_sku(product_name, category, brand=None, variant_name=None):
        product_code = slugify(product_name)[:3].upper()
        category_code = slugify(category)[:3].upper()
        brand_code = slugify(brand)[:3].upper() if brand else ""
        variant_code = slugify(variant_name)[:3].upper() if variant_name else ""
        
        unique_code = str(uuid.uuid4()).split('-')[0].upper()
        sku = f"{brand_code}-{product_code}-{variant_code}-{category_code}-{unique_code}"
        
        while Product.objects.filter(sku=sku).exists() or ProductVariant.objects.filter(sku=sku).exists():
            unique_code = str(uuid.uuid4()).split('-')[0].upper()
            sku = f"{brand_code}-{product_code}-{variant_code}-{category_code}-{unique_code}"
        
        return sku


def generate_unique_slug(instance, value, slug_field='slug'):
    slug = slugify(value)
    unique_slug = slug
    count = 1

    while instance.__class__.objects.filter(**{slug_field: unique_slug}).exists():
        unique_slug = '{}-{}'.format(slug, count)
        count += 1

    return unique_slug


