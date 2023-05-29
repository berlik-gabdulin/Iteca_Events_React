import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Fragment, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Loader } from '../components/loader';
import { SiteSwitch } from '../components/siteSwitch';

const Members = () => {
  const data = useSelector((state) => {
    return state.contacts;
  });

  return (
    <MembersWrp
      style={
        data.map_link !== ''
          ? { marginTop: 0 + 'px' }
          : { marginTop: 100 + 'px' }
      }
      mainColor={SiteSwitch().mainColor}
      darkColor={SiteSwitch().darkColor}
    >
      {data.contacts
        ? data.contacts.map((member) => {
            return (
              <div className='member' key={member?.name}>
                <img src={member.photo.url} className='member__photo' />
                <h5 className='member__name'>{member?.name}</h5>
                <p className='member__industry'>{member.industry}</p>
                <a href={`tel:${member.phone}`} className='member__link'>
                  {member.phone}
                </a>
                <a href={`mailto:${member.email}`} className='member__link'>
                  {member.email}
                </a>
              </div>
            );
          })
        : null}
    </MembersWrp>
  );
};

const MembersWrp = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  max-width: 100%;
  .member {
    position: relative;
    width: 50%;
    margin-bottom: 32px;
    padding-right: 16px;
    font-size: 20px;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    &__photo {
      display: block;
      float: left;
      margin-right: 12px;
      margin-bottom: 12px;
      border-radius: 10px;
      @media screen and (max-width: 768px) {
        float: none;
      }
    }
    &__name {
      font-size: 24px;
      margin: 0;
    }
    &__industry {
      font-weight: 300;
    }
    &__link {
      display: block;
      margin: 1em 0;
      color: ${({ mainColor }) => (mainColor ? mainColor : '#222')} !important;
      text-decoration: none;
      &:hover {
        color: ${({ darkColor }) =>
          darkColor ? darkColor : '#222'} !important;
        text-decoration: underline;
      }
    }
  }
`;

export default Members;
