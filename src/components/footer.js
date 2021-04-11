export const Footer = () => {
	return (
		<>
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
		</>
	);
};
