import { useSelector } from "react-redux";

export const HeaderHome = () => {
	const data = useSelector((state) => {
		return state.homeData;
	});
	return (
		<div className="hero">
			<div className="container">
				<h1 className="hero__title">{data.title}</h1>
				<h2 className="hero__subtitle">{data.subtitle}</h2>
			</div>
		</div>
	);
};
