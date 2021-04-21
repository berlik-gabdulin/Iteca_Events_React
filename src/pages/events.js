import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Loader } from "../components/loader";

export const Events = () => {
	const data = useSelector((state) => state.events.industry);

	return (
		<>
			<section className="events-cards">
				<div className="container">
					<div className="cards">
						{data.length ? (
							data.map((event, index) => {
								return (
									<div className="cards-item" key={index}>
										<img src={event.image.url} alt="" />
										<Link
											className="cards-item__text"
											to={`/events/${event.industry}/${event.title}`}
										>
											{event.title}
										</Link>
									</div>
								);
							})
						) : (
							<Loader />
						)}
					</div>
				</div>
			</section>
		</>
	);
};
