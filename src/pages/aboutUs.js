import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '../components/styles';

export const AboutUs = () => {
  const { text_about } = useSelector(({ about: { text_about } }) => ({
    text_about,
  }));

  return (
    <section className='about-content'>
      <Container>
        {text_about.map((item, index) => {
          return (
            <p className='about-content__text' key={index}>
              {item}
            </p>
          );
        })}
      </Container>
    </section>
  );
};
