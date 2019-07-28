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
    'name': 'Kasia Wypychewicz',
    'bio': 'I’m driven and enthusiastic professional with business background: I hold MSc in Management from LSE and I have experience launching new cross-border ventures across industries. I’ve always been passionate about technology, what lead me to learn JavaScript, Python and SQL.',
    'image': 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/43131042_1986056701433374_8439025766389252096_n.jpg?_nc_cat=109&_nc_oc=AQm1dJoAUpwOuW_NtuALGYW3oeawi6mo2ZL0a6C5afDj3Sd6RHQji-6TIINxGs1Z-p8XXyla7GI6KHBymNuYDD4C&_nc_ht=scontent-lht6-1.xx&oh=08ca6e4a966aaa3278fe7ca45a21ecba&oe=5DADB840',
    'email': 'kasia@email',
    'password': 'pass',
    'password_confirmation': 'pass'
    })

    db.session.add_all([
        kasia
    ])
    # lat=50.2512621,
    # long=19.0516174

# Companies

    elektrobudowa = Company(
    name='Elektrobudowa',
    city='Katowice',
    postcode='40-246',
    street='Porcelanowa',
    number='12',
    website='https://www.elektrobudowa.pl/pl/',
    image='https://www.elektrobudowa.pl/assets/pics/budynek%20elbudowa%20maly.jpg?1505325485131',
    profile='Founded in 1953. Company specializing in the supply of modern, comprehensive and complete technical solutions for power industry and other industries.',
    lat=50.2512621,
    long=19.0516174)

    zpue = Company(
    name='ZPUE',
    city='Wloszczowa',
    postcode='29-100',
    street='Jedrzejowska',
    number='79c',
    website='www.zpue.pl',
    image='http://elektrosystemy.pl/wp-content/uploads/aktualnosci-rynek/2016/12/07/wiceprezes-abb-moze-zostac-szefem-zpue/ZPUE_4.jpg',
    profile='One of leading electrical switchgear manufacturers, offering medium (MV) and low voltage (LV) solutions, transformer stations containers and more. Founded in 1988',
    lat=50.8473622,
    long=19.9959265,
    employees=[kasia],)

    abb = Company(
    name='ABB',
    city='Warszawa',
    postcode='29-100',
    street='Żegańska',
    number='1',
    website='www.abb.pl',
    image='http://www.energetyka-polska.pl/teaserbox_2283077.jpg',
    profile='ABB is a Swiss-Swedish multinational corporation headquartered in Zurich, Switzerland, operating mainly in robotics, power, heavy electrical equipment and automation technology areas. It is ranked 341st in the Fortune Global 500 list of 2018 and has been a global Fortune 500 company for 24 years.',
    lat=52.2062172,
    long=21.1711423,
    employees=[],)

    alpiq = Company(
    name='Alpiq Energy SE',
    city='Warszawa',
    postcode='00-609',
    street='al. Armii Ludowej',
    number='26',
    website='https://www.alpiq.com',
    image='http://d39raawggeifpx.cloudfront.net/styles/16_9_desktop/s3/articleimages/alpiq_media-releases_alpiq_logo_gebauede_1540x960_Cropped.jpg',
    profile='Alpiq is a leading Swiss electricity producer. We offer services in the fields of energy generation and marketing as well as energy optimisation and e-mobility.',
    lat=52.2180129,
    long=21.0081447,
    employees=[],)

    aos = Company(
    name='AOS',
    city='Koszalin',
    postcode='75-712',
    street='ul. Wojska Polskiego',
    number='24-26',
    website='www.aos.pl',
    image='http://www.aos.pl/media/top_home/top_commerce.jpg',
    profile='',
    lat=54.1854247,
    long=16.2055183,
    employees=[],)

    constrem = Company(
    name='Constrem',
    city='Mikołów',
    postcode='43-190',
    street='ul. Podleska',
    number='33',
    website='biuro@constrem.pl',
    image='http://www.polish-energy.com/cache_8360237.jpg',
    profile='',
    lat=50.1756991,
    long=18.9192793,
    employees=[],)

    elektromontaz_poznan = Company(
    name='Elektromontaż Poznań S.A.',
    city='Poznań',
    postcode='60-166',
    street='ul. Wieruszowska',
    number='12/16',
    website='www.elektromontaz.com',
    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIC3sJlgbqim5lyYfxKHyvhf7XsCaiG1jpSZBaXS1OGBtXLDK',
    profile='',
    lat=52.3815384,
    long=16.8473591,
    employees=[],)

    enea = Company(
    name='Enea Poznań',
    city='Poznań',
    postcode='60-201',
    street='ul. Górecka',
    number='1',
    website='www.enea.pl',
    image='http://www.emtech.co/wp-content/uploads/2017/08/enea-770x380-570x380.jpg',
    profile='Enea is a Polish power industry company based in Poznań. Enea is the fourth largest energy group in Poland. As of December 2017, its share in the domestic electricity sales market was 13%',
    lat=52.38589224,
    long=16.9052755,
    employees=[],)

    rafako = Company(
    name='RAFAKO',
    city='Racibórz',
    postcode='47-400',
    street='ul. Łąkowa',
    number='33',
    website='www.rafako.com.pl ',
    image='https://l.gpcdn.pl/3/32/325/325893/_res/logo3.png',
    profile='Belonging to PBG Group RAFAKO was established in 1949 and employs ca. 2000 people. The company has been always tied to power generation industry offering design and manufacture of boilers and environment protection plants. Since 1993 RAFAKO S.A. is a joint stock company which shares are quoted on the Warsaw Stock Exchange. Since 2011 RAFAKO S.A. belongs to PBG Group.',
    lat=50.0741388,
    long=18.2200556,
    employees=[],)

    mostostal_krakow = Company(
    name='Mostostal Kraków',
    city='Kraków',
    postcode='30-969',
    street='ul.Ujastek',
    number='7',
    website='www.mostostal.com.pl',
    image='https://i.wnp.pl/d/32/31/78/323178_r0_620.jpg',
    profile='MOSTOSTAL KRAKÓW S.A. is a specialised construction company which can offer services in the scope of construction and erection of all types of steel structures, erection of industrial equipment, mainly for: cement and lime, power generation, metallurgical, chemical industries.',
    lat=50.073516,
    long=20.058601,
    employees=[],)

    energomontaz_zachod_wroclaw = Company(
    name='Energomontaż Zachód Wrocław',
    city='Katowice',
    postcode='40-851',
    street='ul. Żelazna',
    number='9',
    website='www.energomontaz-zachod.pl',
    image='http://www.energomontaz-zachod.pl/pics/og.jpg',
    profile='',
    lat=50.2648628,
    long=19.0062379,
    employees=[],)

    zaklad_wykonawstwa_sieci_elektrycznych_rzeszow = Company(
    name='Zakład Wykonawstwa Sieci Elektrycznych Rzeszów',
    city='Rzeszów',
    postcode='35-105',
    street='ul. Przemysłowa',
    number='1',
    website='www.zwse.rzeszow.pl',
    image='http://www.securepro.pl/sites/default/files/securepro_ref_zwse_rzeszow_200px.png',
    profile='',
    lat=50.0263383,
    long=21.975739,
    employees=[],)


    wirbet = Company(
    name='Przedsiębiorstwo Produkcji Strunobetonowych Żerdzi Wirowanych WIRBET',
    city='Ostrów Wlkp',
    postcode='63-400',
    street='ul. Chłapowskiego',
    number='51',
    website=' www.wirbet.com.pl',
    image='https://www.radpol.eu/uploads/block/intro/wirbet.jpg',
    profile='',
    lat=51.64635,
    long=17.77713,
    employees=[],)

    veolia = Company(
    name='Veolia Energia Łódź S.A.',
    city='Łódź',
    postcode='92-550',
    street='ul. J. Andrzejewskiej',
    number='5',
    website='www.veolia.pl',
    image='https://www.veolia.com/sites/g/files/dvc2491/files/styles/crop_freeform/public/image/2015/04/Lodz-014_0.jpg?h=0f8e3b93&itok=H4V57Pub',
    profile='',
    lat=51.7466952,
    long=19.5398614,
    employees=[],)


    db.session.add_all([
        elektrobudowa,
        zpue,
        abb,
        alpiq,
        aos,
        constrem,
        elektromontaz_poznan,
        enea,
        rafako,
        mostostal_krakow,
        energomontaz_zachod_wroclaw,
        zaklad_wykonawstwa_sieci_elektrycznych_rzeszow,
        wirbet,
        veolia



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
