from flask import Blueprint, jsonify, request
from models.post import Post, PostSchema, Postcomment, PostcommentSchema
from models.user import User, UserSchema
from lib.secure_route import secure_route

api = Blueprint('posts', __name__)
post_schema = PostSchema()
post_comment_schema = PostcommentSchema()


@api.route('/posts/<int:post_id>', methods=['GET'])
def show(post_id):
    post = Post.query.get(post_id)
    if not post:
        return jsonify({'message': 'not found'}), 404
    return post_schema.jsonify(post), 200


@api.route('/users/<int:user_id>/posts', methods=['POST'])
def post_create(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'message': 'Not Found'}), 404
    data = request.get_json()
    post, errors = post_schema.load(data)
    if errors:
        return jsonify(errors), 422
    post.user = user
    post.save()
    return post_schema.jsonify(post), 202


@api.route('/users/<int:user_id>/posts/<int:post_id>', methods=['DELETE'])
def post_delete(**kwargs):
    post = Post.query.get(kwargs['post_id'])
    if not post:
        return jsonify({'message': 'Not Found'}), 404
    post.remove()
    return '', 204



@api.route('/users/<int:user_id>/posts/postcomment', methods=['POST'])
def postcomment_create(post_id):
    post = Post.query.get(post_id)
    if not post:
        return jsonify({'message': 'Not Found'}), 404
    data = request.get_json()
    post_comment, errors = post_comment_schema.load(data)
    if errors:
        return jsonify(errors), 422
    post_comment.post = post
    post_comment.save()
    return post_schema.jsonify(post), 202

#
@api.route('/users/<int:cat_id>/posts/<int:post_id>/postcomment/<int:postcomment_id>', methods=['DELETE'])
def postcomment_delete(**kwargs):
    post = Post.query.get(kwargs['post_id'])
    if not post:
        return jsonify({'message': 'Not Found'}), 404
    post.remove()
    return '', 204
