import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { SiteSwitch } from './siteSwitch';
import { scrollTo } from './../libs/scrollTo';
import { Container } from './styles';
import { useEffect } from 'react';

export const HeaderHome = () => {
  const data = useSelector((state) => {
    return state.homeData;
  });

  const bgImg = data?.background_image?.url
    ? data?.background_image?.url
    : null;

  document.title = `${SiteSwitch().title} | ${data.page_title}`;

  return (
    <Hero bgImg={bgImg}>
      <Container>
        <HeroTitle>{data.title}</HeroTitle>
        <HeroSubtitle>{data.subtitle}</HeroSubtitle>
        <ScrollDownIcon
          src='./img/scrollDown.svg'
          alt=''
          onClick={() => scrollTo({ id: 'search' })}
        />
      </Container>
    </Hero>
  );
};

const Hero = styled.div`
  position: relative;
  background: url(${({ bgImg }) => bgImg}) no-repeat;
  background-size: cover;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  z-index: 0;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${SiteSwitch().backgroundColor};
    z-index: 1;
  }
`;
const HeroTitle = styled.h1`
  text-align: center;
  color: #ffffff;
  font-weight: 800;
  font-size: 48px;
`;
const HeroSubtitle = styled.h2`
  text-align: center;
  font-weight: bold;
  font-size: 26px;
  color: #ffffff;
  line-height: 140%;
`;

const ScrollDownIcon = styled.img`
  display: block;
  width: 60px;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 30px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    transform: scale(1.2);
    filter: drop-shadow(0 3px 3px rgba(255, 255, 255, 0.5));
  }
`;
