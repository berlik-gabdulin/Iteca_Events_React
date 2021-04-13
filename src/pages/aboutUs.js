import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHeadTitle } from "../store/action";

export const AboutUs = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => {
		return state.about;
	});
	dispatch(
		setHeadTitle({
			isHome: false,
			pageTitle: data.page_title,
		})
	);
	return (
		<section className="about-content">
			<div className="container">
				{data.text_about.map((item) => {
					return <p className="about-content__text">{item}</p>;
				})}
			</div>
		</section>
	);
};
