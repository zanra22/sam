# Generated by Django 5.1.1 on 2024-09-26 05:40

import versatileimagefield.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0009_alter_product_image_ppoi'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image_ppoi',
            field=versatileimagefield.fields.PPOIField(default='0.5x0.5', editable=False, max_length=20, verbose_name='Image PPOI'),
        ),
    ]
