import { useEffect } from "react";

export const Contacts = () => {
	useEffect(() => console.log("Contacts"), []);
	return (
		<>
			<section className="contacts">
				<div className="container">
					<h3 className="section__title">Contacts</h3>
				</div>
			</section>
			<section className="contacts-content">
				<div className="container">
					<div className="col-50">
						<div className="text-group">
							Phone: <a href="">+971 4 554 5319</a>
						</div>
						<div className="text-group">
							<p>ADDRESS</p>
							<p>
								Office No. 2609, Shatha Tower, Al-Falak Street, Dubai Media
								City, P.O. Box 502147, Dubai, U.A.E.
							</p>
						</div>
						<div className="text-group">
							<p>Hours:</p>
							<p>
								Wednesday 9AM-6PM <br />
								Thursday 9AM-6PM <br />
								Friday Closed
								<br />
								Saturday Closed <br />
								Sunday 9AM-6PM <br />
								Monday 9AM-6PM
								<br />
								Tuesday 9AM-6PM
							</p>
						</div>
					</div>
					<div className="col-50">
						<div className="map">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46586.301428006554!2d55.1630557136867!3d25.093782237028382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b5b70e18fd9%3A0xbdc3a9dbfa8e2354!2zQWwgU2hhdGhhIFRvd2VyIC0gQWwgU3Vmb3VoQWwgU3Vmb3VoIDIgLSBEdWJhaSAtINCe0LHRitC10LTQuNC90LXQvdC90YvQtSDQkNGA0LDQsdGB0LrQuNC1INCt0LzQuNGA0LDRgtGL!5e0!3m2!1sru!2skz!4v1616338470728!5m2!1sru!2skz"
								width="400"
								height="300"
								allowfullscreen=""
								loading="lazy"
							></iframe>
						</div>
						<div className="form">
							<div className="input-group">
								<label for="Name">Name</label>
								<input
									type="text"
									name="Name"
									className="input-group-item form-input"
								/>
							</div>
							<div className="input-group">
								<label for="Company">Company</label>
								<input
									type="text"
									name="Company"
									className="input-group-item form-input"
								/>
							</div>
							<div className="input-group">
								<label for="Email">Email</label>
								<input
									type="text"
									name="Email"
									className="input-group-item form-input"
								/>
							</div>
							<div className="input-group">
								<label for="Message">Message</label>
								<textarea
									type="text"
									name="Message"
									className="input-group-item form-input"
								></textarea>
							</div>
							<button className="form-button">Send</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
