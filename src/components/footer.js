import axios from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import styled from 'styled-components';
import { Loader } from './loader';
import { SiteSwitch } from '../components/siteSwitch';
import { Container } from './styles';

export const Footer = () => {
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState(false);
  const [loader, setLoader] = useState(false);
  const [popup, setPopup] = useState(false);
  const showSuccess = () => {
    setSuccess(true);
    setLoader(false);
    setTimeout(() => {
      setStatus(false);
      setSuccess(false);
    }, 2000);
  };

  const formik = useFormik({
    initialValues: {
      fullName: '',
      company: '',
      email: '',
      phone: '',
    },
    onSubmit: (values, { resetForm }) => {
      setStatus(true);
      setLoader(true);

      const formData = new FormData();

      formData.append('fullName', values.fullName);
      formData.append('company', values.company);
      formData.append('email', values.email);
      formData.append('phone', values.phone);

      axios
        .post(
          `https://${
            SiteSwitch().formUrl
          }/wp-json/contact-form-7/v1/contact-forms/120/feedback`,
          formData,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
          }
        )
        .then((res) => {
          console.log(res);
          showSuccess();
          resetForm();
          setPopup(false);
        });
    },
  });

  const CloseModal = (e) => {
    if (e.target === document.getElementById('ModalWrapper')) {
      setPopup(false);
    }
  };

  return (
    <>
      <FooterWrapper>
        <Container>
          <FooterText>
            <p>
              Copyright © 2021 {SiteSwitch().footerDesc} All right reserved.{' '}
              <a
                href='http://www.ica-eurasia.com/privacy.html'
                target='_blank'
                rel='noreferrer'
              >
                Cookie and Privacy Policy.
              </a>
            </p>
          </FooterText>
        </Container>
      </FooterWrapper>
      {popup ? (
        <ModalWrapper onClick={CloseModal} id='ModalWrapper'>
          <div className='modal' id='feedback-modal'>
            <CloseBtn onClick={() => setPopup(false)}>
              <img src='/img/close-bookastand.svg' alt='Close' />
            </CloseBtn>
            <form className='modal-form' onSubmit={formik.handleSubmit}>
              <h3 className='modal-form__title'>Contact Us</h3>
              <div className='input-group'>
                <input
                  type='text'
                  name='fullName'
                  className='input-group-item search-form__input'
                  placeholder='Contact person (full name)*'
                  onChange={formik.handleChange}
                  value={formik.values.fullName}
                  required
                />
              </div>
              <div className='input-group'>
                <input
                  type='text'
                  name='company'
                  className='input-group-item search-form__input'
                  placeholder='Company name*'
                  onChange={formik.handleChange}
                  value={formik.values.company}
                  required
                />
              </div>
              <div className='input-group'>
                <input
                  type='text'
                  name='email'
                  className='input-group-item search-form__input'
                  placeholder='Email*'
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  required
                />
              </div>
              <div className='input-group'>
                <input
                  type='text'
                  name='phone'
                  className='input-group-item search-form__input'
                  placeholder='Contact phone number*'
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  required
                />
              </div>
              <button className='modal-search-form__button' type='submit'>
                Send
              </button>
              {status ? (
                <Success>
                  {loader ? <Loader /> : null}
                  {success ? (
                    <SuccessMessage>
                      Your message has been sent successfully.
                    </SuccessMessage>
                  ) : null}
                </Success>
              ) : null}
            </form>
          </div>
        </ModalWrapper>
      ) : null}
      <Custom>
        <CustomWrapper>
          <a href onClick={() => setPopup(true)}>
            Book a stand
          </a>
        </CustomWrapper>
      </Custom>
    </>
  );
};

const FooterWrapper = styled.footer`
  background: ${SiteSwitch().darkColor};
  min-height: 80px;
  display: flex;
  align-items: center;
`;

const FooterText = styled.div`
  padding-left: 0;
  p {
    font-size: 16px;
    list-style: none;
    font-weight: bold;
    color: ${SiteSwitch().mainColor};
    a {
      color: ${SiteSwitch().mainColor};
      transition: 0.3s;
      font-weight: 700;
      &:focus,
      &:hover {
        color: ${SiteSwitch().lighterColor};
      }
    }
  }
`;

const Success = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
`;

const SuccessMessage = styled.h4`
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
`;

const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000bb;
  z-index: 1000;
`;

const CloseBtn = styled.button`
  position: absolute;
  display: block;
  padding: 0;
  top: 15px;
  right: 15px;
  width: 20px;
  height: 20px;
  border: none;
  background: none;
  transform: scale(1);
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.3);
  }
`;

const Custom = styled.div`
  position: fixed;
  display: flex;
  max-width: 182px;
  width: 100%;
  height: 74px;
  border-radius: 0 10px 10px 0;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-left: none;
  bottom: 30px;
  left: 0;
  background: linear-gradient(
    90deg,
    ${SiteSwitch().backgroundColor} 0%,
    rgba(255, 255, 255, 0.15) 156.04%
  );
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  transition: 0.3s;
  z-index: 100;
  cursor: pointer;
  &:hover {
    box-shadow: -7px 0px 30px 3px #0002;
    border: 1px solid #5553;
    border-left: none;
  }
  @media only screen and (max-width: 768px) {
    max-width: 160px;
    height: 64px;
  }
`;

const CustomWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  margin: 0 auto;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    color: #ffffff;
  }
  @media only screen and (max-width: 768px) {
    max-width: 160px;
    height: 64px;
    a {
      font-size: 16px;
    }
  }
`;
