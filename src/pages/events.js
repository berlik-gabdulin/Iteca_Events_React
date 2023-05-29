import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Loader } from '../components/loader';
import { Container } from '../components/styles';

export const Events = () => {
  const data = useSelector((state) => state.events.industry);

  return (
    <>
      <section className='events-cards'>
        <Container>
          <div className='cards'>
            {data.length ? (
              data.map((event, index) => {
                return (
                  <div className='cards-item' key={index}>
                    <img src={event.image.url} alt='' />
                    <Link
                      className='cards-item__text'
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
        </Container>
      </section>
    </>
  );
};
