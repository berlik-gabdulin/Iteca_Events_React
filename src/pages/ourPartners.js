import { useSelector } from 'react-redux';
import { Partner } from '../components/partnerCard';
import { Container } from '../components/styles';
import styled from 'styled-components';
import { SiteSwitch } from '../components/siteSwitch';

export const OurPartners = () => {
  const data = useSelector((state) => {
    return state.partners;
  });

  const orgs = data.partners_info.filter(
    (item) => item.partner_type === 'coOrganizer'
  );
  const partners = data.partners_info.filter(
    (item) => item.partner_type === 'partner'
  );
  console.log(partners.length);

  return (
    <section className='partners-group group'>
      <Container>
        <div className='wrapper'>
          {orgs.length ? (
            <>
              <PartnerTitle className='group__title'>
                CO-ORGANISERS
              </PartnerTitle>
              {orgs.map((org) => (
                <Partner data={org} />
              ))}
            </>
          ) : null}
        </div>
        <div className='wrapper'>
          {partners.length ? (
            <>
              <PartnerTitle className='group__title'>PARTNERS</PartnerTitle>
              {partners.map((partner) => {
                return <Partner data={partner} />;
              })}
            </>
          ) : null}
        </div>
      </Container>
    </section>
  );
};

const PartnerTitle = styled.h2`
  position: relative;
  display: block;
  margin-bottom: 90px;
  padding: 25px 0;
  font-weight: bold;
  font-size: 36px;
  color: #ffffff;
  z-index: 2;
  &::before {
    position: absolute;
    content: '';
    height: 90px;
    width: 50vw;
    background: linear-gradient(
      90deg,
      ${SiteSwitch().mainColor} 14.1%,
      rgba(15, 126, 134, 0) 116.64%
    );
    border-radius: 0 10px 10px 0;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    right: 60%;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
  }
`;
