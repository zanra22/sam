from ninja import NinjaAPI, Schema, Router
from ninja_extra import NinjaExtraAPI
from ninja_jwt.authentication import JWTAuth
from .schemas import *
from .models import *
router = Router()

# @router.get("/", response=list[ProductListSchema])
@router.get("/", response=list[ProductListSchema])
def list_products(request):
    products = Product.objects.prefetch_related('reviews').all()
    
    # Manually serialize each product and its associated reviews
    product_list = []
    for product in products:
        # Fetch and serialize the reviews for each product
        reviews = product.reviews.all()
        serialized_reviews = [ReviewListSchema.from_orm(review) for review in reviews]
        
        # Manually construct the product schema including review_list
        product_data = ProductListSchema.from_orm(product)
        product_data.review_list = serialized_reviews  # Assign the serialized reviews
        
        product_list.append(product_data)

    return product_list




