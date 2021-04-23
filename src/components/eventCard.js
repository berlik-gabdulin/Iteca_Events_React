import React from "react";

export const EventCard = ({ event }) => {
	return (
		<div className="cards-item__wrapper">
			<div className="cards-item">
				<div className="img">
					<img src={event.image_profile} alt="" />
				</div>
				<div className="wrapper">
					<h4 className="cards-item__title">{event.project}</h4>
					<p className="cards-item__text">{event.description}</p>
					<p className="cards-item__date">{event.textDate}</p>
					<p className="cards-item__address">{event.location}</p>
					<div>
						<a href={event.website} target="_blank" rel="noreferrer">
							Go to website
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
