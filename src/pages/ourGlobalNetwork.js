import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { SVGMap } from 'react-svg-map';
import 'react-svg-map/lib/index.css';
import World from '@svg-maps/world';
import { eurasia } from '../components/network';
import { useSelector } from 'react-redux';
import { Partner } from '../components/partnerCard';
import { scrollTo } from '../libs/scrollTo';
import Members from '../components/members';

export const OurGlobalNetwork = () => {
  const data = useSelector((state) => state.partners);
  const [country, setCountry] = useState('Select country');
  const [ourNetwork, setOurNetwork] = useState([]);
  const [curPartner, setCurPartner] = useState(null);
  const [showPartner, setShowPartner] = useState(false);

  useEffect(() => {
    setOurNetwork(data.partners_info.map((partner) => partner.country));
  }, [data]);

  const ICAWorld = {
    label: 'Map of ICA Eurasia',
    viewBox: '0 0 1050 500',
    locations: World.locations.filter((item) => eurasia.includes(item.name)),
  };

  const setClass = useCallback(() => {
    const map = document.querySelector('.svg-map');
    if (map) {
      const countries = Array.from(map.querySelectorAll('.svg-map__location'));
      countries.forEach((item) => {
        if (ourNetwork.includes(item.getAttribute('name'))) {
          item.classList.add('svg-map__location-ica');
        }
      });
    }
  }, [ourNetwork]);

  useEffect(() => {
    setClass();
  }, [setClass, ourNetwork]);

  useEffect(() => {
    const map = document.querySelector('.svg-map');
    const mouseOverHandler = (e) => {
      if (e.target.classList.contains('svg-map__location-ica')) {
        setCountry(e.target.getAttribute('name'));
      }
    };
    map?.addEventListener('mouseover', mouseOverHandler);

    const clickHandler = (e) => {
      if (e.target.classList.contains('svg-map__location-ica')) {
        const selectedCountry = e.target.getAttribute('name');
        const partner = data.partners_info.find(
          (item) => item.country === selectedCountry
        );
        setCurPartner(partner);
        setShowPartner(true);
      }
    };
    map?.addEventListener('click', clickHandler);

    return () => {
      map?.removeEventListener('click', clickHandler);
      map?.removeEventListener('mouseover', mouseOverHandler);
    };
  }, [data]);

  useEffect(() => {
    if (curPartner) {
      scrollTo({ id: curPartner.partners_name, duration: 1000 });
    }
  }, [curPartner]);

  return (
    <div className='container'>
      <Title>{country}</Title>
      <MapWrapper>
        <SVGMap map={ICAWorld} />
      </MapWrapper>
      {showPartner && curPartner ? <Partner data={curPartner} /> : null}
      {showPartner && curPartner?.country === 'United Kingdom' ? (
        <Members />
      ) : null}
    </div>
  );
};

const MapWrapper = styled.div`
  padding: 30px 0;
  display: flex;
  .svg-map {
    position: relative;
    left: -15%;
    &__location {
      fill: #aeaeae;
      &-ica {
        fill: #00653b;
        :hover {
          fill: #e25306bf;
        }
      }
    }
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 32px;
  line-height: 1.4;
  margin: 32px auto 0;
`;
