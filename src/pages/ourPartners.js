import { useSelector } from 'react-redux';
import { Partner } from '../components/partnerCard';

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
      <div className='container'>
        <div className='wrapper'>
          {orgs.length ? (
            <>
              <div className='group__title'>CO-ORGANISERS</div>
              {orgs.map((org) => (
                <Partner data={org} />
              ))}
            </>
          ) : null}
        </div>
        <div className='wrapper'>
          {partners.length ? (
            <>
              <div className='group__title'>PARTNERS</div>
              {partners.map((partner) => {
                return <Partner data={partner} />;
              })}
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
};
