import { useDispatch, useSelector } from "react-redux";
import { setHeadTitle } from "../store/action";
import { useFormik } from "formik";
import { Fragment, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Loader } from "../components/loader";

export const Contacts = () => {
	const [success, setSuccess] = useState(false);
	const [status, setStatus] = useState(false);
	const [loader, setLoader] = useState(false);
	// const dispatch = useDispatch();
	const data = useSelector((state) => {
		return state.contacts;
	});

	const showSuccess = () => {
		setSuccess(true);
		setLoader(false);
		setTimeout(() => {
			setStatus(false);
			setSuccess(false);
		}, 2000);
	};

	const formik = useFormik({
		initialValues: {
			fullName: "",
			company: "",
			email: "",
			message: "",
		},
		onSubmit: (values) => {
			setStatus(true);
			setLoader(true);

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
				.then((res) => {
					console.log(res);
					showSuccess();
				});
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
						<Map>
							{data.map_link !== "" ? (
								<iframe
									src={data.map_link}
									loading="lazy"
									title="Location Map"
								></iframe>
							) : null}
						</Map>
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
							{status ? (
								<Success>
									{loader ? <Loader /> : null}
									{success ? (
										<SuccessMessage>
											Your message has been sent successfully.
										</SuccessMessage>
									) : null}
								</Success>
							) : null}
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

const Success = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	bottom: 0;
	width: 100%;
	background-color: rgba(255, 255, 255, 0.7);
`;

const SuccessMessage = styled.h4`
	text-align: center;
	text-transform: uppercase;
	font-size: 18px;
`;

const Map = styled.div`
	position: relative;
	padding-top: 60%;
	display: flex;
	filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.4));
	border-radius: 10px;
	overflow: hidden;
	height: 0;
	iframe {
		position: absolute;
		display: block;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`;
