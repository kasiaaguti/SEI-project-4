from app import app, db
from models.company import Company, Comment


with app.app_context():
    db.drop_all()
    db.create_all()

    elektrobudowa = Company(name='Elektrobudowa', address='Katowice', website='https://www.elektrobudowa.pl/pl/', image='https://www.elektrobudowa.pl/assets/pics/budynek%20elbudowa%20maly.jpg?1505325485131', profile='founded 1953')

    zpue = Company(name='ZPUE', address='Wloszczowa', website='www.zpue.pl', image='http://elektrosystemy.pl/wp-content/uploads/aktualnosci-rynek/2016/12/07/wiceprezes-abb-moze-zostac-szefem-zpue/ZPUE_4.jpg', profile='founded 1988')


    comment_one = Comment(
    content="good products",
    company=elektrobudowa
    )

    comment_two = Comment(
    content="very good products",
    company=zpue
    )






    db.session.add(elektrobudowa)
    db.session.add(zpue)
    db.session.add(comment_one)
    db.session.add(comment_two)

    db.session.commit()
