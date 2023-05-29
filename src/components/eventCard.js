import React from 'react';
import styled from 'styled-components';
import { SiteSwitch } from './siteSwitch';

export const EventCard = ({ event }) => {
  return (
    <CardWrapper>
      <Card>
        <CardImg>
          <img src={event.image_profile} alt={event.project} />
        </CardImg>
        <CardInner>
          <CardTitle>{event.project}</CardTitle>
          <CardText>{event.description}</CardText>
          <CardItemDate>{event.textDate}</CardItemDate>
          <CardItemAddress>{event.location}</CardItemAddress>
          <div>
            <GoToLink href={event.website} target='_blank' rel='noreferrer'>
              Go to website
            </GoToLink>
          </div>
        </CardInner>
      </Card>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: calc(100% / 3);
  display: flex;
  justify-content: center;
  padding: 0 10px 100px;
  box-sizing: border-box;
  @media only screen and (max-width: 1024px) {
    width: 50%;
    padding-bottom: 50px;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding-bottom: 30px;
  }
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 391px;
  min-height: 100%;
  box-shadow: 0 0px 30px -10px ${SiteSwitch().backgroundColor};
  background: #ffffff;
  font-family: 'Poppins', sans-serif;
  border-radius: 10px;
  p {
    margin: 0 0 30px;
  }
`;

const CardImg = styled.div`
  position: relative;
  height: 0;
  padding-top: 50%;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    border-radius: 10px;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;

const CardInner = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 0 30px 30px;
  margin-bottom: 20px;
`;

const CardTitle = styled.h4`
  font-size: 24px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  color: #000000;
  margin-bottom: 8px;
  @media only screen and (max-width: 991px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 18px;
    margin-top: 23px;
  }
`;
const CardText = styled.p`
  line-height: 120%;
  font-weight: 300;
  font-size: 20px;
  color: #000000;
  min-height: 100px;
  height: 100%;
  font-size: 20px;
  @media only screen and (max-width: 991px) {
    font-size: 16px;
    min-height: auto;
  }
`;

const CardItemDate = styled.p`
  font-weight: 600;
  line-height: 120%;
  color: #000000;
  font-size: 16px;
  @media only screen and (max-width: 425px) {
    margin-bottom: 0;
  }
`;
const CardItemAddress = styled.p`
  font-weight: 300;
  font-size: 16px;
`;

const GoToLink = styled.a`
  text-decoration: none;
  font-size: 18px;
  font-family: 'Poppins', sanss-serif;
  color: ${SiteSwitch().mainColor};
  font-weight: 500;
  border-radius: 10px;
  border: 1px ${SiteSwitch().mainColor} solid;
  padding: 9px 19px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 30px -10px ${SiteSwitch().darkColor};
  }
`;
