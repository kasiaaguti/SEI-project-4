from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from config.environment import db_uri

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

# pylint: disable=C0413, W0611
from config import router



# 2. In seeds.py
#  - Add Comment into your import from your resource
#  - Create some comments, add and commit them
#  - SEED and TEST!!
# 3. In models/cat.py
#  - Import fields from marshmallow
#  - Add comment fields to your resource schema (e.g. CatSchema)
# 4. In the controllers
#  - Make create and delete routes for the comments
# 5. TEST!!! TEST!!! TEST!!!
