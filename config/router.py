from app import app
from controllers import companies, auth, users, posts

app.register_blueprint(companies.api, url_prefix='/api')
app.register_blueprint(auth.api, url_prefix='/api')
app.register_blueprint(users.api, url_prefix='/api')
app.register_blueprint(posts.api, url_prefix='/api')
