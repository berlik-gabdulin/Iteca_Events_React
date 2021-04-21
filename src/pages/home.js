import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { EventCard } from "../components/eventCard";
import { Loader } from "../components/loader";
import { EventsService } from "../server/eventsService";
import { setSortedEvents } from "../store/action";

export const Home = () => {
	const dispatch = useDispatch();
	const { getEventsArrThunk } = EventsService();
	const fetchStatus = useSelector(({ fetchStatus }) => fetchStatus);
	const eventsArr = useSelector(({ eventsArr }) => eventsArr);
	const [search, setSearch] = useState("");
	const [filterCountry, setFilterCountry] = useState("");
	const [filterIndustry, setFilterIndustry] = useState("");
	const [eventsToShow, setEventsToShow] = useState([""]);
	const [loaderEvents, setLoaderEvents] = useState(true);

	// console.log(loaderEvents);

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

		const filterEventsArray = (search, filterCountry) => {
			const searchLCase = search.toLowerCase();

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
						country.indexOf(filterCountry.toLowerCase()) > -1 &&
						country.indexOf(filterIndustry.toLowerCase()) > -1
					);
				}),
			];

			setEventsToShow(filteredEvents);
		};
		setLoaderEvents(false);
		filterEventsArray(search, filterCountry);
		console.log(filterCountry);
	}, [eventsArr, search, filterCountry]);

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
								onChange={(event) => setFilterIndustry(event.target.value)}
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
								onChange={(event) => setFilterCountry(event.target.value)}
							>
								<option value="">Choose location...</option>
								<option value="Azerbaijan">Azerbaijan</option>
								<option value="Kazakhstan">Kazakhstan</option>
								<option value="Uzbekistan">Uzbekistan</option>
							</select>
						</div>
					</div>
					<div className="cards">
						{!loaderEvents ? (
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
	min-height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
