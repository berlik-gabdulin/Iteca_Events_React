import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { Fragment, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Loader } from "../components/loader";
import { SiteSwitch } from "../components/siteSwitch";

export const Contacts = () => {
	const [success, setSuccess] = useState(false);
	const [status, setStatus] = useState(false);
	const [loader, setLoader] = useState(false);
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
		onSubmit: (values, { resetForm }) => {
			setStatus(true);
			setLoader(true);

			const formData = new FormData();

			formData.append("fullName", values.fullName);
			formData.append("company", values.company);
			formData.append("email", values.email);
			formData.append("message", values.message);

			axios
				.post(
					`https://${
						SiteSwitch().formUrl
					}/wp-json/contact-form-7/v1/contact-forms/119/feedback`,
					formData,
					{
						headers: { "Content-Type": "multipart/form-data" },
					}
				)
				.then((res) => {
					showSuccess();
					resetForm();
				});
		},
	});

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
						{data.map_link !== "" ? (
							<Map>
								<iframe
									src={data.map_link}
									loading="lazy"
									title="Location Map"
								></iframe>
							</Map>
						) : null}
						<form
							className="form"
							onSubmit={formik.handleSubmit}
							style={data.map_link !== "" ? { marginTop: 100 + "px" } : null}
						>
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
				<div className="container">
					<Members
						style={
							data.map_link !== ""
								? { marginTop: 0 + "px" }
								: { marginTop: 100 + "px" }
						}
						mainColor={SiteSwitch().mainColor}
						secondColor={SiteSwitch().secondColor}
					>
						{data.contacts
							? data.contacts.map((member) => {
									return (
										<div className="member" key={member?.name}>
											<img src={member.photo.url} className="member__photo" />
											<h5 className="member__name">{member?.name}</h5>
											<p className="member__industry">{member.industry}</p>
											<a href={`tel:${member.phone}`} className="member__link">
												{member.phone}
											</a>
											<a
												href={`mailto:${member.email}`}
												className="member__link"
											>
												{member.email}
											</a>
										</div>
									);
							  })
							: null}
					</Members>
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

const Members = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	max-width: 100%;
	.member {
		position: relative;
		width: 50%;
		margin-bottom: 32px;
		padding-right: 16px;
		font-size: 20px;
		@media screen and (max-width: 768px) {
			width: 100%;
		}
		&__photo {
			display: block;
			float: left;
			margin-right: 12px;
			margin-bottom: 12px;
			border-radius: 10px;
			@media screen and (max-width: 768px) {
				float: none;
				margin: 0 auto 20px;
			}
		}
		&__name {
			font-size: 24px;
			margin: 0;
		}
		&__industry {
			font-weight: 300;
		}
		&__link {
			display: block;
			margin: 1em 0;
			color: ${({ mainColor }) => (mainColor ? mainColor : "#222")} !important;
			text-decoration: none;
			&:hover {
				color: ${({ secondColor }) =>
					secondColor ? secondColor : "#222"} !important;
				text-decoration: underline;
			}
		}
	}
`;
