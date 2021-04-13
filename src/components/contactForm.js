import axios from "axios";

export const ContactForm = () => {
	const sendForm = axios.post(
		"http://dev.ica-eurasia.com/wp-json/contact-form-7/v1/contact-forms/119/feedback"
		// {
		// 	body: {
		// 		fullName,
		// 		company,
		// 		email,
		// 		message,
		// 	},
		// }
	);
	// .then((res) => {
	// 	console.log(res.json());
	// });

	return (
		<form className="modal-form" onSubmit={sendForm}>
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
			<button className="modal-search-form__button" type="submit">
				Send
			</button>
		</form>
	);
};
