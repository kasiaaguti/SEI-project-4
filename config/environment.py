import os

db_uri = os.getenv('DATABASE_URL', 'postgres://localhost:5432/companies')

secret = os.getenv('SECRET', 'my_secret')
