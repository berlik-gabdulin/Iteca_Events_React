import { useSelector } from "react-redux";

export const HeaderPage = () => {
	const data = useSelector((state) => {
		return state;
	});
	return (
		<section className="events">
			<div className="container">
				<h3 className="section__title">{data.pageTitle}</h3>
			</div>
		</section>
	);
};
