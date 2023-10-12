import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Fragment, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Loader } from '../components/loader';
import { SiteSwitch } from '../components/siteSwitch';
import Members from '../components/members';
import { Container as ContainerDefault } from '../components/styles';

export const Contacts = () => {
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState(false);
  const [loader, setLoader] = useState(false);
  const data = useSelector((state) => {
    return state.contacts;
  });

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
      message: '',
    },
    onSubmit: (values, { resetForm }) => {
      setStatus(true);
      setLoader(true);

      const formData = new FormData();

      formData.append('fullName', values.fullName);
      formData.append('company', values.company);
      formData.append('email', values.email);
      formData.append('message', values.message);

      axios
        .post(
          `https://${
            SiteSwitch().formUrl
          }/wp-json/contact-form-7/v1/contact-forms/119/feedback`,
          formData,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
          }
        )
        .then((res) => {
          showSuccess();
          resetForm();
        });
    },
  });

  const phoneLink = `tel:${data.phone}`;

  return (
    <>
      <ContactsContent>
        <Container>
          <Column>
            {data.phone !== '' ? (
              <TextGroup>
                Phone: <a href={phoneLink}>{data.phone}</a>
              </TextGroup>
            ) : null}
            {data.address !== '' ? (
              <TextGroup>
                <p>Address</p>
                <p>{data.address}</p>
              </TextGroup>
            ) : null}
            {data.hours.length ? (
              <TextGroup>
                <p>Hours:</p>
                <p>
                  {data.hours.map((item, index) => (
                    <Fragment key={index}>
                      {item}
                      <br />
                    </Fragment>
                  ))}
                </p>
              </TextGroup>
            ) : null}
          </Column>
          <Column>
            {data.map_link !== '' ? (
              <Map>
                <iframe
                  src={data.map_link}
                  loading='lazy'
                  title='Location Map'
                ></iframe>
              </Map>
            ) : null}
            <Form
              onSubmit={formik.handleSubmit}
              style={data.map_link !== '' ? { marginTop: 100 + 'px' } : null}
            >
              <InputGroup>
                <FormLabel htmlFor='fullName'>Name</FormLabel>
                <InputGroupItem
                  type='text'
                  name='fullName'
                  className='input-group-item form-input'
                  onChange={formik.handleChange}
                  value={formik.values.fullName}
                  required
                />
              </InputGroup>
              <InputGroup>
                <FormLabel htmlFor='company'>Company</FormLabel>
                <InputGroupItem
                  type='text'
                  name='company'
                  onChange={formik.handleChange}
                  value={formik.values.company}
                  required
                />
              </InputGroup>
              <InputGroup>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <InputGroupItem
                  type='text'
                  name='email'
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  required
                />
              </InputGroup>
              <InputGroup>
                <FormLabel htmlFor='message'>Message</FormLabel>
                <InputGroupTextarea
                  type='text'
                  name='message'
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  required
                />
              </InputGroup>
              <FormButton type='submit'>Send</FormButton>
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
            </Form>
          </Column>
        </Container>
        <Container>
          <Members />
        </Container>
      </ContactsContent>
    </>
  );
};

const ContactsContent = styled.section``;

const Container = styled(ContainerDefault)`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Column = styled.div`
  width: 100%;
`;

const TextGroup = styled.div`
  font-size: 20px;
  font-weight: 500;
  max-width: 398px;
  margin-bottom: 55px;
  line-height: 140%;
  a {
    transition: all 0.15s ease-in-out;
    color: #000;
    &:hover {
      color: ${SiteSwitch().mainColor};
    }
  }
  @media only screen and (max-width: 1280px) {
    font-size: 18px;
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

const Map = styled.div`
  position: relative;
  padding-top: 60%;
  display: flex;
  filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.4));
  border-radius: 10px;
  overflow: hidden;
  height: 0;
  iframe {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 650px;
  height: 560px;
  background: #ffffff;
  padding-bottom: 45px;
  filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.4));
  border-radius: 10px;
`;

const InputGroup = styled.div`
  padding: 35px 55px 0;
  display: flex;
  flex-direction: column;
`;

const InputGroupItem = styled.input`
  padding: 0 15px;
  border-radius: 10px;
  border: 1px solid ${SiteSwitch().lightColor};
  height: 40px;
  max-width: 540px;
  width: 100%;
`;
const InputGroupTextarea = styled.input`
  padding: 0 15px;
  border-radius: 10px;
  border: 1px solid ${SiteSwitch().lightColor};
  height: 40px;
  max-width: 540px;
  width: 100%;
  height: 130px;
  outline: none;
  resize: none;
`;
const FormLabel = styled.label`
  font-size: 18px;
  line-height: 100%;
  color: ${SiteSwitch().mainColor};
  margin-bottom: 5px;
`;

const FormButton = styled.button`
  outline: none;
  max-width: 190px;
  width: 100%;
  height: 40px;
  border: none;
  background-color: ${SiteSwitch().mainColor};
  border-radius: 10px;
  color: #ffffff;
  margin: 20px 0 0 55px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 0px 30px 3px ${SiteSwitch().backgroundColor};
  }
`;
