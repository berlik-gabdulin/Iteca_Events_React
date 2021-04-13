import { ContactForm } from "./contactForm";

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
				<ContactForm />
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
