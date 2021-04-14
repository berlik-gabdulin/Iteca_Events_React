import axios from "axios";
import { useFormik } from "formik";

export const Footer = () => {
	const formik = useFormik({
		initialValues: {
			fullName: "",
			company: "",
			email: "",
			phone: "",
		},
		onSubmit: (values) => {
			const formData = new FormData();

			formData.append("fullName", values.fullName);
			formData.append("company", values.company);
			formData.append("email", values.email);
			formData.append("phone", values.phone);

			axios
				.post(
					"http://dev.ica-eurasia.com/wp-json/contact-form-7/v1/contact-forms/120/feedback",
					formData,
					{
						headers: { "Content-Type": "multipart/form-data" },
					}
				)
				.then((res) => {
					console.log(res);
					document.querySelector(".mfp-close").click();
				});
		},
	});

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
				<form className="modal-form" onSubmit={formik.handleChange}>
					<h3 className="modal-form__title">Contact Us</h3>
					<div className="input-group">
						<input
							type="text"
							name="name"
							className="input-group-item search-form__input"
							placeholder="Contact person (full name)*"
							onChange={formik.handleChange}
							value={formik.values.fullName}
							required
						/>
					</div>
					<div className="input-group">
						<input
							type="text"
							name="company"
							className="input-group-item search-form__input"
							placeholder="Company name*"
							onChange={formik.handleChange}
							value={formik.values.company}
							required
						/>
					</div>
					<div className="input-group">
						<input
							type="text"
							name="email"
							className="input-group-item search-form__input"
							placeholder="Email*"
							onChange={formik.handleChange}
							value={formik.values.email}
							required
						/>
					</div>
					<div className="input-group">
						<input
							type="text"
							name="phone"
							className="input-group-item search-form__input"
							placeholder="Contact phone number*"
							onChange={formik.handleChange}
							value={formik.values.phone}
							required
						/>
					</div>
					<button className="modal-search-form__button" type="submit">
						Send
					</button>
				</form>
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
