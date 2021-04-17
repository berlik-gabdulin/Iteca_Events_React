import { useEffect, useState } from "react";
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
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("");
	const [sortedEvents, setSortedEvents] = useState();
	const [eventsToShow, setEventsToShow] = useState([]);

	useEffect(() => {
		if (!fetchStatus) {
			dispatch(getEventsArrThunk());
		}
	}, []);

	useEffect(() => {
		const arraySorted = [
			...eventsArr.sort((a, b) => {
				return new Date(a.beginDate) - new Date(b.beginDate);
			}),
		];

		const filterEventsArray = (search, filter) => {
			const searchLCase = search.toLowerCase();
			const filterLCase = filter.toLowerCase();

			const filteredEvents = [
				...arraySorted.filter((event) => {
					let title = event.project.toLowerCase(),
						description = event.description.toLowerCase(),
						location = event.location.toLowerCase(),
						country = event.country.toLowerCase(),
						textDate = event.textDate.toLowerCase();

					return (
						(title.indexOf(searchLCase) > -1 ||
							description.indexOf(searchLCase) > -1 ||
							location.indexOf(searchLCase) > -1 ||
							textDate.indexOf(searchLCase) > -1) &&
						country.indexOf(filterLCase) > -1
					);
				}),
			];
			console.log("filteredEvents", filteredEvents);
			setEventsToShow(filteredEvents);
		};
		setSortedEvents(filterEventsArray(search, filter));
		console.log(filter);
	}, [eventsArr, search, filter]);

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
								onChange={(event) => setSearch(event.target.value)}
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
								onChange={(event) => setFilter(event.target.value)}
							>
								<option value="">Choose location...</option>
								<option value="Azerbaijan">Azerbaijan</option>
								<option value="Kazakhstan">Kazakhstan</option>
								<option value="England">England</option>
								<option value="Uzbekistan">Uzbekistan</option>
							</select>
						</div>
					</div>
					<div className="cards">
						{eventsToShow !== [] ? (
							eventsToShow.map((item) => {
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
