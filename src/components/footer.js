import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Loader } from "./loader";

export const Footer = () => {
	const [success, setSuccess] = useState(false);
	const [status, setStatus] = useState(false);
	const [loader, setLoader] = useState(false);
	const [popup, setPopup] = useState(false);
	const showSuccess = () => {
		setSuccess(true);
		setLoader(false);
		setTimeout(() => {
			setStatus(false);
			setSuccess(false);
		}, 2000);
	};

	const host = window.location.hostname;

	const siteName = () => {
		switch (host) {
			case "ica-eurasia.com":
				return {
					footerDesc: "ICA Eurasia. Commercial License No: 95244.",
					formUrl: `dev.${host}`,
				};
			case "ica.events":
				return {
					footerDesc: "ICA (JV) LTD – ICA Group. Company number 11499614.",
					formUrl: `wp.${host}`,
				};
			case "exhibitions-conferences.com":
				return {
					footerDesc:
						"I.T.E. EXHIBITIONS & CONFERENCES LIMITED – ITE E&C. Company number 02933850.",
					formUrl: `wp.${host}`,
				};
			default:
				return {
					footerDesc: "ololo",
					formUrl: `olololo.${host}`,
				};
		}
	};

	const formik = useFormik({
		initialValues: {
			fullName: "",
			company: "",
			email: "",
			phone: "",
		},
		onSubmit: (values, { resetForm }) => {
			setStatus(true);
			setLoader(true);

			const formData = new FormData();

			formData.append("fullName", values.fullName);
			formData.append("company", values.company);
			formData.append("email", values.email);
			formData.append("phone", values.phone);

			axios
				.post(
					`https://${
						siteName().formUrl
					}/wp-json/contact-form-7/v1/contact-forms/120/feedback`,
					formData,
					{
						headers: { "Content-Type": "multipart/form-data" },
					}
				)
				.then((res) => {
					console.log(res);
					showSuccess();
					resetForm();
					setPopup(false);
				});
		},
	});

	const CloseModal = (e) => {
		if (e.target === document.getElementById("ModalWrapper")) {
			setPopup(false);
		}
	};

	return (
		<>
			<footer className="footer">
				<div className="container">
					<div className="footer__text">
						<p>
							Copyright © 2021 {siteName().footerDesc} All right reserved.{" "}
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
			{popup ? (
				<ModalWrapper onClick={CloseModal} id="ModalWrapper">
					<div className="modal" id="feedback-modal">
						<CloseBtn onClick={() => setPopup(false)}>
							<img src="/img/close-bookastand.svg" />
						</CloseBtn>
						<form className="modal-form" onSubmit={formik.handleSubmit}>
							<h3 className="modal-form__title">Contact Us</h3>
							<div className="input-group">
								<input
									type="text"
									name="fullName"
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
				</ModalWrapper>
			) : null}
			<div className="custom">
				<div className="wrapper">
					<a href="#" className="custom-button" onClick={() => setPopup(true)}>
						Book a stand
					</a>
				</div>
			</div>
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

const ModalWrapper = styled.div`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #000000bb;
	z-index: 1000;
`;

const CloseBtn = styled.button`
	position: absolute;
	display: block;
	padding: 0;
	top: 15px;
	right: 15px;
	width: 20px;
	height: 20px;
	border: none;
	background: none;
	transform: scale(1);
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		transform: scale(1.3);
	}
`;
