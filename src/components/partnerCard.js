import React from "react";

export const Partner = ({ data }) => {
	return data.map((partner, index) => {
		const description = partner.description.split("<br />");

		console.log(partner);

		return (
			<div className="group-item item" key={index}>
				<div className="item-card">
					<div className="item-card__title">
						<img src={partner.logo_url} alt="" />
						<p>{partner.partners_name}</p>
					</div>
					<div className="item-card__text">
						{description.map((text, index) => {
							if (text !== "") {
								return <p key={index}>{text}</p>;
							}
						})}
					</div>
					<a
						href={partner.website_link}
						nofollow="nofollow"
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
