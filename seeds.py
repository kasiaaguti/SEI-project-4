from app import app, db
from models.company import Company, Comment
from models.user import UserSchema
from models.post import Post, Postcomment

user_schema = UserSchema()


with app.app_context():
    db.drop_all()
    db.create_all()

# Users

    kasia, errors = user_schema.load({
    'username': 'kasia',
    'email': 'kasia@email',
    'password': 'pass',
    'password_confirmation': 'pass'
    })

    db.session.add_all([
        kasia
    ])


# Companies

    elektrobudowa = Company(name='Elektrobudowa', address='Katowice', website='https://www.elektrobudowa.pl/pl/', image='https://www.elektrobudowa.pl/assets/pics/budynek%20elbudowa%20maly.jpg?1505325485131', profile='founded 1953', lat=50.2512621, long=19.0516174)

    zpue = Company(name='ZPUE', address='Wloszczowa', website='www.zpue.pl', image='http://elektrosystemy.pl/wp-content/uploads/aktualnosci-rynek/2016/12/07/wiceprezes-abb-moze-zostac-szefem-zpue/ZPUE_4.jpg', profile='founded 1988', lat=50.8473622, long=19.9959265, employees=[kasia],)

    db.session.add_all([
        elektrobudowa,
        zpue
    ])


# Comments

    comment_one = Comment(
        content="good products",
        company=elektrobudowa
    )

    comment_two = Comment(
        content="very good products",
        company=zpue
    )

    db.session.add_all([
        comment_one,
        comment_two
    ])



# posts
    post_one = Post(
        content="post1",
        user=kasia
        )

    db.session.add_all([
        post_one

        ])


# posts
    postcomment_one = Postcomment(
        content="comments to post1",
        user=kasia,
        post=post_one
        )

    db.session.add_all([
        postcomment_one

        ])








    db.session.commit()
