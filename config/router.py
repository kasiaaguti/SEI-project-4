from app import app
from controllers import companies

app.register_blueprint(companies.api, url_prefix='/api')
