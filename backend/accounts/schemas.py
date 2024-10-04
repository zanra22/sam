from ninja import Schema

class UserSchema(Schema):
    id: int
    email: str
    username: str
    is_active: bool
    is_staff: bool
    is_admin: bool
    is_authenticated: bool