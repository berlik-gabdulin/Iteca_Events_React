import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { EventCard } from '../components/eventCard';
import { Loader } from '../components/loader';
import { EventsService } from '../server/eventsService';
import { Container } from '../components/styles';
import { SiteSwitch } from '../components/siteSwitch';

export const Home = () => {
  const dispatch = useDispatch();
  const { getEventsArrThunk } = EventsService();
  const fetchStatus = useSelector(({ fetchStatus }) => fetchStatus);
  const [eventsArr, industry, api_list] = useSelector(
    ({ eventsArr, homeData: { industry, api_list } }) => [
      eventsArr,
      industry,
      api_list,
    ]
  );
  const [search, setSearch] = useState('');
  const [filterCountry, setFilterCountry] = useState('');
  const [filterIndustry, setFilterIndustry] = useState('');
  const [eventsToShow, setEventsToShow] = useState(['']);

  useEffect(() => {
    if (!fetchStatus) {
      dispatch(getEventsArrThunk());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const arraySorted = [
      ...eventsArr.sort((a, b) => {
        return new Date(a.beginDate) - new Date(b.beginDate);
      }),
    ];

    const filterEventsArray = (search, filterCountry, filterIndustry) => {
      const searchLCase = search.toLowerCase();

      const filteredEvents = [
        ...arraySorted.filter((event) => {
          let title = event.title.toLowerCase(),
            description = event.description.toLowerCase(),
            location = event.location.toLowerCase(),
            country = event.country.toLowerCase(),
            textDate = event.textDate.toLowerCase(),
            industry = event.industry ? event.industry.toLowerCase() : '';

          return (
            (title.indexOf(searchLCase) > -1 ||
              description.indexOf(searchLCase) > -1 ||
              location.indexOf(searchLCase) > -1 ||
              textDate.indexOf(searchLCase) > -1) &&
            country.indexOf(filterCountry.toLowerCase()) > -1 &&
            industry.indexOf(filterIndustry.toLowerCase()) > -1
          );
        }),
      ];
      setEventsToShow(filteredEvents);
    };
    filterEventsArray(search, filterCountry, filterIndustry);
    const arr = new Set(
      eventsArr.map((item) => item.image_profile.split('/')[2])
    );
    console.log(arr);
  }, [eventsArr, search, filterCountry, filterIndustry]);

  return (
    <div>
      <section id='search' className='search'>
        <Container>
          <div className='search-form'>
            <SearchFormItem>
              <input
                type='text'
                id='searching'
                placeholder='Event title, industry, country, city, month'
                onChange={(event) => setSearch(event.target.value)}
              />
            </SearchFormItem>
            <SearchFormItem>
              <SearchItemText>Search by location</SearchItemText>
              <SerachFormSelect
                name='location'
                id='location'
                onChange={(event) => setFilterCountry(event.target.value)}
              >
                <option value=''>Choose location...</option>
                {api_list
                  ? api_list.map((api) => (
                      <option value={api.country} key={api.country}>
                        {api.country}
                      </option>
                    ))
                  : null}
              </SerachFormSelect>
            </SearchFormItem>
            <SearchFormItem>
              <p className='search-form__text'>Search by industry</p>
              <SerachFormSelect
                name='industry'
                id='industry'
                onChange={(event) => setFilterIndustry(event.target.value)}
              >
                <option value=''>Choose industry</option>
                {industry
                  ? industry.map((item) => {
                      return (
                        <option value={item.alias} key={item.alias}>
                          {item.label}
                        </option>
                      );
                    })
                  : null}
              </SerachFormSelect>
            </SearchFormItem>
          </div>
          <CardsWrapper>
            {eventsArr.length ? (
              eventsToShow
                .filter((event) => !event.pastEvent)
                .map((item) => {
                  return <EventCard event={item} key={item.id} />;
                })
            ) : (
              <LoaderWrapper>
                <Loader />
              </LoaderWrapper>
            )}
          </CardsWrapper>
        </Container>
      </section>
    </div>
  );
};

export default Home;

const LoaderWrapper = styled.div`
  min-height: 100px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const SearchFormItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 850px;
  margin: 0 auto;
  &:nth-child(2n) {
    justify-content: space-between;
    flex-direction: row;
    margin-top: 30px;
  }
  &:nth-child(3) {
    justify-content: space-between;
    flex-direction: row;
  }
  input {
    border: 1px ${SiteSwitch().mainColor} solid;
    border-radius: 10px;
    max-width: 850px;
    width: 100%;
    height: 60px;
    padding: 0 20px;
    box-sizing: border-box;
    &::placeholder {
      font-family: 'Poppins', sans-serif;
      font-size: 22px;
      color: ${SiteSwitch().mainColor};
    }
  }
`;

const SerachFormSelect = styled.select`
  min-height: 40px;
  height: 100%;
  max-width: 589px;
  width: 100%;
  border: 1px ${SiteSwitch().mainColor} solid;
  border-radius: 10px;
  padding-left: 10px;
  outline: none;
`;

const SearchItemText = styled.p`
  font-size: 18px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  margin-top: 146px;
  @media only screen and (max-width: 1024px) {
    margin-top: 100px;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;
