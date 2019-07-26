from flask import Blueprint, jsonify, request
from models.user import User, UserSchema
from lib.secure_route import secure_route

api = Blueprint('users', __name__)
user_schema = UserSchema()


@api.route('/users', methods=['GET'])
def index():
    users = User.query.all()
    return user_schema.jsonify(users, many=True), 200

@api.route('/users/<int:user_id>', methods=['GET'])
def show(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'message': 'not found'}), 404
    return user_schema.jsonify(user), 200
