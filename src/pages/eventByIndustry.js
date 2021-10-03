import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { EventCard } from "../components/eventCard";
import { Loader } from "../components/loader";
import { EventsService } from "../server/eventsService";

export const EventByIndustry = () => {
	const dispatch = useDispatch();
	const { getEventsArrThunk } = EventsService();
	const fetchStatus = useSelector(({ fetchStatus }) => fetchStatus);
	const { industry, title } = useParams();
	const events = useSelector((store) => store.eventsArr);
	const [eventsToShow, setEventsToShow] = useState([]);

	useEffect(() => {
		if (!fetchStatus) {
			dispatch(getEventsArrThunk());
		}
	}, []);

	useEffect(() => {
		const buffer = events.filter((event) => event.industry === industry);
		setEventsToShow(buffer);
		// console.log(eventsToShow);
	}, [events]);

	return (
		<div className="container">
			<Title>{title}</Title>
			<div className="search">
				<div className="cards">
					{eventsToShow.length ? (
						eventsToShow
							.filter((event) => !event.pastEvent)
							.map((event, index) => {
								return <EventCard event={event} key={index} />;
							})
					) : (
						<Loader />
					)}
				</div>
			</div>
		</div>
	);
};

const Title = styled.h2`
	font-size: 32px;
	text-align: center;
	margin-bottom: -100px;
	@media (max-width: 991px) {
		margin-bottom: -50px;
		font-size: 24px;
	}
`;
