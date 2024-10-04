from ninja import Schema
from uuid import UUID
from typing import List
from accounts.schemas import UserSchema


class ReviewListSchema(Schema):
    id: UUID
    user: UserSchema
    product_id: UUID  # Use UUID for product_id

    @staticmethod
    def resolve_user(obj):
        return UserSchema.from_orm(obj.user)

    @staticmethod
    def resolve_product(obj):
        return str(obj.product.id)


class ProductListSchema(Schema):
    id: UUID
    name: str
    created_by: UserSchema
    review_list: List[ReviewListSchema] = []  # Default to empty list
