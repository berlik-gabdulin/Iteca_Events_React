import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { EventCard } from "../components/eventCard";
import { Loader } from "../components/loader";
import { EventsService } from "../server/eventsService";

export const Home = () => {
	const dispatch = useDispatch();
	const { getEventsArrThunk } = EventsService();
	const fetchStatus = useSelector(({ fetchStatus }) => fetchStatus);
	const eventsArr = useSelector(({ eventsArr }) => eventsArr);

	useEffect(() => {
		if (!fetchStatus) {
			dispatch(getEventsArrThunk());
		}
	}, []);
	const sortedEvents = [
		...eventsArr.sort((a, b) => {
			return b.beginDate - a.beginDate;
		}),
	];

	console.log("homePage events ", eventsArr);

	return (
		<div>
			<section className="search search">
				<div className="container">
					<div className="search-form">
						<div className="search-form__item">
							<input
								type="text"
								id="searching"
								placeholder="Event title, industry, country, city, month"
							/>
						</div>
						{/* <div className="search-form__item">
							<p className="search-form__text">Search by industry</p>
							<select
								className="search-form__select"
								name="industry"
								id="industry"
							>
								<option value="1">Oil & Gas</option>
								<option value="2">Beauty</option>
								<option value="3">Building & constraction </option>
								<option value="4">Power & Water </option>
								<option value="5">Food & Hospitality</option>
								<option value="6">Defence & Security</option>
							</select>
						</div> */}
						<div className="search-form__item">
							<p className="search-form__text">Search by location</p>
							<select
								className="search-form__select"
								name="location"
								id="location"
							>
								<option value="1">Azerbaijan</option>
								<option value="2">Kazakhstan</option>
								<option value="3">England</option>
								<option value="4">Uzbekistan</option>
							</select>
						</div>
					</div>
					<div className="cards">
						{sortedEvents.length ? (
							sortedEvents.map((item) => {
								return <EventCard event={item} key={item.id} />;
							})
						) : (
							<CardsWrapper>
								<Loader />
							</CardsWrapper>
						)}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;

const CardsWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
