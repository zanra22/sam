from ninja import NinjaAPI, Schema
from ninja_extra import NinjaExtraAPI
from ninja_jwt.authentication import JWTAuth
api = NinjaExtraAPI()


class UserSchema(Schema):
    id: str
    email: str
    username: str
    is_active: bool
    is_staff: bool
    is_admin: bool
    is_authenticated: bool

@api.get("/profile", response=UserSchema, auth=JWTAuth())
def get_profile(request):
    return request.user