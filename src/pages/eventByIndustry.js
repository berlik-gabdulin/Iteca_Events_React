import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { EventCard } from '../components/eventCard';
import { Loader } from '../components/loader';
import { EventsService } from '../server/eventsService';
import { Container } from '../components/styles';
import { CardsWrapper } from './home';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const buffer = events.filter((event) => event.industry === industry);
    setEventsToShow(buffer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events]);

  return (
    <Container>
      <Title>{title}</Title>
      <CardsWrapper>
        {eventsToShow.length ? (
          eventsToShow
            .filter((event) => !event.pastEvent)
            .map((event, index) => {
              return <EventCard event={event} key={index} />;
            })
        ) : (
          <Loader />
        )}
      </CardsWrapper>
    </Container>
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
