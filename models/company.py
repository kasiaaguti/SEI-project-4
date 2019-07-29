from app import db, ma
from models.base import BaseModel, BaseSchema
from marshmallow import fields
from .user import User


users_companies = db.Table(
    'users_companies',
    db.Column('user_id', db.Integer, db.ForeignKey('users.id')),
    db.Column('company_id', db.Integer, db.ForeignKey('companies.id'))
)


class Company(db.Model, BaseModel):

    __tablename__ = 'companies'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)
    city = db.Column(db.String(300), nullable=False)
    street = db.Column(db.String(300), nullable=False)
    number = db.Column(db.String(300), nullable=False)
    postcode = db.Column(db.String(300), nullable=False)
    website = db.Column(db.String(300), nullable=False)
    image = db.Column(db.String(300), nullable=False)
    profile = db.Column(db.String(500), nullable=False)
    lat = db.Column(db.Float, nullable=False)
    long = db.Column(db.Float, nullable=False)
    employees = db.relationship('User', secondary=users_companies, backref='companies')


class CompanySchema(ma.ModelSchema, BaseSchema):
    class Meta:
        model = Company

    comments = fields.Nested('CommentSchema', many=True)
    employees = fields.Nested('UserSchema', many=True, only=('name', 'id', 'image'))

class Comment(db.Model, BaseModel):

    __tablename__ = 'comments'

    content = db.Column(db.Text, nullable=False)
    company_id = db.Column(db.Integer, db.ForeignKey('companies.id'))
    company = db.relationship('Company', backref='comments')
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref='comments_made')

class CommentSchema(ma.ModelSchema, BaseSchema):

    class Meta:
        model = Comment

    user = fields.Nested('UserSchema')
    company = fields.Nested('CompanySchema', only=('id', 'name'))
