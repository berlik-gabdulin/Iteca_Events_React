import "./App.css";

function App() {
	return (
		<div>
			<div className="header">
				<div className="container">
					<div className="header-logo">
						<img src="../img/main-logo.png" alt="Logo" />
					</div>
					<div className="nav-toggle">X</div>
					<nav className="header-nav">
						<ul className="navbar">
							<li className="navbar__item">
								<a href="home.html">HOME</a>
							</li>
							<li className="navbar__item">
								<a href="about.html">ABOUT US</a>
							</li>
							<li className="navbar__item">
								<a href="events.html">EVENTS</a>
							</li>
							<li className="navbar__item">
								<a href="network.html">OUR GLOBAL NETWORK</a>
							</li>
							<li className="navbar__item">
								<a href="partners.html">OUR PARTNERS</a>
							</li>
							<li className="navbar__item">
								<a href="contacts.html">CONTACTS</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<div className="hero">
				<div className="container">
					<h1 className="hero__title">FIND THE PERFECT EVENT</h1>
					<h2 className="hero__subtitle">
						We have more than 50 events in 7 countries attracting <br /> 100 000
						visitors
					</h2>
				</div>
			</div>
			<section className="search search">
				<div className="container">
					<div className="search-form">
						<div className="search-form__item">
							<input
								type="text"
								id="searching"
								placeholder="Event title, industry, country, city, month"
							/>
						</div>
						<div className="search-form__item">
							<p className="search-form__text">Search by industry</p>
							<select
								className="search-form__select"
								name="industry"
								id="industry"
							>
								<option value="1">Oil & Gas</option>
								<option value="2">Beauty</option>
								<option value="3">Building & constraction </option>
								<option value="4">Power & Water </option>
								<option value="5">Food & Hospitality</option>
								<option value="6">Defence & Security</option>
							</select>
						</div>
						<div className="search-form__item">
							<p className="search-form__text">Search by location</p>
							<select
								className="search-form__select"
								name="location"
								id="location"
							>
								<option value="1">Azerbaijan</option>
								<option value="2">Kazakhstan</option>
								<option value="3">England</option>
								<option value="4">Uzbekistan</option>
							</select>
						</div>
					</div>
					<div className="cards">
						<div className="cards-item">
							<div className="img">
								<img src="../img/card-img1.jpg" alt="" />
							</div>
							<div className="wrapper">
								<h4 className="cards-item__title">OILGASCONFERENCE</h4>
								<p className="cards-item__text">
									26th International Caspian Oil & Gas Conference
								</p>
								<p className="cards-item__date">25 - 25 February 2021</p>
								<p className="cards-item__address"> Baku, Bilgah Beach Hotel</p>
								<a href="#">Go to website</a>
							</div>
						</div>
						<div className="cards-item">
							<div className="img">
								<img src="../img/card-img2.jpg" alt="" />
							</div>
							<div className="wrapper">
								<h4 className="cards-item__title">BAKUTEL</h4>
								<p className="cards-item__text">
									25th Anniversary Azerbaijan International Telecommunications,
									Innovations and High Technologies Exhibition
								</p>
								<p className="cards-item__date">25 - 25 February 2021</p>
								<p className="cards-item__address"> Baku, Baku Expo Center</p>
								<a href="#">Go to website</a>
							</div>
						</div>
						<div className="cards-item">
							<div className="img">
								<img src="../img/card-img3.jpg" alt="" />
							</div>
							<div className="wrapper">
								<h4 className="cards-item__title">FERQLIFERDLER</h4>
								<p className="cards-item__text">
									2nd Congress for Kids with Special Needs
								</p>
								<p className="cards-item__date">25 - 25 February 2021</p>
								<p className="cards-item__address">
									Baku, Heydar Aliyev Center
								</p>
								<a href="#">Go to website</a>
							</div>
						</div>
						<div className="cards-item">
							<div className="img">
								<img src="../img/card-img4.jpg" alt="" />
							</div>
							<div className="wrapper">
								<h4 className="cards-item__title">AITF</h4>
								<p className="cards-item__text">
									19th Azerbaijan International Travel and Tourism Fair
								</p>
								<p className="cards-item__date">8 - 10 April 2022</p>
								<p className="cards-item__address">Baku, Baku Expo Center</p>
								<a href="#">Go to website</a>
							</div>
						</div>
						<div className="cards-item">
							<div className="img">
								<img src="../img/card-img5.jpg" alt="" />
							</div>
							<div className="wrapper">
								<h4 className="cards-item__title">ADEX</h4>
								<p className="cards-item__text">
									4th Azerbaijan International Defence Exhibition
								</p>
								<p className="cards-item__date">6 - 8 September 2022</p>
								<p className="cards-item__address">Baku, Baku Expo Center</p>
								<a href="#">Go to website</a>
							</div>
						</div>
						<div className="cards-item">
							<div className="img">
								<img src="../img/card-img6.jpg" alt="" />
							</div>
							<div className="wrapper">
								<h4 className="cards-item__title">CIPS</h4>
								<p className="cards-item__text">
									13th International Exhibition for Internal Security, Safety
									and Rescue Equipment
								</p>
								<p className="cards-item__date">6 - 8 September 2022</p>
								<p className="cards-item__address">
									Baku, Heydar Aliyev Center
								</p>
								<a href="#">Go to website</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<footer className="footer">
				<div className="container">
					<div className="footer__text">
						<p>
							Copyright © 2021 ICA Eurasia. All right reserved. Commercial
							License No: 95244.{" "}
							<a
								href="http://www.ica-eurasia.com/privacy.html"
								target="_blank"
								rel="noreferrer"
							>
								Cookie and Privacy Policy.
							</a>
						</p>
					</div>
				</div>
			</footer>
			<div className="modal mfp-hide" id="feedback-modal">
				<div className="modal-form">
					<h3 className="modal-form__title">Contact Us</h3>
					<div className="input-group">
						<input
							type="text"
							name="name"
							className="input-group-item search-form__input"
							placeholder="Contact person (full name)*"
						/>
					</div>
					<div className="input-group">
						<input
							type="text"
							name="company"
							className="input-group-item search-form__input"
							placeholder="Company name*"
						/>
					</div>
					<div className="input-group">
						<input
							type="text"
							name="email"
							className="input-group-item search-form__input"
							placeholder="Email*"
						/>
					</div>
					<div className="input-group">
						<input
							type="text"
							name="phone"
							className="input-group-item search-form__input"
							placeholder="Contact phone number*"
						/>
					</div>
					<button className="modal-search-form__button">Send</button>
				</div>
			</div>
			<div className="custom">
				<div className="wrapper">
					<a href="#feedback-modal" className="custom-button">
						Book a stand
					</a>
				</div>
			</div>
		</div>
	);
}

export default App;
