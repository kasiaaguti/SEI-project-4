from datetime import datetime, timedelta
from marshmallow import validates_schema, ValidationError, fields
from app import db, ma, bcrypt
from config.environment import secret
from .base import BaseModel, BaseSchema
from .user import User


class Post(db.Model, BaseModel):

    __tablename__ = 'posts'

    content = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref='posts')

class PostSchema(ma.ModelSchema, BaseSchema):

    user = fields.Nested('UserSchema', only=('username', 'id'))

    class Meta:
        model = Post


class Postcomment(db.Model, BaseModel):

    __tablename__ = 'postcomments'

    content = db.Column(db.Text, nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'))
    post = db.relationship('Post', backref='posts')
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref='postcomments')

class PostcommentSchema(ma.ModelSchema, BaseSchema):

    user = fields.Nested('UserSchema', only=('username', 'id'))

    class Meta:
        model = Postcomment
