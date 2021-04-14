import { useDispatch, useSelector } from "react-redux";
import { setHeadTitle } from "../store/action";
import { useFormik } from "formik";
import { Fragment } from "react";
import axios from "axios";

export const Contacts = () => {
	// const dispatch = useDispatch();
	const data = useSelector((state) => {
		return state.contacts;
	});

	const formik = useFormik({
		initialValues: {
			fullName: "",
			company: "",
			email: "",
			message: "",
		},
		onSubmit: (values) => {
			const formData = new FormData();

			formData.append("fullName", values.fullName);
			formData.append("company", values.company);
			formData.append("email", values.email);
			formData.append("message", values.message);

			axios
				.post(
					"http://dev.ica-eurasia.com/wp-json/contact-form-7/v1/contact-forms/119/feedback",
					formData,
					{
						headers: { "Content-Type": "multipart/form-data" },
					}
				)
				.then((res) => console.log(res));
		},
	});

	// dispatch(
	// 	setHeadTitle({
	// 		isHome: false,
	// 		pageTitle: data.page_title,
	// 	})
	// );

	const phoneLink = `tel:${data.phone}`;

	return (
		<>
			<section className="contacts-content">
				<div className="container">
					<div className="col-50">
						{data.phone !== "" ? (
							<div className="text-group">
								Phone: <a href={phoneLink}>{data.phone}</a>
							</div>
						) : null}
						{data.address !== "" ? (
							<div className="text-group">
								<p>Address</p>
								<p>{data.address}</p>
							</div>
						) : null}
						{data.hours !== [""] ? (
							<div className="text-group">
								<p>Hours:</p>
								<p>
									{data.hours.map((item, index) => (
										<Fragment key={index}>
											{item}
											<br />
										</Fragment>
									))}
								</p>
							</div>
						) : null}
					</div>
					<div className="col-50">
						<div className="map">
							{data.map_link !== "" ? (
								<iframe
									src={data.map_link}
									loading="lazy"
									title="Location Map"
								></iframe>
							) : null}
						</div>
						<form className="form" onSubmit={formik.handleSubmit}>
							<div className="input-group">
								<label htmlFor="fullName">Name</label>
								<input
									type="text"
									name="fullName"
									className="input-group-item form-input"
									onChange={formik.handleChange}
									value={formik.values.fullName}
									required
								/>
							</div>
							<div className="input-group">
								<label htmlFor="company">Company</label>
								<input
									type="text"
									name="company"
									className="input-group-item form-input"
									onChange={formik.handleChange}
									value={formik.values.company}
									required
								/>
							</div>
							<div className="input-group">
								<label htmlFor="email">Email</label>
								<input
									type="text"
									name="email"
									className="input-group-item form-input"
									onChange={formik.handleChange}
									value={formik.values.email}
									required
								/>
							</div>
							<div className="input-group">
								<label htmlFor="message">Message</label>
								<textarea
									type="text"
									name="message"
									className="input-group-item form-input"
									onChange={formik.handleChange}
									value={formik.values.message}
									required
								></textarea>
							</div>
							<button className="form-button" type="submit">
								Send
							</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};
