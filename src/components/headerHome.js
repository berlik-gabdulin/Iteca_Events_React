import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { SiteSwitch } from './siteSwitch';
import { scrollTo } from './../libs/scrollTo';

export const HeaderHome = () => {
  const data = useSelector((state) => {
    return state.homeData;
  });

  document.title = `${SiteSwitch().title} | ${data.page_title}`;

  return (
    <div className="hero">
      <div className="container">
        <h1 className="hero__title">{data.title}</h1>
        <h2 className="hero__subtitle">{data.subtitle}</h2>
        <ScrollDownIcon
          src="./img/scrollDown.svg"
          alt=""
          onClick={() => scrollTo({ id: 'search' })}
        />
      </div>
    </div>
  );
};

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
