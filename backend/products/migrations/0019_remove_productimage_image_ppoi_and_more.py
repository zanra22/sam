# Generated by Django 5.1.1 on 2024-10-03 04:59

import products.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0018_remove_productvariantimage_image_ppoi_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='productimage',
            name='image_ppoi',
        ),
        migrations.AlterField(
            model_name='productimage',
            name='image',
            field=models.ImageField(upload_to=products.models.upload_image_path),
        ),
    ]
