from flask import Blueprint, jsonify, request
from models.company import Company, CompanySchema, Comment, CommentSchema
from lib.secure_route import secure_route



api = Blueprint('companies', __name__)
company_schema = CompanySchema()
comment_schema = CommentSchema()

@api.route('/companies', methods=['GET'])
def index():
    companies = Company.query.all()
    return company_schema.jsonify(companies, many=True), 200

@api.route('/companies/<int:company_id>', methods=['GET'])
def show(company_id):
    company = Company.query.get(company_id)
    if not company:
        return jsonify({'message': 'not found'}), 404
    return company_schema.jsonify(company), 200

@api.route('/companies', methods=['POST'])
@secure_route
def create():
    data = request.get_json()
    company, errors = company_schema.load(data)
    if errors:
        return jsonify(errors), 422
    company.save()
    return company_schema.jsonify(company), 201

@api.route('/companies/<int:company_id>', methods=['PUT'])
@secure_route
def update(company_id):
    company = Company.query.get(company_id)
    if not company:
        return jsonify({'message': 'Not Found'}), 404
    data = request.get_json()
    company, errors = company_schema.load(data, instance=company, partial=True)
    if errors:
        return jsonify(errors), 422
    company.save()
    return company_schema.jsonify(company), 202

@api.route('/companies/<int:company_id>', methods=['DELETE'])
@secure_route
def delete(company_id):
    company = Company.query.get(company_id)
    if not company:
        return jsonify({'message': 'Not Found'}), 404
    company.remove()
    return '', 204

@api.route('/companies/<int:company_id>/comments', methods=['POST'])
def comment_create(company_id):
    company = Company.query.get(company_id)
    if not company:
        return jsonify({'message': 'Not Found'}), 404
    data = request.get_json()
    comment, errors = comment_schema.load(data)
    if errors:
        return jsonify(errors), 422
    comment.company = company
    comment.save()
    return comment_schema.jsonify(comment), 202


@api.route('/companies/<int:cat_id>/comments/<int:comment_id>', methods=['DELETE'])
def comment_delete(**kwargs):
    comment = Comment.query.get(kwargs['comment_id'])
    if not comment:
        return jsonify({'message': 'Not Found'}), 404
    comment.remove()
    return '', 204
