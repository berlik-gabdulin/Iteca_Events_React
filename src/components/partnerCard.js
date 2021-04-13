import React from "react";

export const Partner = ({ data }) => {
	return data.map((partner) => {
		const description = partner.description.split("<br />");

		return (
			<div className="group-item item" key={partner.partners_name}>
				<div className="item-card">
					<div className="item-card__title">
						<img src={partner.logo_url} alt="" />
						<p>{partner.partners_name}</p>
					</div>
					<div className="item-card__text">
						{description.map((text) => {
							if (text !== "") {
								return <p>{text}</p>;
							}
						})}
					</div>
					<a
						href={partner.website_link}
						nofollow
						rel="noreferrer"
						target="_blank"
					>
						Go to website
					</a>
				</div>
				<div className="group-item-img">
					<img src={partner.photo_url} alt="" />
				</div>
			</div>
		);
	});
};
