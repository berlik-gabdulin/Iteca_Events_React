import { useDispatch, useSelector } from "react-redux";
import { setHeadTitle } from "../store/action";

export const Contacts = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => {
		return state.contacts;
	});

	const phoneLink = `tel:${data.phone}`;

	dispatch(
		setHeadTitle({
			isHome: false,
			pageTitle: data.page_title,
		})
	);
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
								<p>ADDRESS</p>
								<p>{data.address}</p>
							</div>
						) : null}
						{data.hours !== [""] ? (
							<div className="text-group">
								<p>Hours:</p>
								<p>
									{data.hours.map((item) => (
										<>
											{item}
											<br />
										</>
									))}
								</p>
							</div>
						) : null}
					</div>
					<div className="col-50">
						<div className="map">
							<iframe
								src={data.map_link}
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
