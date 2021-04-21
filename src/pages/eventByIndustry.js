import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { EventCard } from "../components/eventCard";
import { EventsService } from "../server/eventsService";

export const EventByIndustry = () => {
	const dispatch = useDispatch();
	const { getEventsArrThunk } = EventsService();
	const fetchStatus = useSelector(({ fetchStatus }) => fetchStatus);
	const { industry, title } = useParams();
	const events = useSelector((store) => store.eventsArr);

	console.log(title);
	useEffect(() => {
		if (!fetchStatus) {
			dispatch(getEventsArrThunk());
		}
	}, []);

	return (
		<div class="container">
			<Title>{title}</Title>
			<div className="search">
				<div className="cards">
					{events.map((event, index) => {
						return event.industry === industry ? (
							<EventCard event={event} key={index} />
						) : null;
					})}
				</div>
			</div>
		</div>
	);
};

const Title = styled.h2`
	font-size: 32px;
	text-align: center;
	margin-bottom: -100px;
`;
