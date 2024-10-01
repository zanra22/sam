from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver
from .models import Product, ProductVariant
from .utils import generate_unique_sku, generate_unique_slug


@receiver(pre_save, sender=Product)
def set_product_sku_and_slug(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = generate_unique_slug(instance, instance.name)

    if not instance.sku:
        instance.sku = generate_unique_sku(
            product_name=instance.name,
            category=instance.category,
            brand=instance.brand
        )
        while Product.objects.filter(sku=instance.sku).exists() or ProductVariant.objects.filter(sku=instance.sku).exists():
            instance.sku = generate_unique_sku(
                product_name=instance.name,
                category=instance.category,
                brand=instance.brand
            )


@receiver(pre_save, sender=ProductVariant)
def set_product_variant_sku_and_slug(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = generate_unique_slug(instance, f'{instance.product.name} - {instance.color}')

    if not instance.sku:
        instance.sku = generate_unique_sku(
            product_name=instance.product.name,
            category=instance.product.category,
            brand=instance.product.brand,
            variant_name=instance.color
        )
        while Product.objects.filter(sku=instance.sku).exists() or ProductVariant.objects.filter(sku=instance.sku).exists():
            instance.sku = generate_unique_sku(
                product_name=instance.product.name,
                category=instance.product.category,
                brand=instance.product.brand,
                variant_name=instance.color
            )

@receiver(post_save, sender=Product)
def create_initial_variant(sender, instance, created, *args, **kwargs):
    if created:
        ProductVariant.objects.create(
            product=instance,
            model_type=instance.model_type,
            color=instance.color,  # Replace with a sensible default or logic
            base_price=instance.base_price,  # Use the product's base price
            discounted_price=instance.discounted_price,  # Use the product's discounted price
            stock=instance.stock,  # Initial stock from the product
            image=instance.image,  # Use the product's image if relevant
            active=instance.active,  # Variant is active if the product is active
            slug=f"{instance.slug}-init",  # Create a unique slug for the variant
            sku=f"{instance.sku}-INIT",  # Create a unique SKU for the variant
        )