import os
from app import app
from controllers import companies, auth, users, posts

app.register_blueprint(companies.api, url_prefix='/api')
app.register_blueprint(auth.api, url_prefix='/api')
app.register_blueprint(users.api, url_prefix='/api')
app.register_blueprint(posts.api, url_prefix='/api')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):

    if os.path.isfile('dist/' + path):
        return app.send_static_file(path)

    return app.send_static_file('index.html')
