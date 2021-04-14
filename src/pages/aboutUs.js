import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHeadTitle } from "../store/action";

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
