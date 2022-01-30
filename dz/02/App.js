const Phone = (props) => (
    <a href={'tel:' + props.href}><div className={props.where + '-phone'}></div></a>
);

const PhoneLink = (props) => (
    <div className={props.where + '-phonelink'}><a href={'tel:' + props.phone}>{'+' + props.phone}</a></div>
);

const Header = () => (
    <header>
		<div className="wrapper">
			<div className="header">
				<a href="#"><div className="header-logo"></div></a>
                <Phone href="888" where="header" />
                <PhoneLink phone="7(962)556-1234" where="header" />
			</div>
		</div>
	</header>
);

const Main = () => (
    <main>
		<div className="wrapper">
			<div className="main">
				<h1 className="main-head">Заголовок c уникальным торговым предложение по системе 4U</h1>
				<div className="main-small">Описания предлжения компании. Сайт рыбатекст поможет дизайнеру, верстальщику,
				                        вебмастеру сгенерировать несколько абзацев более.
				</div>
				<button className="btn main-btn"><span>Подробнее</span></button>
			</div>
		</div>
	</main>
);


const FeaturesItem = (props) => (
    <div className="features-slider_item">
        <div className="features-img" style={ {backgroundImage: 'url(./images/' + props.numImg +'.svg)'} }></div>
        <div className="features-feature">{ props.text }</div>
    </div>
);

const FeaturesSliderArrow = (props) => (
    <svg width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg">
        <path
            d={props.d}>
        </path>
    </svg>
);

const Features = () => (
    <section className="features">
		<div className="wrapper">
			<div className="features-wrapper">
				<h2 className="features-head">Уникальный заголовок для преимущества компании</h2>
				<div className="features-subhead">О нас</div>
				<div className="features-description">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
				                                  сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему
				                                  оратору отточить.
				</div>
				<div className="features-slider">
					<div className="features-slider_items">
                        <FeaturesItem text="Первое целевое преимущество" numImg="1" />
                        <FeaturesItem text="Второе целевое преимущество" numImg="2" />
                        <FeaturesItem text="Третье целевое преимущество" numImg="3" />
                        <FeaturesItem text="Четвертое целевое преимущество" numImg="4" />
					</div>
					<button className="features-slider-arrow features-slider-prev">
                        <FeaturesSliderArrow width="9" height="16"
                            d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z" />
					</button>
					<button className="features-slider-arrow features-slider-next">
                        <FeaturesSliderArrow width="9" height="16"
                            d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z" />
					</button>
				</div>
			</div>
		</div>
	</section>
);

const InputField = (props) => (
    <input type={props.type} placeholder={props.placeholder} />
);

const Contact = () => (
    <section className="contact">
		<div className="wrapper">
			<div className="contact-wrapper">
				<h2 className="contact-title">Остались вопросы?</h2>
				<div className="contact-description">Оставьте номер телефона, и мы перезвоним вам</div>
				<form action="../mailer.smart.php" className="contact-form">
                    <InputField type="text" placeholder="Ваше имя" />
                    <InputField type="tel" placeholder="Телефон" />
                    <InputField type="email" placeholder="E-mail" />
					<button className="btn contact-btn"><span>Позвоните мне</span></button>
				</form>
				<div className="contact-personal">Я даю своё <a href="#">согласие</a> на обработку моих персональных данных.
				</div>
			</div>
		</div>
	</section>
);

const Footer = () => (
    <footer>
        <div className="footer">
            <div className="footer-logo"></div>
            <div className="footer-company"><span>© 2020 XXXcompany. Все права защищены.</span></div>
            <Phone href="888" where="footer" />
            <div className="footer-websurfer"><span className="footer-websurfer_build">Сделано</span> <a href="#">Ваше имя</a></div>
            <PhoneLink phone="7(962)556-1234" where="footer" />
        </div>
    </footer>
);

const Body = () => (
    <React.Fragment>
        <Header />
        <Main />
        <Features />
        <Contact />
        <Footer />
    </React.Fragment>
);

ReactDOM.render(<Body />, document.getElementById('root'));