import React from "react";
import { useSelector } from "react-redux";

export const AboutUs = () => {
	const { text_about } = useSelector(({ about: { text_about } }) => ({
		text_about,
	}));

	return (
		<section className="about-content">
			<div className="container">
				{text_about.map((item, index) => {
					return (
						<p className="about-content__text" key={index}>
							{item}
						</p>
					);
				})}
			</div>
		</section>
	);
};
