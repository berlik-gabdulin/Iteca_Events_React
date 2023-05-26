import { useCallback, useEffect, useState, useRef } from 'react';
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
  const [showPartner, setShowPartner] = useState(false);
  const [curPartner, setCurPartner] = useState([]);
  const mapRef = useRef(null);

  useEffect(() => {
    setOurNetwork(data.partners_info.map((partner) => partner.country));
  }, [data]);

  useEffect(() => {
    const map = mapRef.current;
    if (map) {
      const locations = map.querySelectorAll('.svg-map__location');
      locations.forEach((location) => {
        const name = location.getAttribute('name');
        if (ourNetwork.includes(name)) {
          location.classList.add('svg-map__location-ica');
        }
      });
    }
  }, [ourNetwork]);

  useEffect(() => {
    const map = mapRef.current;
    if (map) {
      const countryNameHandler = (e) => {
        if (e.target.classList.contains('svg-map__location-ica')) {
          setCountry(e.target.getAttribute('name'));
          map.removeEventListener('mouseover', countryNameHandler);
        }
      };
      map.addEventListener('mouseover', countryNameHandler);
      return () => {
        map.removeEventListener('mouseover', countryNameHandler);
      };
    }
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (map) {
      const clickHandler = (e) => {
        if (e.target.classList.contains('svg-map__location-ica')) {
          const partners = data.partners_info.filter((item) => {
            return item.country === country;
          });
          setCurPartner(partners);
          setShowPartner(true);
          scrollTo({ id: curPartner.partners_name, duration: 1000 });
        }
      };
      map.addEventListener('click', clickHandler);
      return () => {
        map.removeEventListener('click', clickHandler);
      };
    }
  }, [country]);

  const ICAWorld = {
    label: 'Map of ICA Eurasia',
    viewBox: '0 0 1050 500',
    locations: World.locations.filter((item) => eurasia.includes(item.name)),
  };

  return (
    <div className='container'>
      <Title>{country}</Title>
      <MapWrapper ref={mapRef}>
        <SVGMap map={ICAWorld} />
      </MapWrapper>
      {showPartner ? <Partner data={curPartner} /> : null}
      {showPartner && curPartner[0]?.country === 'United Kingdom' ? (
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
