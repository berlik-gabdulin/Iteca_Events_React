import React from "react";
import { useEffect } from "react";

export const AboutUs = () => {
	useEffect(() => console.log("AboutUs"), []);
	return (
		<>
			<section className="about">
				<div className="container">
					<h3 className="section__title">About Us</h3>
				</div>
			</section>
			<section className="about-content">
				<div className="container">
					<p className="about-content__text">
						ICA Eurasia is one of the region’s leading organisers of
						international trade exhibitions and conferences in the markets of
						the Middle East, Central Asia, and the Caucasus. We bring
						international companies to over 50 of the top exhibitions and
						conferences of the region, covering all sectors of the economy. We
						organise our events in the most prestigious exhibition venues,
						working with the best local partners, and are able to offer regional
						expertise to all international companies, wanting to enter new
						markets and open new opportunities.
					</p>
					<p className="about-content__text">
						ICA Eurasia works directly with its companies, and also with
						independent agents, associations and national group organisers. We
						provide all services for exhibitions, selling exhibition stand
						space, stand construction and technical services, sponsorship and
						advertising, across its portfolio of events.
					</p>
				</div>
			</section>
		</>
	);
};
